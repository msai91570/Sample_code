export type Staff = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  password?: string;
  classes: string[];
};

export type Student = {
  id: string;
  name: string;
  email: string;
  password?: string;
};

export type ClassRoster = {
  id: string;
  className: string;
  students: Student[];
};

export type TimetableEntry = {
  day: string;
  time: string;
  subject: string;
  class: string;
};

export type AttendanceStatus = 'P' | 'Ab' | 'PM';

export type AttendanceRecord = {
  studentId: string;
  status: AttendanceStatus | null;
};
