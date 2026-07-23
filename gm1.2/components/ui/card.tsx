import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-zinc-800 bg-zinc-900 text-zinc-100 shadow-xl",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };