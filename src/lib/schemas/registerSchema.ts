import { z } from 'zod';

// Define the schema
export const RegisterSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

// Define the TypeScript type based on the schema
export type RegisterSchema = z.infer<typeof RegisterSchema>;
