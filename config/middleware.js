module.exports = {
  //...
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        // https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html
        maxFileSize: 4 * 1024 * 1024 * 1024 // 3 GB. Defaults to 200 MB.
      }
    }
  }
}
