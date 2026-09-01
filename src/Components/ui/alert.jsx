import { cn } from '@/lib/utils';

function Alert({ className, ...props }) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 opacity-100 transition-all duration-200',
        className
      )}
      {...props}
    />
  );
}

export { Alert };
