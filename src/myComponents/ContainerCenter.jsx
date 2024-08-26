export const ContainerCenter = (props) => {
  const { idSection, className, children } = props;
  return (
    <section
      id={idSection}
      className={`px-5 laptop:w-[80%] m-auto laptop:px-0 my-6 ${className}`}
    >
      {children}
    </section>
  );
};
