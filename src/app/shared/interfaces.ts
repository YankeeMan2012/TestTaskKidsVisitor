export interface IEventCard {
    id: number;
    title: string;
    description: string;
    start: {
        start_times: string[];
        schedule_date: string;
    },
    point_lonlat: string,
    image_thumb: string,
    formatted_address: string;
    price: {
        adult_price: string;
        child_price: string;
    },
    place: {
        id: number;
        title: string;
    };
    age_min: number;
    age_max: number;
}




interface IImage {
    image: string;
}

interface ISchedule {
    start_times: string[];
    schedule_date: string;
}

export interface IEvent {
    id: number;
    title: string;
    description: string;
    distance: any,
    images: IImage[],
    schedule: ISchedule[],
    site: string;
    phone: string;
    mobile_phone: string;
    price: {
        adult_price: string;
        child_price: string;
    },
    age_min: number;
    age_max: number;
    point_lonlat: string;
    age_choices: string[];
    formatted_address: string;
    address: string;
    place: any;
}