import { LogOut } from "lucide-react";

export default function Profile() {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <img src="https://github.com/kelwyn02.png" className="h-10 w-10 rounded-full" alt="" />
            <div className="flex flex-1 flex-col truncate">
                <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">Kelwyn Gonçalves</span>
                <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">kel.dev@outlook.com</span>
            </div>
            <button type="button" className="ml-auto cursor-pointer p-2 hover:text-red-700 hover:bg-red-50 rounded-md">
                <LogOut className="h-5 w-5 text-red-500" />
            </button>
        </div>
    )
}