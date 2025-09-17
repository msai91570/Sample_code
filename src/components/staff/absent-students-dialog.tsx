'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { UserX } from 'lucide-react';
import type { AttendanceRecord, Student } from '@/lib/definitions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface AbsentStudentsDialogProps {
    students: Student[];
    attendanceRecords: AttendanceRecord[];
}

export function AbsentStudentsDialog({ students, attendanceRecords }: AbsentStudentsDialogProps) {
    const absentStudents = attendanceRecords
        .filter(record => record.status === 'Ab')
        .map(record => students.find(s => s.id === record.studentId))
        .filter((student): student is Student => !!student);


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    <UserX className="mr-2 h-4 w-4" />
                    View Absentees ({absentStudents.length})
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-headline">Absent Students</DialogTitle>
                    <DialogDescription>
                        The following students are marked as absent.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    {absentStudents.length > 0 ? (
                        <div className="rounded-lg border">
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
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground text-center py-4">
                            No students are marked as absent.
                        </p>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
