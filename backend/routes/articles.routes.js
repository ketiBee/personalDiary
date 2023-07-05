7
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Article = require('../models/articles.models');
const auth = require('../middleware/auth');


//dodavanje slike uz post

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../public/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage});

//dodaj novi post
router.post('/postArticle', auth, upload.single("articleIMG"), (request, response) => {
    
   
    const postedArticle = new Article({
        title:request.body.title,
        article:request.body.article,
        articleIMG:request.file.originalname,
        postedBy:request.user
        
    })
    
    postedArticle.save()
    .then(data => {
        response.json(data);
    })
    .catch(error => {
        response.json(error);
    })
})

//dohvati sve postove koje je objavio odredeni user
router.get('/article', auth, (req, res) => {
    Article.find({postedBy:req.user._id})  
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: '+err))
});

//dohvati post prema id-u
router.get('/:id', auth, (req, res) => {
    Article.findById(req.params.id)
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: ' +err))
});


//dohvati post prema id-u i azuriraj 
router.put('/update/:id', auth, upload.single("articleIMG"), (req,res) => {
    Article.findById(req.params.id)
        .then(articles => {
            articles.title = req.body.title;
            articles.article = req.body.article;
            articles.articleIMG = req.file.originalname;
            articles.postedBy=req.user;
            

            articles
                .save()
                .then(() => res.json("Post is updated"))
                .catch(err => res.status(400).json('Error: ' +err))
        })
        .catch(err => res.status(400).json('Error: ' +err))
});


//dohvati post prema id-u i izbrisi
router.delete('/:id', auth, (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json("Post is deleted"))
        .catch(err => res.status(400).json('Error: ' +err))
});



module.exports = router;