import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`animate-fade-in-blur container mx-auto max-w-3xl px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
