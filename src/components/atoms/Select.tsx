import React from "react";
import { cn } from "../../lib/utils";
import { SelectProps } from "../../types/components";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, className, variant = "primary", options, ...props }, ref) => {
    const baseStyles =
      "w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-5 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm_leading-6";
    const variantStyles = {
      primary: "bg-white text-gray-900 ring-gray-300 focus:ring-indigo-500",
      secondary: "bg-gray-100 text-gray-800 ring-gray-300 focus:ring-gray-400",
      danger: "bg-red-100 text-red-900 ring-red-400 focus:ring-red-500",
    };

    return (
      <div className="flex items-center">
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium leading-6 text-gray-900 mx-1.5"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(baseStyles, variantStyles[variant], className)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
