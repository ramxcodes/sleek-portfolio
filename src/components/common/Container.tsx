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
    <div className={`container mx-auto max-w-4xl px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
