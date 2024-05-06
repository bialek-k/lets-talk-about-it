const TextBorderLine = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      height="9"
      viewBox="0 0 155 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6C5.84306 6 8.49438 4.82349 11.4298 4.82349C12.4814 4.82349 13.5331 4.82349 14.5847 4.82349C17.0482 4.82349 20.8842 4.99187 23.2249 4.82349C28.8077 4.42189 34.33 4.82349 39.9397 4.82349C52.8368 4.82349 64.8261 3.77571 77.4551 3.77571C91.2184 3.77571 105.684 2.33274 118.313 3.77571C126.285 3.77571 132.686 5.10702 140.5 3.77571C144.532 3.08874 149.028 4.33274 152 3"
        stroke="#E2FF02"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default TextBorderLine;
