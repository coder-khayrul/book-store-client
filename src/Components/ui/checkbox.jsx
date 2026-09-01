import * as React from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <button
    type="button"
    ref={ref}
    role="checkbox"
    aria-checked={props.checked ?? false}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded border border-slate-300 bg-white shadow-sm transition-all duration-200 hover:border-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.checked && 'border-amber-500 bg-amber-500 text-white',
      className
    )}
    onClick={() => props.onCheckedChange?.(!props.checked)}
    {...props}
  >
    {props.checked ? <Check className="h-3 w-3" /> : null}
  </button>
));
Checkbox.displayName = 'Checkbox';

export { Checkbox };
