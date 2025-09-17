'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManageStudents } from "./manage-students";
import { ManageStaff } from "./manage-staff";

export function UserManagement() {
    return (
        <Tabs defaultValue="students">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px] mx-auto">
                <TabsTrigger value="students">Manage Students</TabsTrigger>
                <TabsTrigger value="staff">Manage Staff</TabsTrigger>
            </TabsList>
            <TabsContent value="students" className="mt-6">
                <ManageStudents />
            </TabsContent>
            <TabsContent value="staff" className="mt-6">
                <ManageStaff />
            </TabsContent>
        </Tabs>
    );
}
