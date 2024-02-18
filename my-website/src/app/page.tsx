import logo from "@/assets/image/navbar-logo.png"
import profile from "@/assets/image/home-img.png"
import ShortDesc from "@/components/shor-dest"
import ExperienceDetails from "@/assets/json/experiences.json"
import PortfolioData from "@/assets/json/portfolio.json"
import EducationData from "@/assets/json/eduction.json"
import CompanyData from "@/assets/json/companies.json"
import TechnicalSkillsData from "@/assets/json/technical-skills.json"
import Experiences from "@/components/experiences"
import Portfolio from "@/components/portfolio"
import Education from "@/components/education"
import CompanyExperiences from "@/components/companies"
import Footer from "@/components/footer"
import TechnicalSkills from "@/components/technical-skills"
import { Nav } from "@/components/nav/navigation"
export default function Home() {
  return (
    <main id="top">
      <Nav logo={logo} />
      <ShortDesc 
        logo={logo}
        profile={profile}
        name='John Andrew Batulan'
        position="Senior Software Engineer"
        description="I have a passion for software. I enjoy creating tools and applications that solve problems and make life easier for people."
      />
      <hr/>
      <Experiences experienceDetails={ExperienceDetails} />
      <hr/>
      {/* <TechnicalSkills technicalSkills={TechnicalSkillsData} /> */}
      <hr />
      <Portfolio portfolio={PortfolioData} />
      <hr />
      <CompanyExperiences experiences={CompanyData} />
      <hr/>
      <Education education={EducationData}/>
      <hr/>
      <Footer/>
    </main>
  )
}
