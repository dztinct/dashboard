import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import React from 'react'

const SinglePage = () => {
  return (
    <div>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        {/* CONTAINER */}
        <div className='mt-4 flex flex-col xl:flex-row gap-8'>
            {/* LEFT */}
            <div className='w-full xl:w-1/3 space-y-6'>
                {/* USER BADGE CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>
                    <h1 className='text-xl font-semibold'>User Badge</h1>
                    <div className='flex gap-4 mt-4'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border border-blue-500/50 p-2'/>
                            </HoverCardTrigger>
                        <HoverCardContent>
                                <h1 className='text-bold mb-2'>Verified User</h1>
                                <p className='text-sm text-muted-forground'>This user has been verified by the admin</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Shield size={36} className='rounded-full bg-green-800/30 border border-blue-500/50 p-2'/>
                            </HoverCardTrigger>
                        <HoverCardContent>
                                <h1 className='text-bold mb-2'>Admin</h1>
                                <p className='text-sm text-muted-forground'>Admin user has access to all features and can manage users</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Candy size={36} className='rounded-full bg-yellow-500/30 border border-blue-500/50 p-2'/>
                            </HoverCardTrigger>
                        <HoverCardContent>
                                <h1 className='text-bold mb-2'>Awarded</h1>
                                <p className='text-sm text-muted-forground'>This user has been awarded for their contributions</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Citrus size={36} className='rounded-full bg-orange-500/30 border border-blue-500/50 p-2'/>
                            </HoverCardTrigger>
                        <HoverCardContent>
                                <h1 className='text-bold mb-2'>Popular</h1>
                                <p className='text-sm text-muted-forground'>This user has been popular in the community</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                {/* INFORMATION CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>
                    <h1 className='text-xl font-semibold'>User Badge</h1>
                    <div className='space-y-4 m-4'>
                        <div className='flex flex-col gap-2 mb-8'>
                            <p className='text-sm text-muted-foreground'>Profile complete</p>
                            <Progress value={67} />
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Username:</span>
                                <span>John Franklin</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Email:</span>
                                <span>johnfranklin@gmail.com</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Phone:</span>
                                <span>+1 234 5678</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Location:</span>
                                <span>New York</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className='text-sm text-muted-foreground mt-4'>Joined on 2024.01.01</p>
                    </div>
                </div>
                {/* CARD LIST CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>
                    <CardList title='Recent transactions'/>
                </div>
            </div>
            {/* RIGHT */}
            <div className='w-full xl:w-2/3 space-y-6'>
                {/* USER CARD CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>User Card</div>
                {/* CHART CONTAINER */}
                <div className='bg-primary-foreground p-4 rounded-lg'>Chart</div>
            </div>
        </div>
    </div>
  )
}

export default SinglePage