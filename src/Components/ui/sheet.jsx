import * as React from 'react';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Sheet = ({ open, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = open ?? internalOpen;

  const handleOpenChange = (nextOpen) => {
    if (onOpenChange) onOpenChange(nextOpen);
    if (open === undefined) setInternalOpen(nextOpen);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
          open: isOpen,
          onOpenChange: handleOpenChange,
        });
      })}
    </>
  );
};

const SheetTrigger = ({ children, onClick, onOpenChange, ...props }) => (
  <button type="button" onClick={onClick} {...props}>
    {children}
  </button>
);

const SheetContent = ({ open, onOpenChange, side = 'right', className, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-slate-950/40" onClick={() => onOpenChange?.(false)} />
      <div
        className={cn(
          'relative ml-auto flex h-full w-full max-w-sm flex-col border-l bg-background p-6 shadow-xl',
          side === 'right' ? 'ml-auto' : 'mr-auto',
          className
        )}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onOpenChange?.(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export { Sheet, SheetTrigger, SheetContent };
