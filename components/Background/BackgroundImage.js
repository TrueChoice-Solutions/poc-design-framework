// dependencies
import Image from 'next/image';
// local files

/**
 * @description - returns a background Image
 * @param {jsx} props.children - nested jsx
 * @param {string} props.imageSrc - Image src
 * @return {jsx} - the Background Image to render
 */
const BackgroundImage = ({ children, imageSrc }) => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Image
          src={imageSrc}
          className="img-fluid shadow-4"
          alt="Landscape pic"
          layout="fill"
        />
      </div>
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
