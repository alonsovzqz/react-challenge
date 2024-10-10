import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PaginationProps } from "../../types/components";

const RESULTS_PER_PAGE = 10;

const Pagination = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
            i === currentPage
              ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === 1
              ? "pointer-events-none select-none text-gray-400 cursor-not-allowed"
              : ""
          }`}
          onClick={handlePrevious}
        >
          Previous
        </a>
        <a
          href="#"
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === totalPages
              ? "pointer-events-none select-none text-gray-400 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage}</span> to{" "}
            <span className="font-medium">{RESULTS_PER_PAGE}</span> of{" "}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <a
              href="#"
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                currentPage === 1
                  ? "pointer-events-none select-none text-gray-400 cursor-not-allowed"
                  : ""
              }`}
              onClick={handlePrevious}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {renderPageNumbers()}
            <a
              href="#"
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                currentPage === totalPages
                  ? "pointer-events-none select-none text-gray-400 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
