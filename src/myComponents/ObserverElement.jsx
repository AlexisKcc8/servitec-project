import { InView } from "react-intersection-observer";
import PropTypes from "prop-types";

export const ObserverElement = (props) => {
  const { children, animateIn, animateOut, className } = props;
  let options = {
    threshold: 0,
  };
  return (
    <InView {...options}>
      {({ ref, inView }) => (
        <div
          ref={ref}
          className={`${className} ${inView ? animateIn : animateOut}`}
        >
          {children}
        </div>
      )}
    </InView>
  );
};

ObserverElement.propTypes = {
  children: PropTypes.node.isRequired,
  animateIn: PropTypes.string.isRequired,
  animateOut: PropTypes.string,
  className: PropTypes.string,
};
