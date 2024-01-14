import { tv } from 'tailwind-variants';

const filled = tv({
  base: 'text-center rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-x-2 disabled:cursor-not-allowed text-black',
  variants: {
    color: {
      primary:
        'bg-white hover:bg-gray-700 hover:text-white active:bg-gray-800 active:text-white disabled:bg-gray-400',
      secondary:
        'bg-primary hover:bg-blue-900 active:bg-neutral-950 disabled:bg-neutral-400',
    },
    spacing: {
      sm: 'px-4 py-1 text-xs notebook:text-base',
      base: 'px-4 py-2 text-sm',
      lg: 'px-8 py-2',
    },
  },
});

export const allVariants = {
  filled,
};
