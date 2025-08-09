import { Cloud, LucideIcon, MessageSquare, TrendingUp, Wheat } from "lucide-react";
import { SampleProduceProps, SampleMessageProps, NavigationItemsProps } from "@/interfaces";

export const sampleProduce: SampleProduceProps[] = [
    { 
      id: 1,
      name: 'Organic Tomatoes', 
      farmer: 'Green Valley Farm', 
      location: 'California', 
      quantity: '500 kg available',
      price: '$2.50/kg',
      rating: 4.8,
      image: '🍅',
      freshness: 'Harvested today',
      isFavorite: true
    },
    { 
      id: 2,
      name: 'Sweet Corn', 
      farmer: 'Sunny Acres', 
      location: 'Iowa', 
      quantity: '1200 kg available',
      price: '$1.80/kg',
      rating: 4.6,
      image: '🌽',
      freshness: 'Harvested 2 days ago',
      isFavorite: false
    },
    { 
      id: 3,
      name: 'Baby Carrots', 
      farmer: 'Mountain View Farm', 
      location: 'Oregon', 
      quantity: '300 kg available',
      price: '$3.20/kg',
      rating: 4.9,
      image: '🥕',
      freshness: 'Harvested yesterday',
      isFavorite: true
    },
    { 
      id: 4,
      name: 'Red Potatoes', 
      farmer: 'Prairie Fields', 
      location: 'Idaho', 
      quantity: '800 kg available',
      price: '$1.20/kg',
      rating: 4.5,
      image: '🥔',
      freshness: 'Harvested 3 days ago',
      isFavorite: false
    }
  ];


  export const sampleMessages: SampleMessageProps[] = [
    { 
      from: 'Green Valley Farm', 
      subject: 'Bulk discount available',
      message: 'We can offer 15% discount for orders over 200kg of organic tomatoes.', 
      time: '1 hour ago',
      unread: true
    },
    { 
      from: 'Mountain View Farm', 
      subject: 'New harvest ready',
      message: 'Fresh batch of baby carrots just harvested. Premium quality available.', 
      time: '3 hours ago',
      unread: true
    },
    { 
      from: 'Sunny Acres', 
      subject: 'Re: Sweet corn inquiry',
      message: 'Yes, we can fulfill your weekly order of 100kg sweet corn. When do you need delivery?', 
      time: '1 day ago',
      unread: false
    }
  ];

  export const navigationItems: NavigationItemsProps[] = [
    { id: 'produce', label: 'My Produce', icon: Wheat },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'market', label: 'Market Prices', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];