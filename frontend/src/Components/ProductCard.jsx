import Icon from "@mui/material/Icon";

const ProductCard = ({ object: { rating, cost, price, budget, title, description, category, worker, employer, availabilityStartTime, availabilityEndTime, locations }, object }) => {
    price = price || cost || budget;
    worker = worker || employer;

    return (<div className="flex flex-col justify-center border">
        <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-md p-3  border border-white bg-white">
            <img src="/noimage.svg" alt="tailwind logo" className="rounded-xl h-40 sm:h-full sm:w-1/4 object-cover" />
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">

                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd" />
                        </svg>
                        <div className="text-gray-500 font-medium ">{category || 'Category'}</div>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className="flex space-x-1 text-gray-600 font-bold text-sm ml-1">
                            <div>{rating || 4.5}</div >
                            <span className="text-gray-500 font-normal">(76 reviews)</span>
                        </div>
                    </div>
                    <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        {worker?.title}</div>
                </div>
                <h3 className="font-black text-gray-800 text-xl">{title}</h3>
                <p className=" text-gray-500 text-sm line-clamp-4">{description && false || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto
`}</p>

                <div className="flex flex-col">

                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Icon fontSize="inherit">access_time</Icon>
                        <div>{new Date(
                            availabilityStartTime
                        ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        })}{" "}
                            -{" "}
                            {new Date(
                                availabilityEndTime
                            ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                            })}</div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Icon fontSize="inherit">access_time</Icon>
                        <div>{locations.join(". ")}</div>
                    </div>
                </div>

                <p className="text-xl font-black text-gray-800">
                    ${price}
                    <span className="font-normal text-gray-600 text-base">/work</span>
                </p>
            </div>
        </div>
    </div>)
};

export default ProductCard;