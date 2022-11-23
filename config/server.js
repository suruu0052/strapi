module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["C7s1EhoQTxl+OdznNwLUXQ==","2jJNooaheM1bRXak5b67gw=="],
  },
});
