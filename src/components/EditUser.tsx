"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from 'react-hook-form'

import { Form } from "./ui/form"
import { Input } from './ui/input'

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "./ui/button"

const formSchema = z.object({
    username: z.string().min(2, {message: "Username must be at least 2 characters!"}).max(5),
    email: z.string().email({message: "Invalid email address"}),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["admin", "user"])
})

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values)
}


const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "John Doe",
            email: "detunjinov@gmail.com",
            phone: "+1 234 5678",
            location: "Lagos, Nigeria",
            role: "admin",
        },
  })
  return (
    <div>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Edit User</SheetTitle>
            <SheetDescription asChild>
                <FormProvider {...form}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input 
                                                // placeholder="Username" we are taking off the placeholder because we have a default value because this is an edit form page
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public username
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>       
                                )
                            }/>
                            
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input 
                                                // placeholder="Username" we are taking off the placeholder because we have a default value because this is an edit form page
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your email
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>        
                                )
                            }/>

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input 
                                                // placeholder="Username" we are taking off the placeholder because we have a default value because this is an edit form page
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your phone number
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>    
                                )   
                            }/>

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input 
                                                // placeholder="Username" we are taking off the placeholder because we have a default value because this is an edit form page
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is the public location
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>    
                                )   
                            }/>

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="admni">Admin</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                            </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Only verified users can be admin
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>    
                                )   
                            }/>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </FormProvider>
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </div>
  )
}

export default EditUser