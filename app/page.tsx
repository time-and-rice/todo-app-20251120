export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center font-bold text-6xl text-transparent tracking-tight">
            Welcome to TODO App
          </h1>
          <p className="max-w-2xl text-center text-gray-600 text-xl dark:text-gray-400">
            A simple and efficient way to manage your tasks and stay organized.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
