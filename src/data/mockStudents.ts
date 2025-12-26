// Temporary mock data - being migrated to Supabase
// This file is kept for backward compatibility during migration
export const mockStudents = [
  {
    id: '1',
    name: 'Jan de Vries',
    email: 'jan.devries@email.nl',
    phone: '06 12345678',
    password: '1234',
    birthdate: '2014-03-15',
    age: 10,
    address: 'Hoofdstraat 123',
    postalCode: '1234 AB',
    city: 'Amsterdam',
    emergencyContact: 'Maria de Vries',
    emergencyPhone: '06 87654321',
    program: 'youth',
    belt: 'Gele band',
    location: 'Amsterdam',
    joinDate: '2023-09-01',
    attendance: 95,
    lastClass: '2024-12-24',
    totalClasses: 40,
    attendedClasses: 38,
    avatar: '',
    absences: [],
    attendanceHistory: [],
  },
];

export type Student = typeof mockStudents[0];
