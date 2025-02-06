import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with Secret Key
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export const POST = async (request: Request) => {
  try {
    const { products } = await request.json();

    // Fetch all active products from Stripe
    const activeProducts = await stripe.products.list({ active: true });

    let stripeProducts = [];

    for (const product of products) {
      let matchedProduct = activeProducts?.data?.find(
        (stripeProduct) =>
          stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      // If the product is not in Stripe, create it with a price
      if (!matchedProduct) {
        const newProduct = await stripe.products.create({
          name: product.name,
        });

        const newPrice = await stripe.prices.create({
          product: newProduct.id,
          currency: "usd",
          unit_amount: product.price * 100, // Convert dollars to cents
        });

        matchedProduct = newProduct;
        matchedProduct.default_price = newPrice.id;
      }

      // Add product with price to Stripe checkout session
      stripeProducts.push({
        price: matchedProduct.default_price as string,
        quantity: product.quantity,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeProducts,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
