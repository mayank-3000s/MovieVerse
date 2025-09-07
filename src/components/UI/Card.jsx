export const Card = ({ movie }) => {
  return (
    <li className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 overflow-hidden">
      {/* Movie Poster */}
      <div className="relative w-full h-[300px] bg-gray-900 flex items-center justify-center overflow-hidden group">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://tse1.mm.bing.net/th/id/OIP.4FhD2SD5E-FuBxA1y0jvgwHaGv?pid=Api&P=0&h=180"
          }
          alt={movie.Title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>

        {/* Hover Overlay Text */}
        <div className="absolute bottom-0 w-full p-3 opacity-0 group-hover:opacity-100 transition duration-500">
          <h2 className="text-base font-semibold text-white truncate">{movie.Title}</h2>
          <p className="text-gray-300 text-xs capitalize">{movie.Type}</p>
        </div>
      </div>

      {/* Movie Info Section */}
      <div className="p-3 flex flex-col gap-2">
        <h1 className="text-lg font-bold text-white truncate">{movie.Title}</h1>
        <div className="flex justify-between items-center text-gray-300 text-sm">
          <p className="bg-gray-700 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-wide">
            {movie.Type}
          </p>
          <p className="text-gray-400 font-medium">📅 {movie.Year}</p>
        </div>
      </div>
    </li>
  );
};
