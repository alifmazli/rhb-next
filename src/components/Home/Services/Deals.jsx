import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Deals = (props) => {
  return (
    <div>
      {props.data.map((item, index) => (
        <Link
          href="#"
          class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          key={index}
        >
          <Image
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            key={index}
            src={item.image}
            alt={item.title}
            width={150}
            height={150}
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </Link>
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
