'use client';

import { useState, useMemo, useTransition } from 'react';
import { useFormState } from 'react-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import type { AttendanceRecord, AttendanceStatus, Student } from '@/lib/definitions';
import { submitAttendance, type AttendanceState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface AttendanceTableProps {
  students: Student[];
  className: string;
}

export function AttendanceTable({ students, className }: AttendanceTableProps) {
  const initialAttendance = useMemo(() => 
    students.map(student => ({ studentId: student.id, status: null })),
    [students]
  );
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(initialAttendance);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const initialState: AttendanceState = { message: null };
  const [state, dispatch] = useFormState(submitAttendance, initialState);

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
              <TableHead>Student Name</TableHead>
              <TableHead className="text-center w-[300px]">Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map(student => {
              const currentStatus = attendance.find(a => a.studentId === student.id)?.status;
              return (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>
                    <RadioGroup
                      className="flex justify-center space-x-4"
                      value={currentStatus || ''}
                      onValueChange={(value) => handleStatusChange(student.id, value as AttendanceStatus)}
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
