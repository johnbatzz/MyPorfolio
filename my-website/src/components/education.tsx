import { EducationDetail, EducationDetails } from "@/models/Education"

interface EducationProps {
    education: EducationDetails
}

export default function Education(props: EducationProps) {
    const { education } = props
    return (
        <section className="py-10 md:py-16">

            <div className="container max-w-screen-xl mx-auto px-4">

                <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5 text-white">Education</h1>

                <p className="font-normal text-gray-300 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {   education.map((item: EducationDetail) => (
                        <div className="bg-gray-50 px-8 py-10 rounded-md" key={item.id}>
                            <h4 className="font-medium text-gray-700 text-lg mb-4">{item.schoolYear}</h4>
                            <p className="font-normal text-gray-500 text-md mb-4">
                                {item.summary}
                            </p>
                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">{item.schoolName} {item.address}</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}