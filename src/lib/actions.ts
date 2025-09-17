'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { USERS_DB } from './mock-data';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
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
