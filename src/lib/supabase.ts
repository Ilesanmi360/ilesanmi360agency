import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          bio: string
          image_url: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          bio: string
          image_url: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          bio?: string
          image_url?: string
          created_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}