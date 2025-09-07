// export const About = ()=>{
//     return(
//         <h1>About page</h1>
//     )
// }

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold mb-4 text-blue-400">About Our Movie App</h1>
      <p className="text-gray-300 max-w-2xl text-center mb-10">
        Welcome to <span className="text-blue-400 font-semibold">MovieVerse</span> 🎬 — 
        your one-stop destination for exploring movies and anime from all around the world.  
        Using the power of the <span className="font-semibold">OMDb API</span>, we bring you 
        instant access to a massive collection of movie details, posters, release years, 
        genres, and more — all in one place!
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Feature 1 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">🎥 Explore Movies</h2>
          <p className="text-gray-400">
            Search from thousands of movies, TV shows, and anime with detailed information 
            including release year, genre, ratings, and more.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">⚡ Instant Search</h2>
          <p className="text-gray-400">
            Powered by the OMDb API, our app fetches movie data instantly, giving you 
            fast and reliable results every time.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">📱 Responsive Design</h2>
          <p className="text-gray-400">
            Enjoy a seamless experience on any device. Whether you're on mobile, tablet, 
            or desktop, our app looks stunning everywhere.
          </p>
        </div>
      </div>

      {/* API Credit */}
      <p className="text-gray-400 mt-12 text-center text-sm">
        🔹 Powered by <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">OMDb API</a>
      </p>

      {/* Creator Credit */}
      <p className="text-gray-500 mt-3 text-sm">
        © {new Date().getFullYear()} Created by <span className="font-semibold text-white">Mayank Ranjan</span>
      </p>
    </div>
  );
};
