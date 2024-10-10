import React from "react";
import { cn } from "../../lib/utils";
import { FooterProps } from "../../types/components";

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, links, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "flex flex-col lg:flex-row items-center justify-between p-4 bg-gray-800 text-white",
          className
        )}
        {...props}
      >
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Bolt. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-2 lg:mt-0">
          {links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm hover:underline ${link.icon ? "flex" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && <link.icon className="w-5 h-5 mr-1" />}
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
