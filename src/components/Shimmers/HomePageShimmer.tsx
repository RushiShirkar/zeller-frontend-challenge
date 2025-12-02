const HomePageShimmer = () => {
  return (
    <div className="animate-pulse space-y-10" aria-busy="true" aria-live="polite" aria-label="Loading content">
      {/* User Types */}
      <section className="space-y-3">
        <div className="h-4 w-40 bg-gray-200 rounded"></div>

        <div className="flex flex-col space-y-2">
          {/* Radio 1 */}
          <div className="flex items-center space-x-3 p-4">
            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
          </div>

          {/* Radio 2 */}
          <div className="flex items-center space-x-3 p-4">
            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      <div className="my-4 h-px w-full bg-gray-200" />

      {/* Admin Users */}
      <section className="space-y-5">
        <div className="h-4 w-40 bg-gray-200 rounded"></div>

        <div className="space-y-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              {/* Avatar shimmer */}
              <div className="h-12 w-12 rounded-md bg-gray-200"></div>

              <div className="space-y-2">
                {/* Name */}
                <div className="h-4 w-40 bg-gray-200 rounded"></div>

                {/* Role */}
                <div className="h-3 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageShimmer;
