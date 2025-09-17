import type { Staff, Student, ClassRoster, TimetableEntry } from './definitions';

export const MOCK_STAFF: Staff = {
  id: 'staff-01',
  name: 'Kuraku Nirmala',
  email: 'nirmala@mits.ac.in',
  phone: '+1 (555) 123-4567',
  avatarUrl: 'https://picsum.photos/seed/1/100/100',
  password: 'password123',
  classes: ['CSE-C', 'IT-A'],
};

const CSE_C_STUDENTS: Student[] = [
  { id: '23691A05G6', rollNo: '23691A05G6', name: 'Mani Bhushan', email: 'mani.b@mits.ac.in', password: 'password123' },
  { id: '23691A05G3', rollNo: '23691A05G3', name: 'Razak', email: 'razak@mits.ac.in', password: 'password123' },
  { id: '23691A05J1', rollNo: '23691A05J1', name: 'Sandra', email: 'sandra@mits.ac.in', password: 'password123' },
  { id: '23691A05J5', rollNo: '23691A05J5', name: 'Santosh Kumar', email: 'santosh.k@mits.ac.in', password: 'password123' },
  { id: '23691A3262', rollNo: '23691A3262', name: 'Koushik', email: 'koushik@mits.ac.in', password: 'password123' },
  { id: '23691A0594', rollNo: '23691A0594', name: 'Nawiin', email: 'nawiin@mits.ac.in', password: 'password123' },
];

const IT_A_STUDENTS: Student[] = [
  { id: 'stu-106', rollNo: 'STU-106', name: 'Fiona Garcia', email: 'fiona.g@university.edu', password: 'password123' },
  { id: 'stu-107', rollNo: 'STU-107', name: 'George Rodriguez', email: 'george.r@university.edu', password: 'password123' },
  { id: 'stu-108', rollNo: 'STU-108', name: 'Hannah Wilson', email: 'hannah.w@university.edu', password: 'password123' },
];

export const MOCK_STUDENTS: Student[] = [...CSE_C_STUDENTS, ...IT_A_STUDENTS];

export const MOCK_ROSTERS: ClassRoster[] = [
  {
    id: 'roster-01',
    className: 'CSE-C',
    students: CSE_C_STUDENTS,
  },
  {
    id: 'roster-02',
    className: 'IT-A',
    students: IT_A_STUDENTS,
  },
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' },
    { day: 'Monday', time: '11:00 - 12:30', subject: 'Algorithms', class: 'IT-A' },
    { day: 'Tuesday', time: '10:00 - 11:30', subject: 'Database Systems', class: 'CSE-C' },
    { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' },
    { day: 'Thursday', time: '13:00 - 14:30', subject: 'Database Systems', class: 'CSE-C' },
    { day: 'Friday', time: '11:00 - 12:30', subject: 'Algorithms', class: 'IT-A' },
];

// Simple lookup for authentication
export const USERS_DB = {
  staff: [MOCK_STAFF],
  students: MOCK_STUDENTS,
};
