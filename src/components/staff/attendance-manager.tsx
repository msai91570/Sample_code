'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_ROSTERS } from "@/lib/mock-data";
import { AttendanceTable } from "./attendance-table";
import { ClassPictureUploader } from "./class-picture-uploader";
import { useState, useCallback } from "react";
import type { AttendanceRecord, Staff } from "@/lib/definitions";
import { AbsentStudentsList } from "./absent-students-list";

interface AttendanceManagerProps {
    staff: Staff;
}

export function AttendanceManager({ staff }: AttendanceManagerProps) {
    const classes = staff.classes;
    const rosters = MOCK_ROSTERS.filter(roster => classes.includes(roster.className));
    const [attendanceRecords, setAttendanceRecords] = useState<{[className: string]: AttendanceRecord[]}>({});

    const handleAttendanceChange = useCallback((className: string, newRecords: AttendanceRecord[]) => {
        setAttendanceRecords(prev => ({ ...prev, [className]: newRecords }));
    }, []);
    
    if (!classes.length || !rosters.length) {
        return <div>You are not assigned to any classes.</div>;
    }
    
    const defaultTab = classes[0];

    return (
        <Tabs defaultValue={defaultTab}>
            <TabsList className={`grid w-full md:w-[${rosters.length > 2 ? '400px' : '300px'}]`} style={{gridTemplateColumns: `repeat(${rosters.length}, 1fr)`}}>
                {rosters.map(roster => (
                     <TabsTrigger key={roster.className} value={roster.className}>{roster.className}</TabsTrigger>
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
