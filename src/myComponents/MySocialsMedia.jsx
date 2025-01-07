import { socialMedia } from "../data/dataSocialMedia";

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
