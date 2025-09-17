'use client';

import { MOCK_STAFF } from '@/lib/mock-data';
import type { Staff } from '@/lib/definitions';
import { Mail, Phone } from 'lucide-react';
import { AvatarUploader } from './avatar-uploader';

export function StaffHeader() {
  // In a real app, this data would come from a session or API call.
  const staff: Staff = MOCK_STAFF;

  return (
    <header className="bg-muted/30 border-b p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline text-foreground">{staff.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{staff.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{staff.phone}</span>
            </div>
          </div>
        </div>
        <AvatarUploader src={staff.avatarUrl} alt={staff.name} />
      </div>
    </header>
  );
}
