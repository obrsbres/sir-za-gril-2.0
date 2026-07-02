import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://aqoybgwwpbsyaqwymvre.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb3liZ3d3cGJzeWFxd3ltdnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzYyMDcsImV4cCI6MjA3Nzg1MjIwN30.39KU_Xutm14DwlzxlO_DTNY6JIi0j3WmO0rGBrLWJZc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
