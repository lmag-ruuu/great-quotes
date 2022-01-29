/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3000/api/quotes",
    MONGODB_URI:
      "mongodb+srv://ruben:Gf0UD4JuZwp5Wtgb@cluster0.ejlc8.mongodb.net/quotesDB?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
