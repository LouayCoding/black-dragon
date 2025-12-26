import { useState, useEffect } from 'react';

// Mock data - in real app this would be API calls
const mockStudents = [
  {
    id: '1',
    name: 'Jan de Vries',
    email: 'jan.devries@email.nl',
    program: 'youth',
    password: '1234',
    absences: [
      { id: 'a1', date: '2024-12-26', reason: 'sick', notes: 'Griep' },
    ],
  },
  {
    id: '2',
    name: 'Emma Jansen',
    email: 'emma.jansen@email.nl',
    program: '',
    password: '5678',
    absences: [],
  },
  {
    id: '3',
    name: 'Mohammed Ali',
    email: 'mohammed.ali@email.nl',
    program: 'adult',
    password: '',
    absences: [],
  },
];

const mockClasses = [
  { id: '1', name: 'Jeugd Training', day: 'Maandag', time: '18:00', location: 'Amsterdam' },
  { id: '2', name: 'Volwassenen', day: 'Maandag', time: '19:30', location: 'Amsterdam' },
];

interface AdminStats {
  totalAbsences: number;
  todayClasses: any[];
  activeStudents: number;
  issues: any[];
}

interface AdminData {
  stats: AdminStats | null;
  activities: any[];
  students: any[];
  isLoading: boolean;
  statsLoading: boolean;
  activitiesLoading: boolean;
  lastUpdated: Date | null;
  refresh: () => void;
}

export function useAdminData(): AdminData {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [students] = useState(mockStudents);
  const [statsLoading, setStatsLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Load stats first (fast)
  useEffect(() => {
    const loadStats = async () => {
      setStatsLoading(true);
      
      // Simulate fast API call for numbers only
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // CONSISTENT COUNTING LOGIC
      // Definition: Total absences = all absence records across all students
      const totalAbsences = students.reduce((acc, s) => acc + s.absences.length, 0);
      
      // Definition: Today's classes = classes scheduled for current day of week
      const todayClasses = mockClasses.filter(
        c => c.day === new Date().toLocaleDateString('nl-NL', { weekday: 'long' })
      );
      
      // Definition: Active students = students with assigned program
      const activeStudents = students.filter(s => s.program && s.program.trim() !== '').length;
      
      // Definition: Issues = students missing required data (program OR password)
      const issues = [
        ...students.filter(s => !s.program || s.program.trim() === '').map(s => ({
          id: `program-${s.id}`,
          type: 'missing_program' as const,
          message: `${s.name} heeft geen programma`,
        })),
        ...students.filter(s => !s.password || s.password.trim() === '').map(s => ({
          id: `password-${s.id}`,
          type: 'missing_password' as const,
          message: `${s.name} heeft geen wachtwoord`,
        })),
      ];

      setStats({
        totalAbsences,
        todayClasses,
        activeStudents,
        issues,
      });
      setLastUpdated(new Date());
      setStatsLoading(false);
    };

    loadStats();
  }, [students]);

  // Load activities later (slower, less critical)
  useEffect(() => {
    const loadActivities = async () => {
      // Simulate slower API call for detailed data
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const acts = students.flatMap(s =>
        s.absences.map(a => ({
          id: `absence-${s.id}-${a.id}`,
          type: 'absence' as const,
          message: `${s.name} ziekgemeld`,
          timestamp: new Date(a.date),
        }))
      ).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

      setActivities(acts);
      setActivitiesLoading(false);
    };

    loadActivities();
  }, [students]);

  // Refresh function to reload data
  const refresh = () => {
    setStatsLoading(true);
    setActivitiesLoading(true);
    // Trigger re-fetch by updating a dependency
    // In real app, this would call API again
  };

  return {
    stats,
    activities,
    students,
    isLoading: statsLoading || activitiesLoading,
    statsLoading,
    activitiesLoading,
    lastUpdated,
    refresh,
  };
}
