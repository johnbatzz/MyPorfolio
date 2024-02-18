import { ProfileInfo } from "@/models/ProfileInfo"
import Image from "next/image"

export default function ShortDesc(props: ProfileInfo) {
    const {logo, profile, name, position, description} = props
    return (
        <section className="py-10 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

                <nav className="flex items-center justify-between mb-40">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={61}
                        height={41}
                    />

                    <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
                </nav>

                <div className="text-center">
                    <div className="flex justify-center mb-16">
                        <Image
                            src={profile}
                            alt="Image"
                            width={262}
                            height={262}
                        />
                    </div>

                    <h6 className="font-medium text-white text-lg md:text-2xl uppercase mb-8">{name}</h6>

                    <h1 className="font-normal text-white text-4xl md:text-7xl leading-none mb-8">{position}</h1>

                    <p className="font-normal text-white text-md md:text-xl mb-16">{description}</p>
                </div>

            </div>

        </section>
    )
}