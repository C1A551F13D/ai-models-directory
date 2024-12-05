import { AIModel } from '../types/AIModel';

export const aiModels: AIModel[] = [
  // Language Models
  {
    name: 'GPT-4',
    company: 'OpenAI',
    type: 'Language',
    description: 'Most advanced language model with strong reasoning and instruction-following capabilities',
    capabilities: ['Text Generation', 'Translation', 'Code Writing', 'Analysis', 'Reasoning'],
    releaseDate: '2023-03-14',
    parameters: '1.76 trillion',
    access: 'API'
  },
  {
    name: 'Claude 2',
    company: 'Anthropic',
    type: 'Language',
    description: 'Advanced language model focused on safety and helpful interactions',
    capabilities: ['Text Generation', 'Analysis', 'Code Writing', 'Math', 'Research'],
    releaseDate: '2023-07-11',
    parameters: '800 billion',
    access: 'API'
  },
  {
    name: 'PaLM 2',
    company: 'Google',
    type: 'Language',
    description: 'Advanced language model with improved multilingual capabilities',
    capabilities: ['Text Generation', 'Translation', 'Reasoning', 'Code Generation'],
    releaseDate: '2023-05-16',
    parameters: '340 billion',
    access: 'API'
  },
  {
    name: 'Llama 2',
    company: 'Meta',
    type: 'Language',
    description: 'Open source large language model with strong performance',
    capabilities: ['Text Generation', 'Analysis', 'Code Understanding'],
    releaseDate: '2023-07-18',
    parameters: '70 billion',
    access: 'Open Source'
  },
  {
    name: 'Llama 3.2',
    company: 'Meta',
    type: 'Language',
    description: 'Latest iteration of Meta\'s open source LLM with significant improvements in reasoning and knowledge',
    capabilities: ['Text Generation', 'Analysis', 'Code Generation', 'Reasoning', 'Knowledge'],
    releaseDate: '2024-03-01',
    parameters: '400 billion',
    access: 'Open Source'
  },
  {
    name: 'Phi-2',
    company: 'Microsoft',
    type: 'Language',
    description: 'Small but powerful language model with strong performance despite compact size',
    capabilities: ['Text Generation', 'Code Generation', 'Analysis'],
    releaseDate: '2023-12-15',
    parameters: '2.7 billion',
    access: 'Open Source'
  },
  {
    name: 'Gemma',
    company: 'Google',
    type: 'Language',
    description: 'Open source language model series optimized for responsible AI development',
    capabilities: ['Text Generation', 'Analysis', 'Code Generation'],
    releaseDate: '2024-02-21',
    parameters: '7 billion',
    access: 'Open Source'
  },
  {
    name: 'DeepSeek',
    company: 'DeepSeek',
    type: 'Language',
    description: 'Advanced language model with strong coding and mathematical capabilities',
    capabilities: ['Code Generation', 'Math', 'Text Generation', 'Analysis'],
    releaseDate: '2024-01-18',
    parameters: '67 billion',
    access: 'API'
  },
  {
    name: 'Qwen 2.5',
    company: 'Alibaba',
    type: 'Language',
    description: 'Multilingual language model with enhanced reasoning and knowledge capabilities',
    capabilities: ['Text Generation', 'Translation', 'Analysis', 'Reasoning'],
    releaseDate: '2024-02-29',
    parameters: '14 billion',
    access: 'API'
  },
  {
    name: 'Mistral',
    company: 'Mistral AI',
    type: 'Language',
    description: 'State-of-the-art language model with unique training techniques for better generalization',
    capabilities: ['Text Generation', 'Analysis', 'Reasoning'],
    releaseDate: '2023-12-19',
    parameters: '90 billion',
    access: 'API'
  },
  {
    name: 'Falcon',
    company: 'Technology Innovation Institute',
    type: 'Language',
    description: 'Open-source language model trained on multilingual data',
    capabilities: ['Text Generation', 'Translation', 'Code Generation'],
    releaseDate: '2023-06-05',
    parameters: '180 billion',
    access: 'Open Source'
  },
  {
    name: 'BLOOM',
    company: 'Hugging Face',
    type: 'Language',
    description: 'Multilingual language model supporting 46+ languages',
    capabilities: ['Text Generation', 'Translation', 'Classification'],
    releaseDate: '2022-07-06',
    parameters: '176 billion',
    access: 'Open Source'
  },
  {
    name: 'CodeGen',
    company: 'Salesforce',
    type: 'Language',
    description: 'Specialized model for code generation across multiple programming languages',
    capabilities: ['Code Generation', 'Code Completion', 'Bug Detection'],
    releaseDate: '2022-03-24',
    parameters: '16 billion',
    access: 'Open Source'
  },
  {
    name: 'Jurassic-2',
    company: 'AI21 Labs',
    type: 'Language',
    description: 'Advanced language model with strong text generation capabilities',
    capabilities: ['Text Generation', 'Summarization', 'Paraphrasing'],
    releaseDate: '2023-02-15',
    parameters: '178 billion',
    access: 'API'
  },
  
  // Image Models
  {
    name: 'DALL-E 3',
    company: 'OpenAI',
    type: 'Image',
    description: 'Advanced image generation model with high understanding of text prompts',
    capabilities: ['Image Generation', 'Image Editing', 'Style Transfer'],
    releaseDate: '2023-10-04',
    access: 'API'
  },
  {
    name: 'Midjourney V6',
    company: 'Midjourney',
    type: 'Image',
    description: 'Advanced image generation with high artistic quality',
    capabilities: ['Image Generation', 'Style Transfer', 'Artistic Rendering'],
    releaseDate: '2023-12-14',
    access: 'API'
  },
  {
    name: 'Stable Diffusion XL',
    company: 'Stability AI',
    type: 'Image',
    description: 'State-of-the-art image generation model with high-quality outputs',
    capabilities: ['Image Generation', 'Image Editing', 'Inpainting'],
    releaseDate: '2023-07-26',
    access: 'Open Source'
  },
  {
    name: 'Imagen 2',
    company: 'Google',
    type: 'Image',
    description: 'Text-to-image diffusion model with high photorealism',
    capabilities: ['Image Generation', 'Image Editing', 'Style Transfer'],
    releaseDate: '2023-12-13',
    access: 'API'
  },
  
  // Multimodal Models
  {
    name: 'GPT-4V',
    company: 'OpenAI',
    type: 'Multimodal',
    description: 'Vision-enhanced version of GPT-4 capable of understanding images',
    capabilities: ['Image Understanding', 'Text Generation', 'Visual Analysis'],
    releaseDate: '2023-09-25',
    access: 'API'
  },
  {
    name: 'Gemini Pro',
    company: 'Google',
    type: 'Multimodal',
    description: 'Multimodal model capable of understanding text, images, and code',
    capabilities: ['Text Generation', 'Image Understanding', 'Code Generation'],
    releaseDate: '2023-12-06',
    access: 'API'
  },
  {
    name: 'Claude 2.1',
    company: 'Anthropic',
    type: 'Multimodal',
    description: 'Enhanced version of Claude with image understanding capabilities',
    capabilities: ['Text Generation', 'Image Understanding', 'Analysis'],
    releaseDate: '2023-11-21',
    access: 'API'
  },
  
  // Audio Models
  {
    name: 'Whisper',
    company: 'OpenAI',
    type: 'Audio',
    description: 'Speech recognition system with multilingual capabilities',
    capabilities: ['Speech Recognition', 'Translation', 'Transcription'],
    releaseDate: '2022-09-21',
    access: 'Open Source'
  },
  {
    name: 'MusicGen',
    company: 'Meta',
    type: 'Audio',
    description: 'Music generation model controlled by text description',
    capabilities: ['Music Generation', 'Audio Synthesis'],
    releaseDate: '2023-06-12',
    access: 'Open Source'
  },
  {
    name: 'AudioCraft',
    company: 'Meta',
    type: 'Audio',
    description: 'Framework for audio generation including music and sound effects',
    capabilities: ['Audio Generation', 'Sound Effects', 'Music Synthesis'],
    releaseDate: '2023-08-01',
    access: 'Open Source'
  },
  
  // Video Models
  {
    name: 'Sora',
    company: 'OpenAI',
    type: 'Video',
    description: 'Text-to-video generation model with high quality and coherence',
    capabilities: ['Video Generation', 'Animation', 'Scene Creation'],
    releaseDate: '2024-02-15',
    access: 'Closed'
  },
  {
    name: 'Gen-2',
    company: 'Runway',
    type: 'Video',
    description: 'Advanced text-to-video and image-to-video generation model',
    capabilities: ['Video Generation', 'Video Editing', 'Style Transfer'],
    releaseDate: '2023-06-15',
    access: 'API'
  },
  {
    name: 'Lumiere',
    company: 'Google',
    type: 'Video',
    description: 'Text-to-video diffusion model for high-quality video generation',
    capabilities: ['Video Generation', 'Motion Synthesis', 'Scene Generation'],
    releaseDate: '2024-01-25',
    access: 'Closed'
  },
  
  // Research Models
  {
    name: 'AlphaFold 2',
    company: 'DeepMind',
    type: 'Multimodal',
    description: 'Protein structure prediction system with high accuracy',
    capabilities: ['Protein Folding', 'Structure Prediction', 'Scientific Analysis'],
    releaseDate: '2021-07-15',
    access: 'Open Source'
  },
  {
    name: 'Gato',
    company: 'DeepMind',
    type: 'Multimodal',
    description: 'Generalist agent capable of performing multiple tasks',
    capabilities: ['Multi-task Learning', 'Robot Control', 'Game Playing'],
    releaseDate: '2022-05-12',
    access: 'Closed'
  },
  {
    name: 'PaLI-X',
    company: 'Google',
    type: 'Multimodal',
    description: 'Large-scale vision and language model for multiple tasks',
    capabilities: ['Image Understanding', 'Text Generation', 'Visual Reasoning'],
    releaseDate: '2023-10-12',
    access: 'Closed'
  }
];