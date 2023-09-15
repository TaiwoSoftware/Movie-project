/* eslint-disable react/prop-types */
const Col = ({
  src,
  alt,
  headerOne,
  special,
  logo,
  tomatoes,
  type,
  adventure,
}) => {
  return (
    <div className="col col-md-4">
      <img src={src} alt={alt} />
      <h3 className={special}>{headerOne}</h3>
      <div className="inner-logo">
        <img src={logo} alt="copied-logo" className="logo-copy" />
        <img src={tomatoes} alt="tomotoes" className="tomotoes-copy" />
      </div>
      <p className={adventure}>{type}</p>
    </div>
  );
};

export default Col;
