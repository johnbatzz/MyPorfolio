import { ExperienceDetails, ExperienceDetail } from "@/models/ExperienceDetails"
import FeatherIcon from "feather-icons-react"

interface TechnicalSkillsProps {
    technicalSkills: ExperienceDetails
}
export default function TechnicalSkills(props: TechnicalSkillsProps) {
    const { technicalSkills } = props
    return (
        <section id="tech-skills" className="py-10 md:py-16 tech-skills">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5 text-white">Technical Skills</h1>
                <p className="font-normal text-gray-200 text-xs md:text-base mb-20">{`Below are my technical skills where I'm and expert and familiar with.`}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        technicalSkills.map((item: ExperienceDetail) => (
                            <div className="bg-gray-50 px-8 py-10 rounded-md" key={item.id}>
                                <div className="w-20 py-6 flex justify-center bg-[#282828] rounded-md mb-4">
                                    <FeatherIcon icon={item.logo} />
                                </div>

                                <h4 className="font-medium text-gray-700 text-lg mb-4">{item.title}</h4>

                                <p className="font-normal text-gray-500 text-md" dangerouslySetInnerHTML={{ __html: item.description }}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}