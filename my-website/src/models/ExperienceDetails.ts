import { StaticImageData } from "next/image";


export interface ExperienceDetail {
    id: number;
    logo: string;
    title: string;
    description: string;
}

export type ExperienceDetails = ExperienceDetail[]