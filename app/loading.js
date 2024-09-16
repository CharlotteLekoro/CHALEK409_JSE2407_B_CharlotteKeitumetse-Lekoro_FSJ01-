export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col justify-center items-center h-full py-20">
        {/* Jumping Dots */}
        <div className="flex space-x-2 mb-6">
          <div className="w-4 h-4 bg-[#f43f5e]  rounded-full animate-bounce-1"></div>
          <div className="w-4 h-4 bg-[#f43f5e]  rounded-full animate-bounce-2"></div>
          <div className="w-4 h-4 bg-[#f43f5e] rounded-full animate-bounce-3"></div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Loading...
        </h1>
        <p className="text-gray-600 text-center">
          Please wait, data fetching
        </p>
      </div>
    </div>
  );
}
