// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ifipzmvbdezmspaznzua.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmaXB6bXZiZGV6bXNwYXpuenVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NDYxNDYsImV4cCI6MjA1OTQyMjE0Nn0.WFWnzABs2tx2-0JHl5iUmKv6T9Gbp-SZyfx_XdNajqQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);