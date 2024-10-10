import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("uploads/images"));
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

export const uploadMiddleware = multer({ storage: storage });
