
import Accordion from "../components/Accodrion"
import AutoPlayCarousel from "../components/AutoPlayCarousel"
import BgVideo from "../components/BgVideo"
import ContentBlock from "../components/ContentBlock"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Process from "../components/Process"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"
import Testimonials_2 from "../components/Testimonials_2"



const Home = () => {
  return (
    <>
      <Hero/>
      <BgVideo/>
      <AutoPlayCarousel/>
      <Services/>
      <ContentBlock/>
      <Testimonial/>
      <Process/>
      <Pricing/>
      <Accordion/>
      <Testimonials_2/>
    </>
  )
}

export default Home