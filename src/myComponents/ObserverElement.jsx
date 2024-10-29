import { InView } from "react-intersection-observer";

export const ObserverElement = (props) => {
  const { children, animateIn, animateOut } = props;
  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref} className={`${inView ? animateIn : animateOut}`}>
          {children}
        </div>
      )}
    </InView>
  );
};
