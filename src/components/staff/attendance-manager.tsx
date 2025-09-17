'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_ROSTERS, MOCK_STAFF } from "@/lib/mock-data";
import { AttendanceTable } from "./attendance-table";
import { ClassPictureUploader } from "./class-picture-uploader";

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
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-3/4">
                           <AttendanceTable students={roster.students} className={roster.className} />
                        </div>
                        <div className="md:w-1/4">
                           <ClassPictureUploader className={roster.className} />
                        </div>
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
