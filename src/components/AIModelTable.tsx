import React from 'react';
import { AIModel, SortConfig } from '../types/AIModel';
import { Badge } from './Badge';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface AIModelTableProps {
  models: AIModel[];
}

export function AIModelTable({ models }: AIModelTableProps) {
  const [sortConfig, setSortConfig] = React.useState<SortConfig>({ key: '', direction: 'asc' });

  const sortedModels = React.useMemo(() => {
    if (!sortConfig.key) return models;

    return [...models].sort((a, b) => {
      if (sortConfig.key === 'capabilities') {
        const aValue = a[sortConfig.key].length;
        const bValue = b[sortConfig.key].length;
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      return 0;
    });
  }, [models, sortConfig]);

  const requestSort = (key: keyof AIModel) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIcon = (columnKey: keyof AIModel) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="h-4 w-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4 text-blue-500" />
    ) : (
      <ArrowDown className="h-4 w-4 text-blue-500" />
    );
  };

  const renderSortableHeader = (label: string, key: keyof AIModel) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
      onClick={() => requestSort(key)}
    >
      <div className="flex items-center space-x-1">
        <span>{label}</span>
        {getSortIcon(key)}
      </div>
    </th>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {renderSortableHeader('Model', 'name')}
            {renderSortableHeader('Type', 'type')}
            {renderSortableHeader('Description', 'description')}
            {renderSortableHeader('Capabilities', 'capabilities')}
            {renderSortableHeader('Access', 'access')}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedModels.map((model) => (
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