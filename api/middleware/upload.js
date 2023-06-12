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

// use in image upload

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post('/users/:id/upload', upload.single('profileImage'), (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     if (err) {
//       res.status(500).json({ error: 'Error finding user' });
//       return;
//     }

//     user.profileImage.data = req.file.buffer;
//     user.profileImage.contentType = req.file.mimetype;

//     user.save((saveErr) => {
//       if (saveErr) {
//         res.status(500).json({ error: 'Error saving user profile image' });
//         return;
//       }

//       res.json({ message: 'Profile image uploaded successfully' });
//     });
//   });
// });