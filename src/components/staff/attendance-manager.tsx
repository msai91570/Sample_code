'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_ROSTERS, MOCK_STAFF } from "@/lib/mock-data";
import { AttendanceTable } from "./attendance-table";

export function AttendanceManager() {
    const classes = MOCK_STAFF.classes;
    const rosters = MOCK_ROSTERS;

    return (
        <Tabs defaultValue={classes[0]}>
            <TabsList>
                {classes.map(className => (
                     <TabsTrigger key={className} value={className}>{className}</TabsTrigger>
                ))}
            </TabsList>

            {rosters.map(roster => (
                <TabsContent key={roster.id} value={roster.className}>
                    <AttendanceTable students={roster.students} className={roster.className} />
                </TabsContent>
            ))}
        </Tabs>
    );
}
