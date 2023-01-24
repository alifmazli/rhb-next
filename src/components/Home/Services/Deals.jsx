import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Deals = (props) => {
  const imagePath = props.data.images;
  return (
    <div
      className={`w-full border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`}
    >
      <Link href="#">
        <div className="image-container">
          <Link href={`/home/next-deals/${props.data.id}`}>
            <Image
              className="image rounded-t-lg"
              src={imagePath}
              alt={props.data.affiliateItemName}
              width={356}
              height={356}
              placeholder="blur"
              blurDataURL={imagePath}
            />
          </Link>
        </div>
      </Link>
      <div className="p-5">
        <h3 className="mb-2 ">{props.data.affiliateItemName}</h3>
        <p className="mb-3">{props.data.description}</p>
        <Link
          href={`/home/next-deals/${props.data.id}`}
          className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

Deals.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

Deals.defaultProps = {
  data: [],
};

export default Deals;
