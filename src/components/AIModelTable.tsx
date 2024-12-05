import React from 'react';
import { AIModel } from '../types/AIModel';
import { Badge } from './Badge';

interface AIModelTableProps {
  models: AIModel[];
}

export function AIModelTable({ models }: AIModelTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capabilities</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {models.map((model) => (
            <tr key={model.name} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div>
                  <div className="font-medium text-gray-900">{model.name}</div>
                  <div className="text-sm text-gray-500">{model.company}</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={model.type.toLowerCase()}>{model.type}</Badge>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-900">{model.description}</p>
                <p className="text-xs text-gray-500 mt-1">Released: {model.releaseDate}</p>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {model.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={model.access.toLowerCase().replace(' ', '-')}>{model.access}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}