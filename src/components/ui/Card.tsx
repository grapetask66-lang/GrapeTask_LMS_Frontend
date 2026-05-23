import type { HTMLAttributes, ReactNode } from 'react';

export function Card({ children, className = '', ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <section className={`theme-card min-w-0 rounded-md p-4 sm:p-5 ${className}`} {...props}>
      {children}
    </section>
  );
}

export function CardTitle({ title, caption }: { title: string; caption?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-semibold leading-snug text-pureWhite">{title}</h2>
      {caption ? <p className="mt-1 text-sm leading-relaxed text-bodyGrayText">{caption}</p> : null}
    </div>
  );
}
