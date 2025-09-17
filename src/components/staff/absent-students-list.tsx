'use client';

import type { AttendanceRecord, Student } from '@/lib/definitions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ScrollArea } from '../ui/scroll-area';
import { UserX } from 'lucide-react';

interface AbsentStudentsListProps {
    students: Student[];
    attendanceRecords: AttendanceRecord[];
}

export function AbsentStudentsList({ students, attendanceRecords }: AbsentStudentsListProps) {
    const absentStudents = attendanceRecords
        .filter(record => record.status === 'Ab')
        .map(record => students.find(s => s.id === record.studentId))
        .filter((student): student is Student => !!student);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-headline flex items-center gap-2">
                    <UserX className="h-5 w-5" />
                    Absentees ({absentStudents.length})
                </CardTitle>
                <CardDescription>
                    Students marked as absent.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-48 rounded-md border">
                    {absentStudents.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Roll No.</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {absentStudents.map(student => (
                                <TableRow key={student.id}>
                                    <TableCell className="font-medium">{student.name}</TableCell>
                                    <TableCell>{student.rollNo}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-sm text-muted-foreground text-center p-4">
                                No students are marked as absent.
                            </p>
                        </div>
                    )}
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
