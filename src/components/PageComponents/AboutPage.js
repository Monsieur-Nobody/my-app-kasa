import Banner from "../ChildsComponents/Banner";
import AboutContent from "../ChildsComponents/AboutContent";
import imageAbout from "../../assets/ImageBannerAbout.png"

const AboutPage = () => {
  return (
    <div className="About_Page_Style">
      <Banner 
        imageSrc={imageAbout} 
        text="" 
        altText="About Banner" 
        bannerClass="about-banner"
      />
      <AboutContent />
    </div>
  );
};

export default AboutPage;
