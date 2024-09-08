import Banner from "../ChildsComponents/Banner";
import imageHome from "../../assets/ImageBanner.png";
import Gallery from "../ChildsComponents/Gallery";

const HomePage = () => {
  return (
    <div className="Home_Page_Style">
      <Banner 
        imageSrc={imageHome} 
        text="Chez vous, partout et ailleurs" 
        altText="Home Banner" 
        bannerClass="home-banner"
      />
      <Gallery />
    </div>
  );
};

export default HomePage;
