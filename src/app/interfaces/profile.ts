import { Image } from "./image";
import { Health } from "./health";
export interface Profile {
    user_id: number;
    display_name: string;
    sexuality: string;
    bio: string;
    height: number;
    weight: number;
    body_type: string;
    position: string;
    dominance: string;
    ethnicity: string;
    relationship_status: string;
    looking_for: string;
    gender: string;
    pronouns: string;
    show_location: boolean;
    show_age: boolean;
    age: number | null;
    primary_image: string;
    images: Image[];
    health: Health;
    distance: string;
}