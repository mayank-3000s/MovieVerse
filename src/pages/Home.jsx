import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-black">
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Discover Your Next Favorite Movie 🎬
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Browse through a vast collection of movies, explore genres, and stay updated with the latest releases!
          </p>
          <Link
            to="/movie"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Explore Movies
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-800 text-center p-10 mt-8 rounded-lg shadow-md mx-6 md:mx-12">
        <h2 className="text-2xl font-bold mb-3">Stay Updated!</h2>
        <p className="text-gray-300 mb-5">
          Subscribe to get the latest movie news and trending updates.
        </p>
        <Link
          to="/contact"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};
