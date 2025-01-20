import PropTypes from "prop-types";

export const PictureImage = ({
  alt,
  srcJpg,
  srcWebp,
  srcAvif,
  classNamePicture,
  classNameImages,
}) => {
  return (
    <picture className={classNamePicture}>
      {/* Imagen para pantallas grandes (desktops) */}
      <source
        media="(min-width: 1200px)"
        srcSet={srcAvif.large}
        type="image/avif"
      />
      <source
        media="(min-width: 1200px)"
        srcSet={srcWebp.large}
        type="image/webp"
      />

      {/* Imagen para tablets */}
      <source
        media="(min-width: 768px)"
        srcSet={srcAvif.medium}
        type="image/avif"
      />
      <source
        media="(min-width: 768px)"
        srcSet={srcWebp.medium}
        type="image/webp"
      />

      {/* Imagen para móviles (primera en cargarse) */}
      <source srcSet={srcAvif.small} type="image/avif" />
      <source srcSet={srcWebp.small} type="image/webp" />

      {/* Fallback a JPG si no hay soporte para AVIF o WEBP */}
      <img
        src={srcJpg.large} // Solo carga la imagen si está en vista
        alt={alt}
        loading="lazy"
        className={`${classNameImages} w-full h-full object-cover`}
      />
    </picture>
  );
};
PictureImage.propTypes = {
  alt: PropTypes.string.isRequired,
  srcJpg: PropTypes.shape({
    large: PropTypes.string.isRequired,
  }).isRequired,
  srcWebp: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,
  srcAvif: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,

  classNamePicture: PropTypes.string,
  classNameImages: PropTypes.string,
};
