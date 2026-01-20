export default function QdrantLogo({ width = 24, height = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 346.42 400"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <style>{`
          .qdrant-dark { fill: #9e0d38; }
          .qdrant-medium { fill: #dc244c; }
          .qdrant-light { fill: #ff516b; }
        `}</style>
      </defs>
      <g>
        <g>
          <g>
            <polygon
              className="qdrant-medium"
              points="173.21 0 0 100 0 300 173.21 400 238.16 362.5 238.16 287.5 173.21 325 64.96 262.5 64.96 137.5 173.21 75 281.46 137.5 281.46 387.5 346.42 350 346.42 100 173.21 0"
            />
            <polygon
              className="qdrant-medium"
              points="108.26 162.5 108.26 237.5 173.21 275 238.16 237.5 238.16 162.5 173.21 125 108.26 162.5"
            />
          </g>
          <g>
            <polygon
              className="qdrant-dark"
              points="238.16 287.5 238.16 362.5 173.21 400 173.21 325 238.16 287.5"
            />
            <polygon
              className="qdrant-dark"
              points="346.42 100 346.42 350 281.46 387.5 281.46 137.5 346.42 100"
            />
            <polygon
              className="qdrant-light"
              points="346.42 100 281.46 137.5 173.21 75 64.96 137.5 0 100 173.21 0 346.42 100"
            />
            <polygon
              className="qdrant-medium"
              points="173.21 325 173.21 400 0 300 0 100 64.96 137.5 64.96 262.5 173.21 325"
            />
            <polygon
              className="qdrant-light"
              points="238.16 162.5 173.21 200 108.26 162.5 173.21 125 238.16 162.5"
            />
            <polygon
              className="qdrant-medium"
              points="173.21 200 173.21 275 108.26 237.5 108.26 162.5 173.21 200"
            />
            <polygon
              className="qdrant-dark"
              points="238.16 162.5 238.16 237.5 173.21 275 173.21 200 238.16 162.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}