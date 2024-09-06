/* eslint-disable no-unused-vars */
import AOS from 'aos';
const BgVideo = () => {
  return (
    <div data-aos="fade-up" className="container px-[20px] md:px-0">
      <iframe
        className="w-full h-[202px] md:h-screen rounded-[30px]"
        src="https://www.youtube.com/embed/QbFT7EnofZw?si=qBIivp5bKE7vFkQw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BgVideo;
