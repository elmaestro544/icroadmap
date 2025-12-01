// This file is for environment variable configuration.
// In a real deployment, these values would be set by the server or build environment.

window.process = window.process || {};
window.process.env = {
  ...window.process.env,

  // --- Google Gemini ---
  // Get your key from: https://aistudio.google.com/app/apikey
  API_KEY: 'YOUR_GEMINI_API_KEY_HERE',

  // --- OpenAI ---
  // Get your key from: https://platform.openai.com/api-keys
  OPENAI_API_KEY: 'YOUR_OPENAI_API_KEY_HERE',

  // --- Perplexity ---
  // Get your key from: https://www.perplexity.ai/settings/api
  PERPLEXITY_API_KEY: 'YOUR_PERPLEXITY_API_KEY_HERE',
  
  // --- Supabase ---
  // Get your project URL and anon key from your Supabase project settings
  SUPABASE_URL: 'YOUR_SUPABASE_URL_HERE',
  SUPABASE_KEY: 'YOUR_SUPABASE_KEY_HERE',
};