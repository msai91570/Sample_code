import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_TIMETABLES } from "@/lib/mock-data";
import type { TimetableEntry } from "@/lib/definitions";
import { Calendar, Clock, Book } from "lucide-react";

interface TimetableDisplayProps {
  staffId: string;
}

export function TimetableDisplay({ staffId }: TimetableDisplayProps) {
  const timetable: TimetableEntry[] = MOCK_TIMETABLES[staffId] || [];

  if (timetable.length === 0) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 text-center">
        <p className="text-muted-foreground">No timetable available for this staff member.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[150px]"><Calendar className="inline-block mr-2 h-4 w-4"/>Day</TableHead>
                    <TableHead className="w-[200px]"><Clock className="inline-block mr-2 h-4 w-4"/>Time</TableHead>
                    <TableHead><Book className="inline-block mr-2 h-4 w-4"/>Subject</TableHead>
                    <TableHead>Class</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {timetable.map((entry, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{entry.day}</TableCell>
                        <TableCell>{entry.time}</TableCell>
                        <TableCell>{entry.subject}</TableCell>
                        <TableCell>{entry.class}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
