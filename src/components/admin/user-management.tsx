'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddUserForm } from "./add-user-form";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function UserManagement() {

    return (
        <Tabs defaultValue="students">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px] mx-auto">
                <TabsTrigger value="students">Manage Students</TabsTrigger>
                <TabsTrigger value="staff">Manage Staff</TabsTrigger>
            </TabsList>
            <TabsContent value="students" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Student</CardTitle>
                        <CardDescription>Enter the details below to add a new student to the system.</CardDescription>
                    </CardHeader>
                    <AddUserForm role="student" />
                </Card>
            </TabsContent>
            <TabsContent value="staff" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Staff</CardTitle>
                        <CardDescription>Enter the details below to add a new staff member to the system.</CardDescription>
                    </CardHeader>
                    <AddUserForm role="staff" />
                </Card>
            </TabsContent>
        </Tabs>
    );
}
