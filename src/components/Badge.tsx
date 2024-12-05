import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant: string;
}

const variants = {
  language: 'bg-purple-100 text-purple-800',
  image: 'bg-green-100 text-green-800',
  audio: 'bg-yellow-100 text-yellow-800',
  video: 'bg-red-100 text-red-800',
  multimodal: 'bg-indigo-100 text-indigo-800',
  api: 'bg-blue-100 text-blue-800',
  'open-source': 'bg-green-100 text-green-800',
  closed: 'bg-gray-100 text-gray-800',
};

export function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        variants[variant as keyof typeof variants]
      }`}
    >
      {children}
    </span>
  );
}