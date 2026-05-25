import type { HTMLAttributes, ReactNode } from 'react';

export function Card({ children, className = '', ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <section className={`theme-card min-w-0 rounded-xl p-5 sm:p-6 transition-all duration-300 ${className}`} {...props}>
      {children}
    </section>
  );
}

export function CardTitle({ title, caption }: { title: string; caption?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold leading-snug text-white">{title}</h2>
      {caption ? <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{caption}</p> : null}
    </div>
  );
}
