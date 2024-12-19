const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/ppmc', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/html/admin.html'));
})

module.exports = router;