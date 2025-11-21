export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold tracking-tight text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to TODO App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            A simple and efficient way to manage your tasks and stay organized.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
