module.exports = {
    load: {
      before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
      after: ['parser', 'router'],
    },
    settings: {
        cors: {
          enabled: true,
            // origin: ('CORS ORIGIN', 'http://localhost:1337/api/tests', 'http://localhost:1337/api/').split(","),
          origin:["*"]
        },
      },
  };
  