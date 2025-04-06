const HomeSkeleton = () => {
  return (
    <div className="w-full mt-16">
      <ul className="list rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide skeleton mb-4"></li>

        <li className="list-row skeleton h-50 mb-4">
          <div>
            <div className="size-42 rounded-box skeleton" />
          </div>
          <div className="skeleton">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          {/* <button className="btn btn-square btn-ghost skeleton"></button>
          <button className="btn btn-square btn-ghost skeleton"></button> */}
        </li>

        <li className="list-row skeleton h-50 mb-4">
          <div>
            <div className="size-42 rounded-box skeleton" />
          </div>
          <div className="skeleton">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          {/* <button className="btn btn-square btn-ghost skeleton"></button>
          <button className="btn btn-square btn-ghost skeleton"></button> */}
        </li>

        <li className="list-row skeleton h-50 mb-4">
          <div>
            <div className="size-42 rounded-box skeleton" />
          </div>
          <div className="skeleton">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          {/* <button className="btn btn-square btn-ghost skeleton"></button>
          <button className="btn btn-square btn-ghost skeleton"></button> */}
        </li>
      </ul>
      <div className="join w-full mt-8 flex justify-center items-center gap-4">
        <button className="join-item btn skeleton"></button>
        <button className="join-item btn btn-active skeleton"></button>
        <button className="join-item btn btn-active skeleton"></button>
        <button className="join-item btn btn-active skeleton"></button>
      </div>
    </div>
  );
};

export default HomeSkeleton;
