import React from "react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Error fetching customers",
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <main className="grid min-h-[400px] place-items-center bg-white px-6 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-500">Error</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg text-gray-600">{message}</p>

        {onRetry && (
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={onRetry}
              className="rounded-md bg-red-500 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ErrorState;
