import type { Staff, Student, ClassRoster, TimetableEntry, AttendanceStatus } from './definitions';

const MOCK_STAFF_LIST: Staff[] = [
  {
    id: 'staff-01',
    name: 'Dr K. Nirmala',
    email: 'nirmala@mits.ac.in',
    phone: '+91 1234567890',
    avatarUrl: 'https://i.imgur.com/Q2YR2nQ.jpeg',
    password: 'password123',
    classes: ['CSE-A', 'CSE-B', 'CSE-C'],
  },
  {
    id: 'staff-02',
    name: 'Prof. S. Verma',
    email: 'verma.s@mits.ac.in',
    phone: '+91 9876543211',
    avatarUrl: 'https://picsum.photos/seed/Verma/100/100',
    password: 'password123',
    classes: ['CSE-A'],
  },
  {
    id: 'staff-03',
    name: 'Dr. R. Gupta',
    email: 'gupta.r@mits.ac.in',
    phone: '+91 9876543212',
    avatarUrl: 'https://picsum.photos/seed/Gupta/100/100',
    password: 'password123',
    classes: ['CSE-B'],
  },
  {
    id: 'staff-04',
    name: 'Mrs. A. Sharma',
    email: 'sharma.a@mits.ac.in',
    phone: '+91 9876543213',
    avatarUrl: 'https://picsum.photos/seed/Sharma/100/100',
    password: 'password123',
    classes: ['CSE-C'],
  },
  {
    id: 'staff-05',
    name: 'Mr. P. Singh',
    email: 'singh.p@mits.ac.in',
    phone: '+91 9876543214',
    avatarUrl: 'https://picsum.photos/seed/Singh/100/100',
    password: 'password123',
    classes: ['CSE-A', 'CSE-B'],
  }
];


const MOCK_ADMIN: Staff = {
  id: 'admin-01',
  name: 'Admin User',
  email: 'admin@mits.ac.in',
  phone: '+91 9876543210',
  avatarUrl: 'https://picsum.photos/seed/admin-avatar/100/100',
  password: 'admin123',
  classes: [],
}

const CSE_A_STUDENTS: Student[] = [
    { id: '24691A05A1', rollNo: '24691A05A1', name: 'Aarav Sharma', email: 'aarav.s@mits.ac.in', password: 'password123', phone: '+91 9876543210', avatarUrl: 'https://picsum.photos/seed/Aarav/100/100' },
    { id: '24691A05A2', rollNo: '24691A05A2', name: 'Vivaan Singh', email: 'vivaan.s@mits.ac.in', password: 'password123', phone: '+91 9876543211', avatarUrl: 'https://picsum.photos/seed/Vivaan/100/100' },
    { id: '24691A05A3', rollNo: '24691A05A3', name: 'Aditya Kumar', email: 'aditya.k@mits.ac.in', password: 'password123', phone: '+91 9876543212', avatarUrl: 'https://picsum.photos/seed/Aditya/100/100' },
    { id: '24691A05A4', rollNo: '24691A05A4', name: 'Vihaan Gupta', email: 'vihaan.g@mits.ac.in', password: 'password123', phone: '+91 9876543213', avatarUrl: 'https://picsum.photos/seed/Vihaan/100/100' },
    { id: '24691A05A5', rollNo: '24691A05A5', name: 'Arjun Patel', email: 'arjun.p@mits.ac.in', password: 'password123', phone: '+91 9876543214', avatarUrl: 'https://picsum.photos/seed/Arjun/100/100' },
    { id: '24691A05A6', rollNo: '24691A05A6', name: 'Sai Reddy', email: 'sai.r@mits.ac.in', password: 'password123', phone: '+91 9876543215', avatarUrl: 'https://picsum.photos/seed/Sai/100/100' },
    { id: '24691A05A7', rollNo: '24691A05A7', name: 'Reyansh Verma', email: 'reyansh.v@mits.ac.in', password: 'password123', phone: '+91 9876543216', avatarUrl: 'https://picsum.photos/seed/Reyansh/100/100' },
    { id: '24691A05A8', rollNo: '24691A05A8', name: 'Krishna Yadav', email: 'krishna.y@mits.ac.in', password: 'password123', phone: '+91 9876543217', avatarUrl: 'https://picsum.photos/seed/Krishna/100/100' },
    { id: '24691A05A9', rollNo: '24691A05A9', name: 'Ishaan Khan', email: 'ishaan.k@mits.ac.in', password: 'password123', phone: '+91 9876543218', avatarUrl: 'https://picsum.photos/seed/Ishaan/100/100' },
    { id: '24691A05B0', rollNo: '24691A05B0', name: 'Shaurya Desai', email: 'shaurya.d@mits.ac.in', password: 'password123', phone: '+91 9876543219', avatarUrl: 'https://picsum.photos/seed/Shaurya/100/100' },
];

