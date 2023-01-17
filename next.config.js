/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "mapbox.com"]
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoibm9zdGhhcyIsImEiOiJjbGN4aHV0dm4xMnBhM29zNXFreWtocDkxIn0.V5fvyg9XQ59sf6TBRo9uAA'
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  }
};
