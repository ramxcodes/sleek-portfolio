export default function FastAPILogo({ width = 24, height = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 154 154"
      width={width}
      height={height}
      className={className}
    >
      <circle cx="77" cy="77" fill="#05998b" r="77" />
      <path
        d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
        fill="#fff"
      />
    </svg>
  );
}