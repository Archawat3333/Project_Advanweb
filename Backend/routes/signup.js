var expressFunction = require('express');
const router = expressFunction.Router();
const Book = require("../model/book.model");
const Author = require("../model/author.model")
const bcrypt = require('bcryptjs');




const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

    router.route('/addBook').post((req, res) => {
    Book.create(req.body)
                .then((result) => {
                    console.log("Create Book Sucess!!");
                    res.json(result)
                  })
                  .catch((err) => {
                    res.send(err)
                  })   
    });
    router.route('/addAuthor').post((req, res) => {
        Author.create(req.body)
                    .then((result) => {
                        console.log("Create Author Sucess!!");
                        res.json(result)
                      })
                      .catch((err) => {
                        res.send(err)
                      })   
        });

    router.route('/showJoinBookAndAuthor').get((req, res) => {
    Book.aggregate([{$lookup:{from:"Author",localField:"author_id",foreignField:"id",as:"BookJoinAuthor"}}])
    .then((result) => {
        console.log("Find All Books Sucess!!");
        res.json(result)
      })
      .catch((err) => {
        res.send(err)
      }) 

    });

    router.route('/signup/:id').delete((req, res) => {
        Book.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log("Delete Book Sucess!!");
            res.json(result)
          })
          .catch((err) => {
            res.send(err)
          }) 
        

    });

    router.route('/signup/:id').put((req, res) => {
        Book.findByIdAndUpdate(req.params.id,req.body)
        .then((result) => {
            console.log("Update Book Sucess!!");
            res.json(result)
          })
          .catch((err) => {
            res.send(err)
          }) 
        

    });

    router.route('/signup/:id').get((req, res) => {
        Book.findById(req.params.id)
        .then((result) => {
            console.log("FindId Book Sucess!!")
            res.json(result)
          })
          .catch((err) => {
            res.send("cant find id")
          }) 

    });



   

    
module.exports = router;
