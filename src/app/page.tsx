'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/components/login-form';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Role = 'staff' | 'student' | null;

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          {!selectedRole ? (
            <motion.div
              key="role-selection"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="w-full shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-headline mt-4">Attendance Monitor</CardTitle>
                  <CardDescription className="pt-2">
                    The unified portal for students and staff.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4 p-8 py-12">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => setSelectedRole('staff')}
                  >
                    <Briefcase className="mr-2 h-5 w-5" /> Staff Login
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={() => setSelectedRole('student')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    Student Login
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="login-form"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="w-full shadow-2xl">
                <CardHeader>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -left-4 -top-2"
                      onClick={() => setSelectedRole(null)}
                    >
                      <ArrowLeft className="h-5 w-5" />
                      <span className="sr-only">Back</span>
                    </Button>
                    <div className="text-center">
                      <CardTitle className="text-2xl font-headline">
                        {selectedRole === 'staff' ? 'Staff Portal' : 'Student Portal'}
                      </CardTitle>
                      <CardDescription>
                        Sign in to continue to your dashboard.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <LoginForm role={selectedRole} />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
