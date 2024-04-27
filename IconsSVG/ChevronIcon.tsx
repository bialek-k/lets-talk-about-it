interface ChevronIconProps {
  className: string;
}

export default function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      width="52"
      height="46"
      viewBox="0 0 52 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_70_2688)">
        <path
          d="M20.5 20.25L26 25.75L31.5 20.25"
          stroke="#F5F5F5"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_70_2688">
          <rect
            x="0.5"
            y="0.25"
            width="51"
            height="45.5"
            rx="22.75"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
