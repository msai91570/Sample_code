import { StaffHeader } from "@/components/staff/staff-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimetableDisplay } from "@/components/staff/timetable-display";
import { AttendanceManager } from "@/components/staff/attendance-manager";
import { USERS_DB } from "@/lib/mock-data";
import type { Staff } from "@/lib/definitions";

// In a real app, you'd get the logged-in user's ID from the session.
// For this demo, we'll just use the first staff member as the default.
const getLoggedInStaff = (userId: string = 'staff-01'): Staff | undefined => {
  return USERS_DB.staff.find(s => s.id === userId);
}


export default function StaffDashboardPage({ searchParams }: { searchParams: { userId: string } }) {
  const staffUser = getLoggedInStaff(searchParams.userId);
  
  if (!staffUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Staff member not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <StaffHeader staff={staffUser} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="attendance">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                    <TabsTrigger value="attendance">Classes & Attendance</TabsTrigger>
                    <TabsTrigger value="timetable">Timetable</TabsTrigger>
                </TabsList>
                <TabsContent value="attendance" className="mt-6">
                    <h2 className="text-2xl font-bold font-headline mb-4">Manage Attendance</h2>
                    <AttendanceManager staff={staffUser} />
                </TabsContent>
                <TabsContent value="timetable" className="mt-6">
                    <h2 className="text-2xl font-bold font-headline mb-4">Your Weekly Timetable</h2>
                    <TimetableDisplay staffId={staffUser.id} />
                </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  );
}
