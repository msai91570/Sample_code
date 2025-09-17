'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_ROSTERS, MOCK_STAFF } from "@/lib/mock-data";
import { AttendanceTable } from "./attendance-table";
import { ClassPictureUploader } from "./class-picture-uploader";
import { useState, useCallback } from "react";
import type { AttendanceRecord } from "@/lib/definitions";
import { AbsentStudentsList } from "./absent-students-list";

export function AttendanceManager() {
    const classes = MOCK_STAFF.classes;
    const rosters = MOCK_ROSTERS;
    const [attendanceRecords, setAttendanceRecords] = useState<{[className: string]: AttendanceRecord[]}>({});

    const handleAttendanceChange = useCallback((className: string, newRecords: AttendanceRecord[]) => {
        setAttendanceRecords(prev => ({ ...prev, [className]: newRecords }));
    }, []);
    
    if (!classes.length || !rosters.length) {
        return <div>No classes or rosters available.</div>;
    }

    return (
        <Tabs defaultValue={classes[0]}>
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                {classes.map(className => (
                     <TabsTrigger key={className} value={className}>{className}</TabsTrigger>
                ))}
            </TabsList>

            {rosters.map(roster => (
                <TabsContent key={roster.id} value={roster.className}>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-3/4">
                           <AttendanceTable 
                             students={roster.students} 
                             className={roster.className}
                             onAttendanceChange={(records) => handleAttendanceChange(roster.className, records)}
                           />
                        </div>
                        <div className="md:w-1/4 space-y-4">
                           <AbsentStudentsList 
                             students={roster.students}
                             attendanceRecords={attendanceRecords[roster.className] || []}
                           />
                           <ClassPictureUploader className={roster.className} />
                        </div>
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
