module.exports = {
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "storage.googleapis.com",
          port: "",
          pathname: "/store-dandy-music-com/**",
        },
      ],
    },
  },
};
