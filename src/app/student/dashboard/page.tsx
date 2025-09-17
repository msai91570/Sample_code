import { StudentHeader } from "@/components/student/student-header";
import { StudentAttendanceView } from "@/components/student/student-attendance-view";

export default function StudentDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <StudentHeader />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <StudentAttendanceView />
        </div>
      </main>
    </div>
  );
}
