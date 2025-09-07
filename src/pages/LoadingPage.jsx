export const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Spinning Loader */}
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h1 className="mt-6 text-xl font-semibold tracking-wide animate-pulse">
        Loading Movies...
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 text-sm">
        Please wait while we fetch the latest data 🎥
      </p>
    </div>
  );
};
