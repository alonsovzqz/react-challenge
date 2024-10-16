import React from "react";
import { cn } from "../../lib/utils";
import { InputProps } from "../../types/components";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn('block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6', className)}
        ref={ref}
        {...props}
      />
    );
  });

Input.displayName = 'Input';

export { Input };
