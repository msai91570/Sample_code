'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { login, type LoginState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormInputs = z.infer<typeof LoginSchema>;

interface LoginFormProps {
  role: 'staff' | 'student';
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? 'Signing In...' : 'Sign In'}
      <LogIn className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function LoginForm({ role }: LoginFormProps) {
  const initialState: LoginState = { message: null, errors: {} };
  const loginWithRole = login.bind(null);
  const [state, dispatch] = useActionState(loginWithRole, initialState);
  const { toast } = useToast();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    if (state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Login Failed",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form
      action={dispatch}
      className="space-y-6"
      noValidate
    >
      <div className="space-y-4">
        <input type="hidden" name="role" value={role} />
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@university.edu"
            {...register('email')}
            onBlur={() => trigger('email')}
            required
            aria-invalid={!!errors.email || !!state.errors?.email}
          />
          {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
          {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            onBlur={() => trigger('password')}
            required
            aria-invalid={!!errors.password || !!state.errors?.password}
          />
          {errors.password && <p className="text-sm font-medium text-destructive">{errors.password.message}</p>}
          {state.errors?.password && <p className="text-sm font-medium text-destructive">{state.errors.password[0]}</p>}
        </div>
      </div>

      {state.message && !state.errors && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      
      <SubmitButton />
    </form>
  );
}
