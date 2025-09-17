import { StudentHeader } from "@/components/student/student-header";
import { StudentAttendanceView } from "@/components/student/student-attendance-view";

export default function StudentDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <StudentHeader />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold font-headline">Your Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome to your personal attendance portal.
            </p>
          </div>
          <div className="mt-8">
            <StudentAttendanceView />
          </div>
        </div>
      </main>
    </div>
  );
}
