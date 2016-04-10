var express = require('express'),
    router = express.Router(),
    multer = require('multer');


var uploader = multer({
  dest:  './public/uploads/',
})

router.post('/upload', uploader.single('file'),function(req, res) {
    res.json({size: req.file.size/1000 + " kbytes"})
});


module.exports = router;
