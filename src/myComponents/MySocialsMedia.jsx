import { socialMedia } from "../data/dataSocialMedia";
import PropTypes from "prop-types";
export const MySocialsMedia = (props) => {
  const { classBoxMain, classLinksItem, classItemImg } = props;
  return (
    <div className={`flex gap-4 ${classBoxMain}`}>
      {socialMedia.map((icon) => (
        <a
          className={` ${classLinksItem}`}
          href={icon.url}
          key={icon.name}
          target="_blank"
        >
          <img
            className={` ${classItemImg}`}
            src={icon.icon}
            alt={icon.altTitle}
          />
        </a>
      ))}
    </div>
  );
};
MySocialsMedia.propTypes = {
  classBoxMain: PropTypes.string,
  classLinksItem: PropTypes.string,
  classItemImg: PropTypes.string,
};
