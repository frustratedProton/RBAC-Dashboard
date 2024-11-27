/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={() => paginate(currentPage - 1)}
                className={`flex items-center justify-center px-4 py-2 mx-1 rounded-lg ${
                    currentPage === 1
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
                disabled={currentPage === 1}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="sr-only">Previous</span>
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-1 rounded-lg ${
                        currentPage === index + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => paginate(currentPage + 1)}
                className={`flex items-center justify-center px-4 py-2 mx-1 rounded-lg ${
                    currentPage === totalPages
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
                disabled={currentPage === totalPages}
            >
                <FontAwesomeIcon icon={faArrowRight} />
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default Pagination;
