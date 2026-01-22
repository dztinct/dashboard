"use client"

import { LogOut, Moon, Sun, Settings, User, Sidebar } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes" 
import { SidebarTrigger, useSidebar } from './ui/sidebar'


const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const { toggleSidebar } = useSidebar() //This works with line 27 to manually toggle the sidebar button (<SidebarTrigger/> is used in this case)
  return (
    <div>
      <nav className='p-4 flex items-center justify-between'>
        <SidebarTrigger/>
        {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}
        <div className='flex items-center gap-4'>
        <Link href={"/"}>Dashboard</Link>
        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* USER MENU */}
        <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="outline"> */}
              <Avatar className='w-[1.6rem] h-[1.6rem]'>
                <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* </Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className='w-[1.2rem] h-[1.2rem] mr-2'/>Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className='w-[1.2rem] h-[1.2rem] mr-2'/>Settings</DropdownMenuItem>
                <DropdownMenuItem variant='destructive'><LogOut className='w-[1.2rem] h-[1.2rem] mr-2'/>Logout</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar