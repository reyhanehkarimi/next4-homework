export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go Back to Home
      </a>
    </div>
  );
}
