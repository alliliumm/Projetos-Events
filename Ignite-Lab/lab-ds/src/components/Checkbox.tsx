import { clsx } from 'clsx';
import { ReactNode } from 'react';
import * as CheckboPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps{
    children: ReactNode;
    asChild?: boolean;
}

export function Checkbox( {}: CheckboxProps){
    return (
        <CheckboPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
            <CheckboPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-300' />
            </CheckboPrimitive.Indicator>
        </CheckboPrimitive.Root>
    )
}