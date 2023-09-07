import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-teal-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-teal-600 text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-2 text-sm font-semibold text-teal-800 bg-teal-100 hover:text-teal-100 hover:bg-teal-800"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

Custom404.layout = "SELF";

export default Custom404;
