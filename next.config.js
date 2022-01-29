/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://great-quotes-53i8jhpra-lmag-ruuu.vercel.app/api/quotes",
    MONGODB_URI:
      "mongodb+srv://ruben:Gf0UD4JuZwp5Wtgb@cluster0.ejlc8.mongodb.net/quotesDB?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
