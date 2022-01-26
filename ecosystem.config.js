module.exports = {
  apps: [
    {
      script: 'yarn start',
      name: 'polls-backend',
      watch: false,
    },
    {
      script: 'cd client && yarn start',
      name: 'polls-client',
      watch: false,
    },
  ],
};
