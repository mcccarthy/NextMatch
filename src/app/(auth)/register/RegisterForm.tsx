'use client';

import { RegisterSchema } from '@/lib/schemas/registerSchema'; // Import the schema with the correct name
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardBody, Button, Input } from '@nextui-org/react';

import React from 'react';
import { useForm } from 'react-hook-form';
import { GiPadlock } from 'react-icons/gi';

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<RegisterSchema>({
        resolver: zodResolver(RegisterSchema), // Use RegisterSchema here
        mode: 'onTouched'
    });

    const onSubmit = (data: RegisterSchema) => {
        console.log(data);
    };

    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-secondary'>
                    <div className='flex flex-row items-center gap-3'>
                        <GiPadlock size={40} />
                        <h1 className='text-3xl font-semibold'>Register</h1>
                    </div>
                    <p className='text-neutral-500'>Welcome to DatePulse</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Input
                            defaultValue=''
                            label='Name'
                            variant='bordered'
                            {...register('name')}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />
                        <Input
                            defaultValue=''
                            label='Email'
                            variant='bordered'
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            defaultValue=''
                            label='Password'
                            type='password'
                            variant='bordered'
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                        />
                        <Button
                            isDisabled={!isValid}
                            fullWidth
                            color='secondary'
                            type='submit'>
                            Register
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
