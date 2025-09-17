import { SettingsTabs } from "@/components/SettingsTabs";
import InputRoot, * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from '@/components/Form/FileInput'
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { TextArea } from "@/components/Form/TextArea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center pb-5 border-b border-zinc-200 gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 hover:bg-violet-700 text-white " form="settings">Save</button>
          </div>
        </div>



        <form id="settings" className="mt-6 flex flex-col w-full gap-5">

          {/* Name */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="lg:grid gap-6 lg:grid-cols-2">
              <InputRoot>
                <Input.InputControl id="firstName" defaultValue="Kelwyn" />
              </InputRoot>
              <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last Name</label>
              <InputRoot>
                <Input.InputControl id="lastName" defaultValue="Gonçalves" />
              </InputRoot>
            </div>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Email */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Adress</label>
            <InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl type="email" id="email" defaultValue="kel.dev@outlook.com" />
            </InputRoot>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Photo */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="yourPhoto" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your Photo
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block dark:text-zinc-400">This will be displayed on your profile</span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Role */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
            <InputRoot>
              <Input.InputControl id="role" defaultValue="Front-End Developer" />
            </InputRoot>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Country */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
            <div>
              <Select placeholder="Select a country...">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="United States" />
              </Select>
            </div>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Timezone */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
            <div>
              <Select placeholder="Select a timezone...">
                <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
                <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
              </Select>
            </div>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Bio */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400 block">Write a short introduction</span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button type="button" className="cursor-pointer p-2 hover:text-zinc-700 hover:bg-zinc-50 rounded-md">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button type="button" className="cursor-pointer p-2 hover:text-zinc-700 hover:bg-zinc-50 rounded-md">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button type="button" className="cursor-pointer p-2 hover:text-zinc-700 hover:bg-zinc-50 rounded-md">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button type="button" className="cursor-pointer p-2 hover:text-zinc-700 hover:bg-zinc-50 rounded-md">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button type="button" className="cursor-pointer p-2 hover:text-zinc-700 hover:bg-zinc-50 rounded-md">
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                </div>
              </div>
              <TextArea id="bio" defaultValue="Write a short text about you..." />
            </div>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />


          {/* Portfolio Projects */}
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="yourPhoto" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio Projects
              <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-400 block">Share a few snippets of your work</span>
            </label>
            <FileInput.Root className="items-start gap-5">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="h-px bg-zinc-300 w-full dark:bg-zinc-700" />

          <div className="flex items-center justify-end gap-2 pt-5">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 hover:bg-violet-700 text-white">Save</button>
          </div>

        </form>
      </div>
    </>
  )
}