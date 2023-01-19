import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import gocar from "@images/next-deals/gocar.bmp";

const Deals = (props) => {
  const dataLength = props.data.length;
  return (
    <div className="space-y-2">
      {props.data.map((item, index) => (
        <div
          className={` w-1/2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`}
          key={index}
        >
          <Link href="#">
            <div className="image-container">
              <Image
                className="image rounded-t-lg"
                src={gocar}
                alt={item.title}
              />
            </div>
          </Link>
          <div class="p-5">
            <h3 class="mb-2 tracking-tight">{item.title}</h3>
            <p class="mb-3">{item.description}</p>
            <Link
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
Deals.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Deals.defaultProps = {
  data: [],
};

export default Deals;