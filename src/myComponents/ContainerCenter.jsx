import PropTypes from "prop-types";
export const ContainerCenter = (props) => {
  const { idSection, className, children } = props;
  return (
    <section
      id={idSection}
      className={`px-5 laptop:w-[80%] m-auto laptop:px-0 my-6 ${className} overflow-hidden`}
    >
      {children}
    </section>
  );
};
ContainerCenter.propTypes = {
  idSection: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
