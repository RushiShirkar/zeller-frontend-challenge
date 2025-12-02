const HomePageShimmer = () => {
  return (
    <div className="animate-pulse space-y-10">
      {/* User Types */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">User Types</h2>

        <div className="flex flex-col space-y-3">
          {/* Radio 1 */}
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 rounded-full border-2 border-blue-300"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>

          {/* Radio 2 */}
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Admin Users */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Admin Users</h2>

        <div className="space-y-6">
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

      <hr className="border-gray-200" />
    </div>
  );
};

export default HomePageShimmer;
