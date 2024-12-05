import React, { useState, useMemo } from 'react';
import { Brain } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { FilterDropdown } from './components/FilterDropdown';
import { MultiSelect } from './components/MultiSelect';
import { AIModelTable } from './components/AIModelTable';
import { FilterReset } from './components/FilterReset';
import { aiModels } from './data/aiModels';
import { FilterState } from './types/AIModel';

function App() {
  const initialFilters: FilterState = {
    search: '',
    type: '',
    access: '',
    capabilities: [],
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const types = [...new Set(aiModels.map((model) => model.type))];
  const accessTypes = [...new Set(aiModels.map((model) => model.access))];
  const capabilities = [...new Set(aiModels.flatMap((model) => model.capabilities))].sort();

  const filteredModels = useMemo(() => {
    return aiModels.filter((model) => {
      const matchesSearch = model.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        model.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        model.company.toLowerCase().includes(filters.search.toLowerCase());
      const matchesType = !filters.type || model.type === filters.type;
      const matchesAccess = !filters.access || model.access === filters.access;
      const matchesCapabilities = filters.capabilities.length === 0 ||
        filters.capabilities.every(cap => model.capabilities.includes(cap));
      
      return matchesSearch && matchesType && matchesAccess && matchesCapabilities;
    });
  }, [filters]);

  const handleReset = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Models Directory</h1>
          </div>
          <div className="flex items-center space-x-4">
            <FilterReset onReset={handleReset} />
            <p className="text-sm text-gray-500">
              Displaying {filteredModels.length} of {aiModels.length} models
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SearchBar
              value={filters.search}
              onChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
            />
            <FilterDropdown
              label="Type"
              value={filters.type}
              options={types}
              onChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}
            />
            <FilterDropdown
              label="Access"
              value={filters.access}
              options={accessTypes}
              onChange={(value) => setFilters((prev) => ({ ...prev, access: value }))}
            />
            <MultiSelect
              label="Capabilities"
              options={capabilities}
              selectedValues={filters.capabilities}
              onChange={(values) => setFilters((prev) => ({ ...prev, capabilities: values }))}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <AIModelTable models={filteredModels} />
        </div>
      </div>
    </div>
  );
}

export default App;