export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto flex  sm:flex-row items-center  gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm order-1 sm:order-2">
          © 2026. All rights reserved.
        </p>
        <a
          href="https://github.com/Mahesh0111m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium order-2 sm:order-1"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mahesh1010/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium order-3"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
