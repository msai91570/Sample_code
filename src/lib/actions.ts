'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { USERS_DB } from './mock-data';
import type { Student, Staff } from './definitions';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }), // Allow any non-empty password for simplicity
  role: z.enum(['staff', 'student']),
});

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    role?: string[];
  };
  message?: string | null;
};

export async function login(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Failed to log in.',
    };
  }

  const { email, password, role } = validatedFields.data;

  // Simulate database lookup
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check for admin user first
  const adminUser = USERS_DB.admin.find((u) => u.email === email);
  if (adminUser && adminUser.password === password) {
    redirect('/admin/dashboard');
  }

  let user = null;
  if (role === 'staff') {
    user = USERS_DB.staff.find((u) => u.email === email);
  } else {
    user = USERS_DB.students.find((u) => u.email === email);
  }

  if (!user || user.password !== password) {
    return { message: 'Invalid credentials. Please try again.' };
  }
  
  if (role === 'staff') {
     redirect('/staff/dashboard');
  }

  // For now, we only have the staff dashboard. Student login will show an alert.
  if (role === 'student') {
    return { message: "Student portal is not yet available." }
  }

  // This should not be reached
  return {};
}

export type AttendanceState = {
  message?: string | null;
}

export async function submitAttendance(prevState: AttendanceState, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  console.log('Submitted Attendance:', rawData);
  // In a real application, you would save this data to the database.
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: `Attendance submitted successfully for class ${formData.get('className')}!` };
}

const AddUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.enum(['staff', 'student']),
});

export type AddUserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export async function addUser(prevState: AddUserState, formData: FormData): Promise<AddUserState> {
  const validatedFields = AddUserSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Failed to add user.',
      success: false,
    };
  }

  const { name, email, password, role } = validatedFields.data;

  // Check if user already exists
  const existingUser = 
    USERS_DB.staff.some(u => u.email === email) || 
    USERS_DB.students.some(u => u.email === email) ||
    USERS_DB.admin.some(u => u.email === email);

  if (existingUser) {
    return {
      message: `User with email ${email} already exists.`,
      success: false,
    }
  }

  if (role === 'student') {
    const newStudent: Student = {
      id: `student-${Date.now()}`,
      name,
      email,
      password,
      rollNo: `TEMP-${Date.now()}`, // Temporary roll number
    };
    USERS_DB.students.push(newStudent);
    console.log('Added new student:', newStudent);
  } else if (role === 'staff') {
    const newStaff: Staff = {
      id: `staff-${Date.now()}`,
      name,
      email,
      password,
      phone: 'N/A',
      avatarUrl: 'https://picsum.photos/seed/new-staff/100/100',
      classes: [],
    };
    USERS_DB.staff.push(newStaff);
    console.log('Added new staff:', newStaff);
  }

  return { message: `Successfully added ${role}: ${name}`, success: true };
}
