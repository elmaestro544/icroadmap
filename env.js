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
  SUPABASE_URL: 'https://rcgogvnelswlbpqffzwy.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZ29ndm5lbHN3bGJwcWZmend5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTI0MjEsImV4cCI6MjA3OTM4ODQyMX0.JH5JYUrp4p5n1LnVe_cPDGJSaCpUufLQav2ejFilo3w',
};