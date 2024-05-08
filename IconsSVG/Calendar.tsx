const Calendar = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6667 2.46154H22.1667V1.23077C22.1667 0.904349 22.0438 0.591298 21.825 0.360484C21.6062 0.12967 21.3094 0 21 0C20.6906 0 20.3938 0.12967 20.175 0.360484C19.9562 0.591298 19.8333 0.904349 19.8333 1.23077V2.46154H8.16667V1.23077C8.16667 0.904349 8.04375 0.591298 7.82496 0.360484C7.60616 0.12967 7.30942 0 7 0C6.69058 0 6.39383 0.12967 6.17504 0.360484C5.95625 0.591298 5.83333 0.904349 5.83333 1.23077V2.46154H2.33333C1.71449 2.46154 1.121 2.72088 0.683417 3.18251C0.245833 3.64413 0 4.27024 0 4.92308V29.5385C0 30.1913 0.245833 30.8174 0.683417 31.279C1.121 31.7407 1.71449 32 2.33333 32H25.6667C26.2855 32 26.879 31.7407 27.3166 31.279C27.7542 30.8174 28 30.1913 28 29.5385V4.92308C28 4.27024 27.7542 3.64413 27.3166 3.18251C26.879 2.72088 26.2855 2.46154 25.6667 2.46154ZM11.6667 25.8462C11.6667 26.1726 11.5437 26.4856 11.325 26.7164C11.1062 26.9473 10.8094 27.0769 10.5 27.0769C10.1906 27.0769 9.89383 26.9473 9.67504 26.7164C9.45625 26.4856 9.33333 26.1726 9.33333 25.8462V17.9908L8.68875 18.3323C8.41182 18.4784 8.09123 18.5024 7.7975 18.3991C7.50377 18.2958 7.26096 18.0737 7.1225 17.7815C6.98403 17.4894 6.96125 17.1512 7.05916 16.8413C7.15707 16.5315 7.36765 16.2753 7.64458 16.1292L9.97792 14.8985C10.1559 14.8045 10.3536 14.7602 10.5524 14.7696C10.7511 14.779 10.9443 14.8419 11.1135 14.9523C11.2828 15.0627 11.4224 15.2169 11.5193 15.4003C11.6161 15.5836 11.6668 15.7901 11.6667 16V25.8462ZM19.8333 24.6154C20.1428 24.6154 20.4395 24.7451 20.6583 24.9759C20.8771 25.2067 21 25.5197 21 25.8462C21 26.1726 20.8771 26.4856 20.6583 26.7164C20.4395 26.9473 20.1428 27.0769 19.8333 27.0769H15.1667C14.95 27.0769 14.7376 27.0133 14.5533 26.8931C14.369 26.7729 14.2201 26.601 14.1232 26.3966C14.0263 26.1921 13.9853 25.9633 14.0047 25.7356C14.0242 25.508 14.1033 25.2905 14.2333 25.1077L18.4304 19.2046C18.5259 19.0705 18.5944 18.9173 18.6317 18.7543C18.669 18.5913 18.6743 18.422 18.6474 18.2567C18.6204 18.0915 18.5617 17.9337 18.4749 17.7933C18.3881 17.6528 18.275 17.5325 18.1426 17.4398C18.0101 17.3471 17.8611 17.284 17.7047 17.2542C17.5482 17.2244 17.3877 17.2287 17.2329 17.2668C17.0781 17.3048 16.9323 17.3758 16.8044 17.4755C16.6766 17.5751 16.5694 17.7012 16.4894 17.8462C16.415 17.9906 16.314 18.1179 16.1923 18.2204C16.0706 18.323 15.9306 18.3988 15.7807 18.4434C15.6307 18.488 15.4738 18.5005 15.3192 18.4801C15.1646 18.4597 15.0155 18.4068 14.8806 18.3246C14.7457 18.2424 14.6277 18.1325 14.5337 18.0014C14.4397 17.8704 14.3716 17.7208 14.3333 17.5615C14.295 17.4022 14.2873 17.2364 14.3107 17.0739C14.3341 16.9114 14.3881 16.7555 14.4696 16.6154C14.855 15.9118 15.4496 15.362 16.1613 15.0512C16.873 14.7404 17.6619 14.686 18.406 14.8963C19.15 15.1066 19.8074 15.57 20.2764 16.2146C20.7454 16.8592 20.9997 17.649 21 18.4615C21.0025 19.2642 20.7544 20.0454 20.2942 20.6846L17.5 24.6154H19.8333ZM2.33333 9.84615V4.92308H5.83333V6.15385C5.83333 6.48027 5.95625 6.79332 6.17504 7.02413C6.39383 7.25495 6.69058 7.38462 7 7.38462C7.30942 7.38462 7.60616 7.25495 7.82496 7.02413C8.04375 6.79332 8.16667 6.48027 8.16667 6.15385V4.92308H19.8333V6.15385C19.8333 6.48027 19.9562 6.79332 20.175 7.02413C20.3938 7.25495 20.6906 7.38462 21 7.38462C21.3094 7.38462 21.6062 7.25495 21.825 7.02413C22.0438 6.79332 22.1667 6.48027 22.1667 6.15385V4.92308H25.6667V9.84615H2.33333Z"
        fill="#0C0C0C"
      />
    </svg>
  );
};

export default Calendar;
