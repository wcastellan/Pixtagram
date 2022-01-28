const router = require('express').Router();
const Upload = require('../../models/Upload');
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');

// post request
router.post('/', upload.single('image'), async (req, res) => {
    try {
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path)
        // create new upload
        console.log(result)
        
        let upload = new Upload({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id
        });
        // save upload
        await upload.save();
        res.json(upload);
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        let upload = await Upload.findOne({
            where: {
                id: req.params.id
            }
        });

        res.json(upload);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // find upload by id
        let upload = await Upload.findById(req.params.id);
        // delete image from cloudinary
        await cloudinary.uploader.destroy(upload.cloudinary_id);
        res.json(upload);
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', upload.single('image'), async(req, res) => {
    try {
        let upload = await Upload.findById(req.params.id);
        // delete image from cloudinary
        await cloudinary.uploader.destroy(upload.cloudinary_id);
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            name: req.body.name || upload.name,
            avatar: result.secure_url || upload.avatar,
            cloudinary_id: result.public_id || upload.cloudinary_id
        };
        upload = await Upload.findByIdAndUpdate(req.params.id, data, {
            new: true
        });
        res.json(upload);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;