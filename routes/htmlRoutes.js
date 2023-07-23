const  path = require('path');
const router = require ('express').Router();



router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});













module.exports = router;https://www.google.com/maps/uv?pb=!1s0x86d67164e5222aa3%3A0x6e5460bda00e8776!3m1!7e115!4s%2Fmaps%2Fplace%2Fbody%2Bworx%2F%4032.242374%2C-110.9365895%2C3a%2C75y%2C142.68h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sKVTY8fQSjYVIHy572FfRQA*212e0*214m2*213m1*211s0x86d67164e5222aa3%3A0x6e5460bda00e8776%3Fsa%3DX%26ved%3D2ahUKEwiooKSytJ-AAxUBIUQIHRXdAAcQpx96BAhAEAA!5sbody%20worx%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sKVTY8fQSjYVIHy572FfRQA&hl=en&sa=X&ved=2ahUKEwiooKSytJ-AAxUBIUQIHRXdAAcQpx96BAhoEA0#