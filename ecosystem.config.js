module.exports = {
  apps: [
    {
      name: 'portofolio-app',
      script: 'npx',
      args: 'serve -s dist -p 3001',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
