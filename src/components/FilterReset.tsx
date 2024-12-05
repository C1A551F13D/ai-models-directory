import React from 'react';
import { RotateCcw } from 'lucide-react';

interface FilterResetProps {
  onReset: () => void;
}

export function FilterReset({ onReset }: FilterResetProps) {
  return (
    <button
      onClick={onReset}
      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <RotateCcw className="h-4 w-4 mr-1" />
      Reset Filters
    </button>
  );
}