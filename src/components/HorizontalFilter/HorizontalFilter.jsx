const HorizontalFilter = ({ data }) => {
  return (
    // <li className="filter-button px-2 py-0.5 font-medium text-center justify-center">
    <li className="filter-button relative inline-flex items-center p-0.5 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="filter-button relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
        {data}
      </span>
    </li>
    // </li>
  );
};

export default HorizontalFilter;
