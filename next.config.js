/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com']
    },

    async serverMiddleware() {
        this.addMiddleware({
            path: '/api/google-drive',
            handler: createProxyMiddleware({
                target: 'https://drive.google.com',
                changeOrigin: true,
            }),
        });
    },
}

module.exports = nextConfig
