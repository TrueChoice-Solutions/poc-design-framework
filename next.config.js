module.exports = {
  images: {
    domains: ['media.istockphoto.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true
      }
    ];
  },
  reactStrictMode: true
};
