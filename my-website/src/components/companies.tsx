import { CompanyExperineceDetail, CompanyExperineceDetails } from "@/models/CompanyExperienceDetails"

interface CompanyExperiencesProps {
    experiences: CompanyExperineceDetails
}

export default function CompanyExperiences(props: CompanyExperiencesProps) {
    const { experiences } = props
    return (
        <section id="experiences" className="py-10 md:py-16 company-exp">

            <div className="container max-w-screen-xl mx-auto px-4">

                <h1 className="font-medium text-3xl md:text-4xl mb-5 text-white">Experience</h1>

                <p className="font-normal text-gray-200 text-xs md:text-base mb-20">Below were the previous company I work with</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((item: CompanyExperineceDetail) => (
                        <div className="bg-gray-50 px-8 py-10 rounded-md" key={item.id}>
                            <h4 style={{color: item.textColor}}className="font-medium text-gray-100 text-2xl mb-4">
                                <a href={item.website} target="_blank">{item.name}</a>
                            </h4>
                            <div className="relative">
                                <h6 className="font-semibold text-gray-700 text-xl relative z-10">{item.position}</h6>
                            </div>
                            <div className="relative">
                                <h6 className="font-semibold text-gray-600 text-lg relative z-10">{item.tenure}</h6>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}