export default function GSAPIcon({ width = 18, height = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      {/* Dark green background */}
      <rect width="100" height="100" fill="#1a5f3f" rx="8" />
      
      {/* 2x2 grid of rounded squares */}
      {/* Top-left square */}
      <rect x="8" y="8" width="40" height="40" rx="10" fill="#4cff00" />
      
      {/* Top-right square */}
      <rect x="52" y="8" width="40" height="40" rx="10" fill="#4cff00" />
      
      {/* Bottom-left square */}
      <rect x="8" y="52" width="40" height="40" rx="10" fill="#4cff00" />
      
      {/* Bottom-right square */}
      <rect x="52" y="52" width="40" height="40" rx="10" fill="#4cff00" />
    </svg>
  );
}