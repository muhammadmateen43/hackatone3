export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Vision */}
        <div>
          <h1 className="text-blue-600 font-bold text-xl">MORENT</h1>
          <p className="text-gray-600 mt-2">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* About Section */}
          <div>
            <h2 className="font-bold text-gray-800">About</h2>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="font-bold text-gray-800">Socials</h2>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Section */}
        <div>
          <h2 className="font-bold text-gray-800">Community</h2>
          <ul className="mt-2 text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-600">
            Privacy & Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms & Condition
          </a>
        </div>
        <p className="mt-4 md:mt-0">&copy; 2022 MORENT. All rights reserved</p>
      </div>
    </footer>
  );
}
