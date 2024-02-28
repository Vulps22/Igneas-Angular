export interface ShortProfile {
    user_id: Number;
    display_name: String;
    age: Number;
    image: string;
    show_location: boolean;
    distance: String;
}

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

export interface Health {
    user_id: number; 
    show_hiv_status: boolean;
    hiv_status: string;
    last_test: string;
    on_prep: boolean | null;
  }
  

  export interface Image {
    id: number;
    filename: string; 
  }