import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type SemanticTag = "div" | "section" | "article" | "header" | "footer" | "main";

type ContainerProps<T extends SemanticTag = "div"> = {
  as?: T;
  noPadding?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Container<T extends SemanticTag = "div">({
  as,
  noPadding = false,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl",
        !noPadding && "px-4 md:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
