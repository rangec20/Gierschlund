import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjbzscjcyviwxhgspnqx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqYnpzY2pjeXZpd3hoZ3NwbnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTg4OTQsImV4cCI6MjAzMDI5NDg5NH0.pQR8aVrLFlWhm9QzVi70CbU3bGq_XrKv3jo9VuACiVU";

export const supabase = createClient(supabaseUrl, supabaseKey);