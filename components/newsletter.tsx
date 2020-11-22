import { FC } from "react";

export const Newsletter: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-0 sm:px-6 lg:py-16 lg:pb-0 lg:px-8">
      <div className="px-6 py-6 bg-black border-2 dark:border-indigo-600 rounded-lg shadow md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Want new post updates?
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-200">
            Sign up for my newsletter to get the latest 🔥
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              type="email"
              required
              className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Notify me
            </button>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            Your email address will be used strictly for new post updates.
          </p>
        </div>
      </div>
    </div>
  );
};
