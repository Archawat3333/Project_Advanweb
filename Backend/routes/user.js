var expressFunction = require('express');
const router = expressFunction.Router();
const User = require("../model/user.model");
var expressApp = expressFunction();


const bodyParser = require("body-parser");
const multer = require("multer");


expressApp.use(bodyParser.json());


router.route('/getCountMember').get((req, res) => {
  User.countDocuments()
.then((count) => {
console.log("Counted all records in Member:", count);
res.json({ count }); // Send the count as JSON response
})
.catch((err) => {
res.status(500).send(err); // Sending a status code and the error message
});

  });


    router.route('/testGet').get((req, res) => {
        User.find()
      .then((result) => {
          console.log("Find All Users Sucess !");
          res.json(result)
        })
        .catch((err) => {
          res.send(err)
        }) 
  
      });

      router.route('/addUser').post((req, res) => { //อันนี้เอาไว้ใช้สมัครสมาชิก ยังไม่ได้ทำเข้ารหัส + token
        User.create(req.body)
                    .then((result) => {
                        console.log("Create User Sucess!!");
                        res.json(result)
                      })
                      .catch((err) => {
                        res.send(err)
                      })   
        });

        router.route('/deleteUser/:id').delete((req, res) => {
            User.findByIdAndDelete(req.params.id)
          .then((result) => {
              console.log("Delete User Sucess!!");
              res.json(result)
            })
            .catch((err) => {
              res.send(err)
            }) 
          
  
      });

      router.route('/editUser/:id').put((req, res) => {
        User.findByIdAndUpdate(req.params.id,req.body)
        .then((result) => {
            console.log("Update User Sucess!!");
            res.json(result)
          })
          .catch((err) => {
            res.send(err)
          }) 
        

    });

    router.route('/editPassword/:id').put((req, res) => {
        User.findByIdAndUpdate(req.params.id,req.body)
        .then((result) => {
            console.log("Update Password Sucess!!");
            res.json(result)
          })
          .catch((err) => {
            res.send(err)
          }) 
        

    });

    router.route('/getUserBy/:id').get((req, res) => {
        User.findById(req.params.id)
      .then((result) => {
          console.log("FindId User Sucess!!")
          res.json(result)
        })
        .catch((err) => {
          res.send("cant find id")
        }) 


  });

  


  const storage = multer.diskStorage({
    destination: (req,file,callBack) => {
        callBack(null,'uploads')
    },
    filename: (req,file,callBack) => {
        callBack(null, `FunOfHeuristic_${file.originalname}`)
    }
})

var upload = multer({ storage: storage})

// let upload = multer({ dest:'uploads/'})


module.exports = router;
