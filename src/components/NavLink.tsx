"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Simplified props interface that doesn't try to extend everything perfectly
// but covers the usage in the project.
interface NavLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "className"> {
  activeClassName?: string;
  pendingClassName?: string;
  className?: string | ((props: { isActive: boolean }) => string);
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const computedClassName =
      typeof className === "function"
        ? className({ isActive })
        : cn(className, isActive && activeClassName);

    return (
      <Link ref={ref} href={href} className={computedClassName} {...props} />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
