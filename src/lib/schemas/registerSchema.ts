import { z } from 'zod';

export const registerSchematsts = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters'
    })
});

export type registerSchematsts = z.infer<typeof registerSchematsts>;
