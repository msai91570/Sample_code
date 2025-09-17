'use client';

import { useState, useMemo, useTransition, useEffect, useActionState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import type { AttendanceRecord, AttendanceStatus, Student } from '@/lib/definitions';
import { submitAttendance, type AttendanceState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

interface AttendanceTableProps {
  students: Student[];
  className: string;
  onAttendanceChange: (records: AttendanceRecord[]) => void;
}

export function AttendanceTable({ students, className, onAttendanceChange }: AttendanceTableProps) {
  const initialAttendance = useMemo(() => 
    students.map(student => ({ studentId: student.id, status: 'P' as AttendanceStatus })),
    [students]
  );
  
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(initialAttendance);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const [selectAllStatus, setSelectAllStatus] = useState<AttendanceStatus | null>('P');

  const initialState: AttendanceState = { message: null };
  const [state, dispatch] = useActionState(submitAttendance, initialState);

  useEffect(() => {
    onAttendanceChange(attendance);
  }, [attendance, onAttendanceChange]);

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Attendance Update",
        description: state.message,
        action: <CheckCircle className="text-green-500" />,
      });
    }
  }, [state, toast]);

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendance(prev =>
      prev.map(record =>
        record.studentId === studentId ? { ...record, status } : record
      )
    );
    setSelectAllStatus(null);
  };

  const handleSelectAll = (status: AttendanceStatus) => {
    setSelectAllStatus(status);
    setAttendance(students.map(student => ({ studentId: student.id, status })));
  };
  
  const formAction = (formData: FormData) => {
    attendance.forEach(record => {
        if(record.status) {
            formData.append(record.studentId, record.status);
        }
    });
    formData.append('className', className);
    startTransition(() => {
        dispatch(formData);
    });
  }

  return (
    <form action={formAction}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Table>
          <TableHeader>
             <TableRow>
              <TableHead colSpan={2}>Student</TableHead>
              <TableHead className="text-center w-[300px]">
                <div className="flex items-center justify-center space-x-2">
                    <span>Select All:</span>
                     <RadioGroup
                      className="flex justify-center space-x-4"
                      value={selectAllStatus || ''}
                      onValueChange={(value) => handleSelectAll(value as AttendanceStatus)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="P" id={`select-all-p`} />
                        <Label htmlFor={`select-all-p`}>P</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Ab" id={`select-all-ab`} />
                        <Label htmlFor={`select-all-ab`}>Ab</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="PM" id={`select-all-pm`} />
                        <Label htmlFor={`select-all-pm`}>PM</Label>
                      </div>
                    </RadioGroup>
                </div>
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Roll No.</TableHead>
              <TableHead className="text-center w-[300px]">Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map(student => {
              const currentStatus = attendance.find(a => a.studentId === student.id)?.status;
              return (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>
                    <RadioGroup
                      className="flex justify-center space-x-4"
                      value={currentStatus || ''}
                      onValueChange={(value) => handleStatusChange(student.id, value as AttendanceStatus)}
                      name={`attendance-${student.id}`}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="P" id={`p-${student.id}`} />
                        <Label htmlFor={`p-${student.id}`}>P</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Ab" id={`ab-${student.id}`} />
                        <Label htmlFor={`ab-${student.id}`}>Ab</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="PM" id={`pm-${student.id}`} />
                        <Label htmlFor={`pm-${student.id}`}>PM</Label>
                      </div>
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end mt-6">
        <Button type="submit" disabled={isPending} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          {isPending ? 'Submitting...' : 'Submit Attendance'}
        </Button>
      </div>
    </form>
  );
}
