import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://hbuqjxjcsttbshdcsijt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidXFqeGpjc3R0YnNoZGNzaWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTc0MjYsImV4cCI6MjA2Mzg3MzQyNn0.8RrzEpGb_Kp9cfO57JConXDhA1wF9oooxH3FMhgzhkM';

export const supabase = createClient(supabaseUrl, supabaseKey)