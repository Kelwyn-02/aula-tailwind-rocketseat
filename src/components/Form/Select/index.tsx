'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
    children: ReactNode
    placeholder: string
 }

export function Select({children, placeholder, ...props}: SelectProps) {
    return (
        <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:focus text-zinc-100">
                <SelectPrimitive.Value className="text-black " placeholder={placeholder}/>
                <SelectPrimitive.Icon>
                    <ChevronDown className="h-5 w-5 text-zinc-500" />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content side="bottom" position="popper" className="w-[--radix-select-trigger-width] z-10 rounded-lg border border-zinc-200 bg-white overflow-hidden animate-slide-down-fade" sideOffset={8}>
                    <SelectPrimitive.Viewport>
                        {children}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}