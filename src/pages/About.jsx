
import AboutService from "../components/AboutService";
import ContentBlog from "../components/ContentBlog";
import Testimonials_2 from "../components/Testimonials_2";
import AboutHero from './../components/AboutHero';
import Accordion from './../components/Accodrion';


const About = () => {
  return (
    <>
      <AboutHero/>
      <AboutService/>
      <ContentBlog/>
      <Accordion/>
      <Testimonials_2/>
    </>
  );
 };

export default About;
