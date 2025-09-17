'use client';

import { USERS_DB, MOCK_TIMETABLES, MOCK_STUDENT_ATTENDANCE } from "@/lib/mock-data";
import type { Student, TimetableEntry, AttendanceStatus } from "@/lib/definitions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { BookOpen, PieChart } from "lucide-react";

export function StudentAttendanceView() {
    // We'll use the first student for demonstration purposes. In a real app, you'd get this from session.
    const student: Student = USERS_DB.students[0];
    const timetable: TimetableEntry[] = MOCK_TIMETABLES[student.id] || [];

    const subjects = [...new Set(timetable.map(entry => entry.subject))];

    const calculateOverallAttendance = () => {
        let totalClasses = 0;
        let attendedClasses = 0;
        
        subjects.forEach(subject => {
            const statuses = MOCK_STUDENT_ATTENDANCE[subject] || [];
            totalClasses += statuses.length;
            attendedClasses += statuses.filter(s => s === 'P' || s === 'PM').length;
        });

        if (totalClasses === 0) return { percentage: 0, total: 0, attended: 0};
        const percentage = (attendedClasses / totalClasses) * 100;
        return { percentage, total: totalClasses, attended: attendedClasses };
    }
    
    const overallAttendance = calculateOverallAttendance();

    return (
        <div className="space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-6 w-6" />
                        Subject-wise Attendance
                    </CardTitle>
                    <CardDescription>Your attendance record for each subject.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Subject</TableHead>
                                <TableHead>Conducted</TableHead>
                                <TableHead>Attended</TableHead>
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
                                        <TableCell>{total}</TableCell>
                                        <TableCell>{present}</TableCell>
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
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-6 w-6" /> Overall Attendance
                    </CardTitle>
                     <CardDescription>
                        Total Classes Conducted: {overallAttendance.total} | Total Classes Attended: {overallAttendance.attended}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <Progress value={overallAttendance.percentage} className="w-full" />
                        <span className="text-2xl font-bold font-headline">{overallAttendance.percentage.toFixed(2)}%</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
