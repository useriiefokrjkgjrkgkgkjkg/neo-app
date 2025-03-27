/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ADMIN_BOT_TOKEN: process.env.ADMIN_BOT_TOKEN,
    ADMIN_CHAT_ID: process.env.ADMIN_CHAT_ID,
  },
  // Добавляем поддержку Telegram Web App
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 