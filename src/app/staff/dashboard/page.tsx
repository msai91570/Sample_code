import { StaffHeader } from "@/components/staff/staff-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimetableDisplay } from "@/components/staff/timetable-display";
import { AttendanceManager } from "@/components/staff/attendance-manager";

export default function StaffDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <StaffHeader />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="attendance">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                    <TabsTrigger value="attendance">Classes & Attendance</TabsTrigger>
                    <TabsTrigger value="timetable">Timetable</TabsTrigger>
                </TabsList>
                <TabsContent value="attendance" className="mt-6">
                    <h2 className="text-2xl font-bold font-headline mb-4">Manage Attendance</h2>
                    <AttendanceManager />
                </TabsContent>
                <TabsContent value="timetable" className="mt-6">
                    <h2 className="text-2xl font-bold font-headline mb-4">Your Weekly Timetable</h2>
                    <TimetableDisplay />
                </TabsContent>
            </Tabs>
        </div>
      </main>
    </div>
  );
}
