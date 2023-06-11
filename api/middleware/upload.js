const util = require("util");
const multer = require("multer");
const path = require('path');
const maxSize = 2 * 1024 * 1024;

const uploadPathFolder = path.dirname(require.main.filename);

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(uploadPathFolder)
    cb(null, uploadPathFolder + "\\uploads\\");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;