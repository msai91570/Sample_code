import type { Staff, Student, ClassRoster, TimetableEntry } from './definitions';

export const MOCK_STAFF: Staff = {
  id: 'staff-01',
  name: 'Dr K. Nirmala',
  email: 'nirmala@mits.ac.in',
  phone: '+91 1234567890',
  avatarUrl: 'https://picsum.photos/seed/staff-avatar/100/100',
  password: 'password123',
  classes: ['CSE-A', 'CSE-B', 'CSE-C'],
};

const CSE_A_STUDENTS: Student[] = [
    { id: '24691A05A1', rollNo: '24691A05A1', name: 'Aarav Sharma', email: 'aarav.s@mits.ac.in', password: 'password123' },
    { id: '24691A05A2', rollNo: '24691A05A2', name: 'Vivaan Singh', email: 'vivaan.s@mits.ac.in', password: 'password123' },
    { id: '24691A05A3', rollNo: '24691A05A3', name: 'Aditya Kumar', email: 'aditya.k@mits.ac.in', password: 'password123' },
    { id: '24691A05A4', rollNo: '24691A05A4', name: 'Vihaan Gupta', email: 'vihaan.g@mits.ac.in', password: 'password123' },
    { id: '24691A05A5', rollNo: '24691A05A5', name: 'Arjun Patel', email: 'arjun.p@mits.ac.in', password: 'password123' },
    { id: '24691A05A6', rollNo: '24691A05A6', name: 'Sai Reddy', email: 'sai.r@mits.ac.in', password: 'password123' },
    { id: '24691A05A7', rollNo: '24691A05A7', name: 'Reyansh Verma', email: 'reyansh.v@mits.ac.in', password: 'password123' },
    { id: '24691A05A8', rollNo: '24691A05A8', name: 'Krishna Yadav', email: 'krishna.y@mits.ac.in', password: 'password123' },
    { id: '24691A05A9', rollNo: '24691A05A9', name: 'Ishaan Khan', email: 'ishaan.k@mits.ac.in', password: 'password123' },
    { id: '24691A05B0', rollNo: '24691A05B0', name: 'Shaurya Desai', email: 'shaurya.d@mits.ac.in', password: 'password123' },
];

const CSE_B_STUDENTS: Student[] = [
    { id: '24691A05B1', rollNo: '24691A05B1', name: 'Aanya Joshi', email: 'aanya.j@mits.ac.in', password: 'password123' },
    { id: '24691A05B2', rollNo: '24691A05B2', name: 'Diya Mehra', email: 'diya.m@mits.ac.in', password: 'password123' },
    { id: '24691A05B3', rollNo: '24691A05B3', name: 'Pari Agarwal', email: 'pari.a@mits.ac.in', password: 'password123' },
    { id: '24691A05B4', rollNo: '24691A05B4', name: 'Ananya Iyer', email: 'ananya.i@mits.ac.in', password: 'password123' },
    { id: '24691A05B5', rollNo: '24691A05B5', name: 'Myra Nair', email: 'myra.n@mits.ac.in', password: 'password123' },
    { id: '24691A05B6', rollNo: '24691A05B6', name: 'Saanvi Pillai', email: 'saanvi.p@mits.ac.in', password: 'password123' },
    { id: '24691A05B7', rollNo: '24691A05B7', name: 'Kiara Menon', email: 'kiara.m@mits.ac.in', password: 'password123' },
    { id: '24691A05B8', rollNo: '24691A05B8', name: 'Zara Bhatt', email: 'zara.b@mits.ac.in', password: 'password123' },
    { id: '24691A05B9', rollNo: '24691A05B9', name: 'Riya Chauhan', email: 'riya.c@mits.ac.in', password: 'password123' },
    { id: '24691A05C0', rollNo: '24691A05C0', name: 'Ira Dubey', email: 'ira.d@mits.ac.in', password: 'password123' },
];

const CSE_C_STUDENTS: Student[] = [
  { id: '23691A05G6', rollNo: '23691A05G6', name: 'Mani Bhushan', email: 'mani.b@mits.ac.in', password: 'password123' },
  { id: '23691A05G3', rollNo: '23691A05G3', name: 'Razak Mohammed', email: 'razak@mits.ac.in', password: 'password123' },
  { id: '23691A05J1', rollNo: '23691A05J1', name: 'Sandra Varma', email: 'sandra@mits.ac.in', password: 'password123' },
  { id: '23691A05J5', rollNo: '23691A05J5', name: 'Santosh Kumar', email: 'santosh.k@mits.ac.in', password: 'password123' },
  { id: '23691A3262', rollNo: '23691A3262', name: 'Koushik Roy', email: 'koushik@mits.ac.in', password: 'password123' },
  { id: '23691A0594', rollNo: '23691A0594', name: 'Naveen Kumar', email: 'nawiin@mits.ac.in', password: 'password123' },
  { id: '23691A05C1', rollNo: '23691A05C1', name: 'Advik Reddy', email: 'advik.r@mits.ac.in', password: 'password123' },
  { id: '23691A05C2', rollNo: '23691A05C2', name: 'Rohan Mehta', email: 'rohan.m@mits.ac.in', password: 'password123' },
  { id: '23691A05C3', rollNo: '23691A05C3', name: 'Priya Sharma', email: 'priya.s@mits.ac.in', password: 'password123' },
  { id: '23691A05C4', rollNo: '23691A05C4', name: 'Arnav Singh', email: 'arnav.s@mits.ac.in', password: 'password123' },
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

export const MOCK_TIMETABLE: TimetableEntry[] = [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' },
    { day: 'Tuesday', time: '10:00 - 11:30', subject: 'Database Systems', class: 'CSE-C' },
    { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Data Structures', class: 'CSE-C' },
    { day: 'Thursday', time: '13:00 - 14:30', subject: 'Database Systems', class: 'CSE-C' },
];

// Simple lookup for authentication
export const USERS_DB = {
  staff: [MOCK_STAFF],
  students: MOCK_STUDENTS,
};
