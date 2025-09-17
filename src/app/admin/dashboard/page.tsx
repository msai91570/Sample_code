import { AdminHeader } from "@/components/admin/admin-header";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AdminHeader />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold font-headline text-center">Welcome to the Admin Dashboard</h1>
            <p className="text-center text-muted-foreground mt-2">
              You can manage staff, students, and classes from this portal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
