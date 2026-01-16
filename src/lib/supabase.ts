import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a dummy client during build if env vars are missing
// This allows the build to succeed, but runtime will show proper errors
const createSupabaseClient = () => {
  if (supabaseUrl && supabaseAnonKey) {
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  
  // During build or when env vars are missing, return a dummy client
  // that will throw errors at runtime if actually used
  return createClient('https://placeholder.supabase.co', 'placeholder-key');
};

export const supabase = createSupabaseClient();

// Student type matching database schema
export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthdate: string;
  age: number;
  address: string;
  postal_code: string;
  city: string;
  emergency_contact: string;
  emergency_phone: string;
  program: 'little-tigers' | 'youth' | 'women' | 'adult';
  belt: string;
  location: 'Den Haag - Draaistraat' | 'Den Haag - Withuysstraat';
  join_date: string;
  attendance: number;
  last_class: string | null;
  total_classes: number;
  attended_classes: number;
  avatar: string | null;
  created_at?: string;
  updated_at?: string;
}

// Fetch all students
export async function getStudents(): Promise<Student[]> {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching students:', error);
    throw error;
  }

  return data || [];
}

// Fetch single student by ID
export async function getStudent(id: string): Promise<Student | null> {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching student:', error);
    return null;
  }

  return data;
}

// Add new student
export async function addStudent(student: Omit<Student, 'id' | 'created_at' | 'updated_at'>): Promise<Student | null> {
  const { data, error } = await supabase
    .from('students')
    .insert([student])
    .select()
    .single();

  if (error) {
    console.error('Error adding student:', error);
    throw error;
  }

  return data;
}

// Update student
export async function updateStudent(id: string, updates: Partial<Student>): Promise<Student | null> {
  const { data, error } = await supabase
    .from('students')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating student:', error);
    throw error;
  }

  return data;
}

// Payment type
export interface Payment {
  id: string;
  student_id: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'cancelled';
  payment_method?: 'cash' | 'card' | 'bank_transfer' | 'ideal';
  payment_date?: string;
  due_date: string;
  description?: string;
  invoice_number?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

// Get overdue payments
export async function getOverduePayments(): Promise<(Payment & { student: Student })[]> {
  const { data, error } = await supabase
    .from('payments')
    .select('*, student:students(*)')
    .eq('status', 'overdue')
    .order('due_date', { ascending: true })
    .limit(10);

  if (error) {
    console.error('Error fetching overdue payments:', error);
    return [];
  }

  return data || [];
}

// Lesson type
export interface Lesson {
  id: string;
  title: string;
  title_en?: string;
  program: 'little-tigers' | 'youth' | 'women' | 'adult';
  location: 'Den Haag - Draaistraat' | 'Den Haag - Withuysstraat';
  day_of_week: number;
  start_time: string;
  end_time: string;
  max_students?: number;
  instructor?: string;
  description?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Get today's lessons
export async function getTodaysLessons(): Promise<Lesson[]> {
  const today = new Date().getDay();
  
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('day_of_week', today)
    .eq('is_active', true)
    .order('start_time', { ascending: true });

  if (error) {
    console.error('Error fetching lessons:', error);
    return [];
  }

  return data || [];
}

// Event type
export interface Event {
  id: string;
  title: string;
  title_en?: string;
  type: 'exam' | 'holiday' | 'demo' | 'competition' | 'workshop' | 'other';
  event_date: string;
  start_time?: string;
  end_time?: string;
  location?: string;
  description?: string;
  description_en?: string;
  max_participants?: number;
  current_participants?: number;
  price?: number;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Get upcoming events
export async function getUpcomingEvents(): Promise<Event[]> {
  const today = new Date().toISOString().split('T')[0];
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('event_date', today)
    .eq('is_active', true)
    .order('event_date', { ascending: true })
    .limit(5);

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }

  return data || [];
}

// Activity Log type
export interface ActivityLog {
  id: string;
  type: 'student' | 'payment' | 'attendance' | 'news' | 'event' | 'other';
  action: string;
  description: string;
  student_id?: string;
  related_id?: string;
  metadata?: any;
  created_at?: string;
}

// Get recent activity
export async function getRecentActivity(limit: number = 10): Promise<ActivityLog[]> {
  const { data, error } = await supabase
    .from('activity_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching activity logs:', error);
    return [];
  }

  return data || [];
}

// Attendance type
export interface Attendance {
  id: string;
  student_id: string;
  lesson_id?: string;
  attendance_date: string;
  status: 'present' | 'absent-sick' | 'absent-unauthorized' | 'absent-vacation' | 'absent-other';
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

// Get attendance for date range
export async function getAttendanceStats(startDate: string, endDate: string): Promise<{ date: string; present: number; total: number }[]> {
  const { data, error } = await supabase
    .from('attendance')
    .select('attendance_date, status')
    .gte('attendance_date', startDate)
    .lte('attendance_date', endDate);

  if (error) {
    console.error('Error fetching attendance stats:', error);
    return [];
  }

  // Group by date and calculate percentages
  const grouped = (data || []).reduce((acc: any, record) => {
    const date = record.attendance_date;
    if (!acc[date]) {
      acc[date] = { present: 0, total: 0 };
    }
    acc[date].total++;
    if (record.status === 'present') {
      acc[date].present++;
    }
    return acc;
  }, {});

  return Object.entries(grouped).map(([date, stats]: [string, any]) => ({
    date,
    present: stats.present,
    total: stats.total,
  }));
}

// Delete student
export async function deleteStudent(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('students')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting student:', error);
    return false;
  }

  return true;
}

// Program type
export interface Program {
  id: string;
  name: string;
  name_en: string;
  slug: string;
  age_range: string;
  age_range_en: string;
  description: string;
  description_en: string;
  icon: string;
  color: string;
  features: string[];
  features_en: string[];
  image_url?: string;
  is_active?: boolean;
  display_order?: number;
  created_at?: string;
  updated_at?: string;
}

// Get all active programs
export async function getPrograms(): Promise<Program[]> {
  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching programs:', error);
    return [];
  }

  return data || [];
}
