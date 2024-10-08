const LocationIcon = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.342 0C5.52598 0 0 5.52598 0 12.342C0 19.158 12.342 32.442 12.342 32.442C12.342 32.442 24.684 19.158 24.684 12.342C24.684 5.52598 19.158 0 12.342 0ZM12.342 16.64C9.64098 16.64 7.45203 14.451 7.45203 11.75C7.45203 9.049 9.64098 6.85999 12.342 6.85999C15.043 6.85999 17.232 9.049 17.232 11.75C17.232 14.451 15.043 16.64 12.342 16.64Z"
        fill="#0C0C0C"
      />
    </svg>
  );
};

export default LocationIcon;
