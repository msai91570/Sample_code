'use client';

import type { Staff } from '@/lib/definitions';
import { Mail, Phone } from 'lucide-react';
import { AvatarUploader } from './avatar-uploader';

interface StaffHeaderProps {
  staff: Staff;
}

export function StaffHeader({ staff }: StaffHeaderProps) {
  return (
    <header className="bg-muted border-b p-6">
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
