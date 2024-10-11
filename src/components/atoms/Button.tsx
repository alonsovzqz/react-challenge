import React from "react";
import { cn } from "../../lib/utils";
import { ButtonProps } from "../../types/components";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "flex rounded px-2.5 py-1.5 text-sm font-semibold";
    const variantStyles = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-500",
      secondary: "bg-white text-gray-900 hover:bg-gray-50",
      danger: "bg-red-700 text-white hover:bg-red-600",
      phantom: "bg-transparent shadow-none"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
