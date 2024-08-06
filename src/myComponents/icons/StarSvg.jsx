export const StarSvg = (props) => {
  const { colorStroke = "#fff" } = props;
  return (
    <svg
      className="w-[22px] h-[22px]"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flying star icon"
      viewBox="0 0 19 18"
    >
      <title>Flying star icon</title>
      <path
        d="M1.5 17L8.5 10M1.5 12L5 8.5M6.5 17L10 13.5M16 5.5L17.5 8.5L14 8L12 10L11.5 7L8.5 5.5L11.5 4L12 1L14 3L17.5 2.5L16 5.5Z"
        stroke={colorStroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
