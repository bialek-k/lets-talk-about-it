/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/mentoring',
        destination:
          'https://script.google.com/macros/s/AKfycbyxARPB5eYJFN16GgRr5MtbyPaqevFrI9ra3fz-qjRjCl7muc3qUSEZ6XFk8S27hAOd/exec',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;