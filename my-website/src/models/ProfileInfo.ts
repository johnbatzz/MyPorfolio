import { StaticImageData } from "next/image";

export interface ProfileInfo {
    name: string;
    logo: StaticImageData;
    profile: StaticImageData;
    position: string;
    description: string;
}