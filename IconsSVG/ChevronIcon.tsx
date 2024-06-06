interface ChevronIconProps {
  className: string;
}

export default function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 1.25L7 6.75L12.5 1.25" stroke="#F5F5F5" strokeWidth="2" />
    </svg>
  );
}
