import type { Staff, Student, ClassRoster, TimetableEntry } from './definitions';

export const MOCK_STAFF: Staff = {
  id: 'staff-01',
  name: 'Dr. Evelyn Reed',
  email: 'e.reed@university.edu',
  phone: '+1 (555) 123-4567',
  avatarUrl: 'https://picsum.photos/seed/1/100/100',
  password: 'password123',
  classes: ['CSE-C', 'IT-A'],
};

export const MOCK_STUDENTS: Student[] = [
  { id: 'stu-101', name: 'Alice Johnson', email: 'alice.j@university.edu', password: 'password123' },
  { id: 'stu-102', name: 'Bob Williams', email: 'bob.w@university.edu', password: 'password123' },
  { id: 'stu-103', name: 'Charlie Brown', email: 'charlie.b@university.edu', password: 'password123' },
  { id: 'stu-104', name: 'Diana Miller', email: 'diana.m@university.edu', password: 'password123' },
  { id: 'stu-105', name: 'Ethan Davis', email: 'ethan.d@university.edu', password: 'password123' },
  { id: 'stu-106', name: 'Fiona Garcia', email: 'fiona.g@university.edu', password: 'password123' },
  { id: 'stu-107', name: 'George Rodriguez', email: 'george.r@university.edu', password: 'password123' },
  { id: 'stu-108', name: 'Hannah Wilson', email: 'hannah.w@university.edu', password: 'password123' },
];

export const MOCK_ROSTERS: ClassRoster[] = [
  {
    id: 'roster-01',
    className: 'CSE-C',
    students: MOCK_STUDENTS.slice(0, 5),
  },
  {
    id: 'roster-02',
    className: 'IT-A',
    students: MOCK_STUDENTS.slice(5),
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
