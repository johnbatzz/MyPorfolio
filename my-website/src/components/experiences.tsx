import { ExperienceDetail, ExperienceDetails } from "@/models/ExperienceDetails";
import FeatherIcon from "feather-icons-react";

interface ExperiencesProps {
    experienceDetails: ExperienceDetails
}

export default function Experiences(props: ExperiencesProps) {

    const { experienceDetails } = props;
    return (
        <section id="overview" className="py-10 md:py-16 experiences">

            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5 text-white">Overview</h1>
                <p className="font-normal text-gray-200 text-xs md:text-base mb-20">Below were my overview as Software Engineer for over 9 years of experiences.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        experienceDetails.map((item: ExperienceDetail) => (
                            <div className="bg-gray-50 px-8 py-10 rounded-md" key={item.id}>
                                <div className="w-20 py-6 flex justify-center bg-[#282828] rounded-md mb-4">
                                    <FeatherIcon icon={item.logo} />
                                </div>

                                <h4 className="font-medium text-gray-700 text-lg mb-4">{item.title}</h4>

                                <p className="font-normal text-gray-500 text-md">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}