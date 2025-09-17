'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {

  const { id } = useFileInput()

    return(
        <label htmlFor={id} className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg px-6 py-4 text-center dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover-text-violet-300 text-zinc-500 shadow-sm border border-zinc-300 hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500">
                <div className="group-hover:border-violet-50 group-hover:bg-violet-100 rounded-full border-6 border-zinc-50 bg-zinc-100 p-2">
                  <UploadCloud className="group-hover:text-violet-600 h-5 w-5 text-zinc-600 dark:text-zinc-500 dark:group-hover:text-violet-600" />
                </div>
                <div className="flex flex-col items-center gap-1 ">
                  <span className="text-sm group-hover:dark:text-zinc-400"><span className="font-semibold text-violet-700 dark:border-zinc-700 dark:text-violet-400">Click to upload</span> or drag and drop</span>
                  <span className="text-xs group-hover:dark:text-zinc-400">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </div>
              </label>
    )
}