import { ExperienceDetail, ExperienceDetails } from "@/models/ExperienceDetails"

interface PortFolioProps {
    portfolio: ExperienceDetails
}

export default function Portfolio(props: PortFolioProps) {
    const { portfolio } = props;
    return (
        <section id="portfolio" className="py-10 md:py-16 portfolio">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-10 lg:mb-0">
                        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5 text-white">Portfolio</h1>
                        <p className="font-normal text-gray-300 text-xs md:text-base">I have brought here my biggest and favorite works <br /> as a professional.</p>
                    </div>
                    <div className="space-y-24">
                        {portfolio.map((portfolio: ExperienceDetail) => (
                            <div className="flex flex-col md:flex-row space-x-6 rounded bg-gray-700 p-8" key={portfolio.id}>
                                <h1 className="hidden md:block font-normal text-gray-700 text-3xl md:text-4xl text-white">0{portfolio.id}</h1>

                                <span className="w-28 h-0.5 bg-gray-300 mt-5 hidden md:block"></span>

                                <div>
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5 text-white">{portfolio.title}</h1>

                                    <p className="font-normal text-gray-300 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: portfolio.description}}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}