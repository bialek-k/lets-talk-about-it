const TextBorderLine = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      height="11"
      viewBox="0 0 237 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8C7.43747 8 11.5757 6.82349 16.1573 6.82349C17.7987 6.82349 19.4401 6.82349 21.0815 6.82349C24.9266 6.82349 30.9139 6.99187 34.5673 6.82349C43.281 6.42189 51.9002 6.82349 60.6559 6.82349C80.7858 6.82349 99.4989 5.77571 119.21 5.77571C140.692 5.77571 163.271 4.33274 182.982 5.77571C195.425 5.77571 203.832 5.66405 216.028 4.33274C222.321 3.64577 229.362 4.33274 234 3"
        stroke="#E2FF02"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TextBorderLine;
