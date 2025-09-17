'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addUser, type AddUserState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CardContent, CardFooter } from '../ui/card';

const AddUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AddUserFormInputs = z.infer<typeof AddUserSchema>;

interface AddUserFormProps {
  role: 'staff' | 'student';
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding User...' : 'Add User'}
      <UserPlus className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function AddUserForm({ role }: AddUserFormProps) {
  const initialState: AddUserState = { message: null, errors: {}, success: false };
  const addUserWithRole = addUser.bind(null);
  const [state, dispatch] = useActionState(addUserWithRole, initialState);
  const { toast } = useToast();

  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm<AddUserFormInputs>({
    resolver: zodResolver(AddUserSchema),
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
        action: state.success ? <CheckCircle className="text-green-500" /> : <AlertTriangle className="text-white"/>,
      });
      if (state.success) {
        reset(); // Clear form on successful submission
      }
    }
  }, [state, toast, reset]);

  return (
    <form
      action={dispatch}
      noValidate
    >
      <CardContent className="space-y-6 pt-6">
        <input type="hidden" name="role" value={role} />
        <div className="space-y-2">
          <Label htmlFor={`name-${role}`}>Full Name</Label>
          <Input
            id={`name-${role}`}
            {...register('name')}
            onBlur={() => trigger('name')}
            aria-invalid={!!errors.name || !!state.errors?.name}
          />
          {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
          {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`email-${role}`}>Email Address</Label>
          <Input
            id={`email-${role}`}
            type="email"
            {...register('email')}
            onBlur={() => trigger('email')}
            aria-invalid={!!errors.email || !!state.errors?.email}
          />
          {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
          {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`password-${role}`}>Password</Label>
          <Input
            id={`password-${role}`}
            type="password"
            {...register('password')}
            onBlur={() => trigger('password')}
            aria-invalid={!!errors.password || !!state.errors?.password}
          />
          {errors.password && <p className="text-sm font-medium text-destructive">{errors.password.message}</p>}
          {state.errors?.password && <p className="text-sm font-medium text-destructive">{state.errors.password[0]}</p>}
        </div>
      
        {state.message && !state.success && (
            <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        )}
      </CardContent>
      <CardFooter>
        <SubmitButton />
      </CardFooter>
    </form>
  );
}
