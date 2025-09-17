'use client';

import { USERS_DB } from "@/lib/mock-data";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AddUserForm } from "./add-user-form";
import { UserList } from "./user-list";
import { Separator } from "../ui/separator";

export function ManageStudents() {
    // In a real app, you might want to fetch this data on the server and pass it down,
    // but for mock data, fetching it on the client is fine.
    const students = USERS_DB.students;

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Student</CardTitle>
                    <CardDescription>Enter the details below to add a new student to the system.</CardDescription>
                </CardHeader>
                <AddUserForm role="student" />
            </Card>

            <Separator />
            
            <UserList users={students} title="All Students" />
        </div>
    );
}
