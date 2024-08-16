import ImageBanner from "../ChildsComponents/ImageBanner.js";
import TitleBanner from "../ChildsComponents/TitleBanner";
import imageSrc from "../../assets/ImageBanner.png";

const BannerHome = () => {
  return (
    <div className="Banner">
      <ImageBanner src={imageSrc} alt="Home banner" />
      <TitleBanner title="Chez vous, partout et ailleurs" />
    </div>
  );
};

export default BannerHome;