'use client';

import { USERS_DB } from "@/lib/mock-data";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AddUserForm } from "./add-user-form";
import { UserList } from "./user-list";
import { Separator } from "../ui/separator";

export function ManageStaff() {
    const staff = USERS_DB.staff;

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Staff Member</CardTitle>
                    <CardDescription>Enter the details below to add a new staff member to the system.</CardDescription>
                </CardHeader>
                <AddUserForm role="staff" />
            </Card>

            <Separator />

            <UserList users={staff} title="All Staff" />
        </div>
    );
}
