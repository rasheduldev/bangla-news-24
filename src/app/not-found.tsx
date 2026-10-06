
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none text-red-600">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-950 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mt-4 max-w-lg mx-auto">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition duration-300 shadow-md"
        >
          ← Go Back Home
        </Link>

        {/* Small decoration */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-3 h-3 bg-red-300 rounded-full"></span>
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
