export default function ElementorIcon({ width = 15, height = 15, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 718.586"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient
          id="elementor-gradient"
          gradientUnits="userSpaceOnUse"
          x1="-12.6614"
          y1="755.645"
          x2="-13.6614"
          y2="756.645"
          gradientTransform="matrix(595.2751 0 0 595.2777 8131.8652 -449695.9063)"
        >
          <stop offset="0" style={{ stopColor: "#ED345E" }} />
          <stop offset="1" style={{ stopColor: "#382C74" }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#elementor-gradient)"
        d="M565.516,123.305H29.764C13.607,123.305,0,136.911,0,153.069v535.753 c0,16.156,13.606,29.764,29.764,29.764h535.752c16.158,0,29.764-13.607,29.764-29.764V153.069 C595.28,136.911,581.674,123.305,565.516,123.305L565.516,123.305z M218.553,552.757h-52.725V289.133h52.725V552.757z M430.302,552.757H271.278v-52.725h159.024V552.757z M430.302,447.308H271.278v-52.726h159.024V447.308z M430.302,341.858H271.278 v-52.725h159.024V341.858z"
      />
    </svg>
  );
}