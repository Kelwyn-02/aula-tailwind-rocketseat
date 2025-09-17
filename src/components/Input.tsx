import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    )
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
    return (
        <input className="dark:bg-zinc-800 flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-100 " {...props} />

    )
}
export type InputRootProps = ComponentProps<'div'>

export default function InputRoot(props: InputRootProps) {
    return (
        <div className={twMerge(
            'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:bg-zinc-50 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
            'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:focus',
            props.className,
        )
        }
            {...props}
        />
    )
}