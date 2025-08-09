import { LucideIcon } from "lucide-react"

export interface SampleProduceProps{
    [x: string]: string | number | boolean
    id: number,
    name: string,
    farmer: string,
    location: string,
    quantity: string,
    price: string,
    rating: number,
    image: string,
    freshness: string,
    isFavorite: boolean
}

export interface SampleMessageProps{
    from: string,
    subject: string,
    message: string,
    time: string,
    unread: boolean
}

export interface NavigationItemsProps{
    id: string,
    label: string,
    icon: LucideIcon

}