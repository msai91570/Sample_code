'use client';

import { USERS_DB, MOCK_TIMETABLE } from "@/lib/mock-data";
import type { Student, TimetableEntry, AttendanceStatus } from "@/lib/definitions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { CheckCircle, XCircle, AlertCircle, PieChart } from "lucide-react";

// Mock attendance data for the student. In a real app, this would be fetched.
const MOCK_STUDENT_ATTENDANCE: { [subject: string]: AttendanceStatus[] } = {
    'Data Structures': ['P', 'P', 'Ab', 'P', 'P', 'P', 'P', 'Ab', 'P', 'P'],
    'Database Systems': ['P', 'P', 'P', 'PM', 'P', 'P', 'P', 'P', 'P', 'P'],
};

export function StudentAttendanceView() {
    // We'll use the first student for demonstration purposes.
    const student: Student = USERS_DB.students[0];
    const timetable: TimetableEntry[] = MOCK_TIMETABLE; // Assuming this is the student's timetable.

    const subjects = [...new Set(timetable.map(entry => entry.subject))];

    const getStatusIcon = (status: AttendanceStatus) => {
        switch (status) {
            case 'P': return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'Ab': return <XCircle className="h-5 w-5 text-destructive" />;
            case 'PM': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
            default: return null;
        }
    };
    
    const calculateOverallAttendance = () => {
        let totalClasses = 0;
        let attendedClasses = 0;
        
        Object.values(MOCK_STUDENT_ATTENDANCE).forEach(statuses => {
            totalClasses += statuses.length;
            attendedClasses += statuses.filter(s => s === 'P' || s === 'PM').length;
        });

        if (totalClasses === 0) return 0;
        return (attendedClasses / totalClasses) * 100;
    }
    
    const overallPercentage = calculateOverallAttendance();

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-6 w-6" /> Overall Attendance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <Progress value={overallPercentage} className="w-full" />
                        <span className="text-2xl font-bold font-headline">{overallPercentage.toFixed(2)}%</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Subject-wise Attendance</CardTitle>
                    <CardDescription>Your attendance record for each subject.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Subject</TableHead>
                                <TableHead>Percentage</TableHead>
                                <TableHead className="text-right">Recent History</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {subjects.map(subject => {
                                const attendance = MOCK_STUDENT_ATTENDANCE[subject] || [];
                                const total = attendance.length;
                                const present = attendance.filter(s => s === 'P' || s === 'PM').length;
                                const percentage = total > 0 ? (present / total) * 100 : 0;
                                
                                return (
                                    <TableRow key={subject}>
                                        <TableCell className="font-medium">{subject}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Progress value={percentage} className="w-24" />
                                                <span>{percentage.toFixed(0)}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="flex justify-end gap-2">
                                            {attendance.slice(-5).map((status, index) => (
                                                <Badge 
                                                    key={index}
                                                    variant={status === 'P' ? 'secondary' : status === 'Ab' ? 'destructive' : 'outline'}
                                                    className="w-8 h-8 flex items-center justify-center"
                                                >
                                                    {status}
                                                </Badge>
                                            ))}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