const CSE_B_STUDENTS: Student[] = [
    { id: '24691A05B1', rollNo: '24691A05B1', name: 'Aanya Joshi', email: 'aanya.j@mits.ac.in', password: 'password123', phone: '+91 9876543220', avatarUrl: 'https://picsum.photos/seed/Aanya/100/100' },
    { id: '24691A05B2', rollNo: '24691A05B2', name: 'Diya Mehra', email: 'diya.m@mits.ac.in', password: 'password123', phone: '+91 9876543221', avatarUrl: 'https://picsum.photos/seed/Diya/100/100' },
    { id: '24691A05B3', rollNo: '24691A05B3', name: 'Pari Agarwal', email: 'pari.a@mits.ac.in', password: 'password123', phone: '+91 9876543222', avatarUrl: 'https://picsum.photos/seed/Pari/100/100' },
    { id: '24691A05B4', rollNo: '24691A05B4', name: 'Ananya Iyer', email: 'ananya.i@mits.ac.in', password: 'password123', phone: '+91 9876543223', avatarUrl: 'https://picsum.photos/seed/Ananya/100/100' },
    { id: '24691A05B5', rollNo: '24691A05B5', name: 'Myra Nair', email: 'myra.n@mits.ac.in', password: 'password123', phone: '+91 9876543224', avatarUrl: 'https://picsum.photos/seed/Myra/100/100' },
    { id: '24691A05B6', rollNo: '24691A05B6', name: 'Saanvi Pillai', email: 'saanvi.p@mits.ac.in', password: 'password123', phone: '+91 9876543225', avatarUrl: 'https://picsum.photos/seed/Saanvi/100/100' },
    { id: '24691A05B7', rollNo: '24691A05B7', name: 'Kiara Menon', email: 'kiara.m@mits.ac.in', password: 'password123', phone: '+91 9876543226', avatarUrl: 'https://picsum.photos/seed/Kiara/100/100' },
    { id: '24691A05B8', rollNo: '24691A05B8', name: 'Zara Bhatt', email: 'zara.b@mits.ac.in', password: 'password123', phone: '+91 9876543227', avatarUrl: 'https://picsum.photos/seed/Zara/100/100' },
    { id: '24691A05B9', rollNo: '24691A05B9', name: 'Riya Chauhan', email: 'riya.c@mits.ac.in', password: 'password123', phone: '+91 9876543228', avatarUrl: 'https://picsum.photos/seed/Riya/100/100' },
    { id: '24691A05C0', rollNo: '24691A05C0', name: 'Ira Dubey', email: 'ira.d@mits.ac.in', password: 'password123', phone: '+91 9876543229', avatarUrl: 'https://picsum.photos/seed/Ira/100/100' },
];

const CSE_C_STUDENTS: Student[] = [
  { id: '23691A05G6', rollNo: '23691A05G6', name: 'Mani Bhushan', email: 'mani.b@mits.ac.in', password: 'password123', phone: '+91 9876543230', avatarUrl: 'https://picsum.photos/seed/Mani/100/100' },
  { id: '23691A05G3', rollNo: '23691A05G3', name: 'Razak Mohammed', email: 'razak@mits.ac.in', password: 'password123', phone: '+91 9876543231', avatarUrl: 'https://picsum.photos/seed/Razak/100/100' },
  { id: '23691A05J1', rollNo: '23691A05J1', name: 'Sandra Varma', email: 'sandra@mits.ac.in', password: 'password123', phone: '+91 9876543232', avatarUrl: 'https://picsum.photos/seed/Sandra/100/100' },
  { id: '23691A05J5', rollNo: '23691A05J5', name: 'Santosh Kumar', email: 'santosh.k@mits.ac.in', password: 'password123', phone: '+91 9876543233', avatarUrl: 'https://picsum.photos/seed/Santosh/100/100' },
  { id: '23691A3262', rollNo: '23691A3262', name: 'Koushik Roy', email: 'koushik@mits.ac.in', password: 'password123', phone: '+91 9876543234', avatarUrl: 'https://picsum.photos/seed/Koushik/100/100' },
  { id: '23691A0594', rollNo: '23691A0594', name: 'Naveen Kumar', email: 'nawiin@mits.ac.in', password: 'password123', phone: '+91 9876543235', avatarUrl: 'https://picsum.photos/seed/Naveen/100/100' },
  { id: '23691A05C1', rollNo: '23691A05C1', name: 'Advik Reddy', email: 'advik.r@mits.ac.in', password: 'password123', phone: '+91 9876543236', avatarUrl: 'https://picsum.photos/seed/Advik/100/100' },
  { id: '23691A05C2', rollNo: '23691A05C2', name: 'Rohan Mehta', email: 'rohan.m@mits.ac.in', password: 'password123', phone: '+91 9876543237', avatarUrl: 'https://picsum.photos/seed/Rohan/100/100' },
  { id: '23691A05C3', rollNo: '23691A05C3', name: 'Priya Sharma', email: 'priya.s@mits.ac.in', password: 'password123', phone: '+91 9876543238', avatarUrl: 'https://picsum.photos/seed/Priya/100/100' },
  { id: '23691A05C4', rollNo: '23691A05C4', name: 'Arnav Singh', email: 'arnav.s@mits.ac.in', password: 'password123', phone: '+91 9876543239', avatarUrl: 'https://picsum.photos/seed/Arnav/100/100' },
];


