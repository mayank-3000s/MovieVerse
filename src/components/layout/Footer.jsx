const Footer = ()=>{
    return (
  <footer className="bg-gray-900 text-white mt-12">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      {/* Payment Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <ul className="space-y-2 text-gray-300">
          <li>Secure Payments</li>
          <li>UPI / Net Banking</li>
          <li>Credit & Debit Cards</li>
          <li>Cash on Delivery</li>
        </ul>
      </div>

      {/* Experience Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-2 text-gray-300">
          <li>Fast & Easy Checkout</li>
          <li>Quality Guaranteed</li>
          <li>24/7 Customer Support</li>
          <li>Exclusive Offers</li>
        </ul>
      </div>

      {/* Shopping Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Shopping</h2>
        <ul className="space-y-2 text-gray-300">
          <li>Latest Movies</li>
          <li>Top-rated Products</li>
          <li>Secure Packaging</li>
          <li>Free Returns</li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
        <p className="text-gray-300 mb-3">
          Subscribe to get updates and offers.
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-lg w-full focus:outline-none text-green-50"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="border-t border-gray-700 mt-6">
      <p className="text-center text-gray-400 text-sm py-4">
        This page is created by <span className="text-blue-400">Mayank Ranjan</span>
      </p>
    </div>
  </footer>
);

}

export default Footer;