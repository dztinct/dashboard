"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const popularContent = [
    {    
        id: 1,
        title: "Web Development",
        badge: "Coding",
        image: "https://github.com/maxleiter.png",
        count: 1300
    },
    {    
        id: 2,
        title: "Trending Topics in Tech",
        badge: "Tech",
        image: "https://github.com/maxleiter.png",
        count: 2500
    },
    {    
        id: 3,
        title: "The Future of AI",
        badge: "AI",
        image: "https://github.com/maxleiter.png",
        count: 3400
    },
    {    
        id: 4,
        title: "Next.js projects",
        badge: "Coding",
        image: "https://github.com/maxleiter.png",
        count: 1700
    },
    {    
        id: 5,
        title: "Image Generation with AI",
        badge: "AI",
        image: "https://github.com/maxleiter.png",
        count: 2200
    }
]

const latestTransactions = [
    {    
        id: 1,
        title: "Airtime and data",
        badge: "John Doe",
        image: "https://github.com/maxleiter.png",
        count: 1300
    },
    {    
        id: 2,
        title: "Payment for services",
        badge: "Jaden Smith",
        image: "https://github.com/maxleiter.png",
        count: 2500
    },
    {    
        id: 3,
        title: "Subscription renewal",
        badge: "Jordin Spark",
        image: "https://github.com/maxleiter.png",
        count: 3400
    },
    {    
        id: 4,
        title: "Groceries and stores",
        badge: "Britney Spears",
        image: "https://github.com/maxleiter.png",
        count: 1700
    },
    {    
        id: 5,
        title: "Pateries and Toileteries",
        badge: "Louis Vuitton",
        image: "https://github.com/maxleiter.png",
        count: 2200
    }
]
type titleType = {
    title: string
}
const CardList = ({title}: titleType) => {
    const list = title === "Popular Content" ?  popularContent : latestTransactions

  return (
    <div>
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className="flex flex-col gap-2">
            {list.map((item) => (
                <Card key={item.id} className="flex flex-row items-center justify-between gap-4 p-4">
                    <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover"/>
                    </div>
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default CardList