export const MOCK_STUDENTS: Student[] = [...CSE_A_STUDENTS, ...CSE_B_STUDENTS, ...CSE_C_STUDENTS];

export const MOCK_ROSTERS: ClassRoster[] = [
  {
    id: 'roster-01',
    className: 'CSE-A',
    students: CSE_A_STUDENTS,
  },
  {
    id: 'roster-02',
    className: 'CSE-B',
    students: CSE_B_STUDENTS,
  },
  {
    id: 'roster-03',
    className: 'CSE-C',
    students: CSE_C_STUDENTS,
  },
];

// Mock attendance data for the student. In a real app, this would be fetched.
export const MOCK_STUDENT_ATTENDANCE: { [subject: string]: AttendanceStatus[] } = {
    'Data Structures': ['P', 'P', 'Ab', 'P', 'P', 'P', 'P', 'Ab', 'P', 'P'],
    'Algorithms': ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    'Database Systems': ['P', 'P', 'P', 'PM', 'P', 'P', 'P', 'P', 'P', 'P'],
    'Operating Systems': ['P', 'P', 'Ab', 'P', 'P', 'Ab', 'P', 'P', 'P', 'P'],
    'Computer Networks': ['P', 'Ab', 'Ab', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    'Software Engineering': ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'PM', 'P'],
};

export const MOCK_TIMETABLES: Record<string, TimetableEntry[]> = {
  'staff-01': [
      { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-A' },
      { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-B' },
      { day: 'Friday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' },
  ],
  'staff-02': [
      { day: 'Tuesday', time: '10:00 - 11:30', subject: 'Algorithms', class: 'CSE-A' },
      { day: 'Thursday', time: '10:00 - 11:30', subject: 'Algorithms', class: 'CSE-A' },
  ],
  'staff-03': [
      { day: 'Monday', time: '11:00 - 12:30', subject: 'Database Systems', class: 'CSE-B' },
      { day: 'Wednesday', time: '11:00 - 12:30', subject: 'Database Systems', class: 'CSE-B' },
  ],
  'staff-04': [
      { day: 'Tuesday', time: '13:00 - 14:30', subject: 'Operating Systems', class: 'CSE-C' },
      { day: 'Thursday', time: '13:00 - 14:30', subject: 'Operating Systems', class: 'CSE-C' },
  ],
  'staff-05': [
      { day: 'Monday', time: '14:00 - 15:30', subject: 'Computer Networks', class: 'CSE-A' },
      { day: 'Wednesday', time: '14:00 - 15:30', subject: 'Computer Networks', class: 'CSE-B' },
  ],
  // Timetable for the first student
  '24691A05A1': [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-A' },
    { day: 'Tuesday', time: '10:00 - 11:30', subject: 'Algorithms', class: 'CSE-A' },
    { day: 'Wednesday', time: '11:00 - 12:30', subject: 'Database Systems', class: 'CSE-A' },
    { day: 'Thursday', time: '13:00 - 14:30', subject: 'Operating Systems', class: 'CSE-A' },
    { day: 'Friday', time: '14:00 - 15:30', subject: 'Computer Networks', class: 'CSE-A' },
    { day: 'Friday', time: '09:00 - 10:30', subject: 'Software Engineering', class: 'CSE-A' },
  ],
};

// Simple lookup for authentication
export const USERS_DB = {
  staff: MOCK_STAFF_LIST,
  students: MOCK_STUDENTS,
  admin: [MOCK_ADMIN],
};
