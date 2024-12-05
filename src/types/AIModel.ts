export interface AIModel {
  name: string;
  company: string;
  type: 'Language' | 'Image' | 'Audio' | 'Video' | 'Multimodal';
  description: string;
  capabilities: string[];
  releaseDate: string;
  parameters?: string;
  access: 'Open Source' | 'API' | 'Closed';
}

export type FilterState = {
  search: string;
  type: string;
  access: string;
  capabilities: string[];
};