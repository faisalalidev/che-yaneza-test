/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  MONGO_SRV:
      "mongodb+srv://dbAmcpa:Aa0312701%21%40%23@amcpa.89sa9.mongodb.net/dbAmcpa?retryWrites=true&w=majority",
  JWT_SECRET: "fsdsdfsfscddsfsf",
  CLOUDINARY_URL: "",
  STRIPE_SECRET_KEY: "",
  NO_REPLY_EMAIL: "546d908839cdb9",
  NO_REPLY_PASS: "fc011f3d626030",
  SMTP_SERVER: "smtp.mailtrap.io",
  SMTP_PORT: 2525,
}

module.exports = {nextConfig,env}
