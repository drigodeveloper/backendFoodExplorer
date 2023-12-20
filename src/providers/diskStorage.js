const fs = require("fs");
const path = require("path");

const upload_config = require("../config/upload")

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(upload_config.TMP_FOLDER, file),
            path.resolve(upload_config.UPLOAD_FOLDER, file)

        );

        return file;
    }

    async deleteFile(file) {
        const filePath = path.resolve(upload_config.UPLOAD_FOLDER, file);

        try {
            await fs.promises.stat(filePath)
        }catch{
            return
        }
        await fs.promises.unlink(filePath);
    }
};

module.exports = DiskStorage;