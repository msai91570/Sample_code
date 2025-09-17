'use client';

import { USERS_DB } from '@/lib/mock-data';
import type { Student } from '@/lib/definitions';
import { Mail, Phone } from 'lucide-react';
import { AvatarUploader } from '../staff/avatar-uploader';

export function StudentHeader() {
  // In a real app, this data would come from a session or API call based on the logged-in user.
  // For now, we'll just display the first student in the mock data.
  const student: Student = USERS_DB.students[0];

  return (
    <header className="bg-muted border-b p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline text-foreground">{student.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{student.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{student.phone}</span>
            </div>
          </div>
        </div>
        <AvatarUploader src={student.avatarUrl!} alt={student.name} />
      </div>
    </header>
  );
}
