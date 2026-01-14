import path from "path";  // for handling file paths and extensions
import express from "express";
import multer from "multer";  // for handling file uploads

const router = express.Router(); // new express router instance


// telling multer where and how to save the uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        // extension name
        const extname = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extname}`);
    },
});

// allow only valid images to be accepted
const fileFilter = (req, file, cb) => {
    const filetypes = /jpe?g|png|webp/;    // .jpg, .jpeg, .png, .webp
    const mimetypes = /image\/jpe?g|image\/png|image\/webp/;  // MIME types (the content type the browser sends

    const extname = path.extname(file.originalname).toLowerCase();
    const mimetype = file.mimetype;

    if (filetypes.test(extname) && mimetypes.test(mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Images only"), false);
    }
};

// create an instance of multer with the storage and filter ruklkes we just defined
const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");  // expecting a single file with the field name "image"

router.post("/", (req, res) => {
    uploadSingleImage(req, res, (err) => {
        if (err) {
            res.status(400).send({ message: err.message });
        } else if (req.file) {
            res.status(200).send({
                message: "Image uploaded successfully",
                image: `/${req.file.path}`,
            });
        } else {
            res.status(400).send({ message: "No image file provided" });
        }
    });
    // res.send("hello duniya")
});

export default router;