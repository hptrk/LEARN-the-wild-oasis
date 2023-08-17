import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qpmicphpkikxspqcqhxn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbWljcGhwa2lreHNwcWNxaHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjQ0NTUsImV4cCI6MjAwNzI0MDQ1NX0.V07OS99A1BPlZvhKsx6-7W56P7n8UHIiNnT7CIgnIcw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
