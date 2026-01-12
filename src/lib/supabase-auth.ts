'use client'

import { supabase } from './supabase'

export const supabaseAuth = supabase

export async function signIn(email: string, password: string) {
  const { data, error } = await supabaseAuth.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabaseAuth.auth.signOut()
  if (error) throw error
}

export async function getSession() {
  const { data: { session } } = await supabaseAuth.auth.getSession()
  return session
}

export async function isAdmin(userId: string) {
  const { data, error } = await supabaseAuth
    .from('admin_users')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  return !error && !!data
}
