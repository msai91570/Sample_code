'use client';

import { USERS_DB } from '@/lib/mock-data';
import type { Staff } from '@/lib/definitions';
import { Mail, Shield } from 'lucide-react';
import { AvatarUploader } from '../staff/avatar-uploader';

export function AdminHeader() {
  // In a real app, this data would come from a session or API call.
  const admin: Staff = USERS_DB.admin[0];

  return (
    <header className="bg-destructive/10 border-b border-destructive/20 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline text-destructive">{admin.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-destructive/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{admin.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Administrator</span>
            </div>
          </div>
        </div>
        <AvatarUploader src={admin.avatarUrl} alt={admin.name} />
      </div>
    </header>
  );
}
