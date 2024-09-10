const Banner = ({
  imageSrc,
  text = "",
  altText = "Banner Image",
  bannerClass,
}) => {
  return (
    <div className={`banner ${bannerClass}`}>
      <img src={imageSrc} alt={altText} className="banner-image" />
      {text && <div className="banner-text">{text}</div>}
    </div>
  );
};

export default Banner;
