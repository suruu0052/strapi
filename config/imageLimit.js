module.exports = [
    {
      name: "strapi::body",
      config: {
        formLimit: "256mb",
        jsonLimit: "256mb",
        textLimit: "256mb",
        formidable: {
          maxFileSize: 250 * 1024 * 1024,
        },
      },
    },
    // ...
  ];
  