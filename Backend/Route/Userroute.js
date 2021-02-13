const router = require('express').Router();
let User = require("../Model/Usermodel");
const bcrypt = require('bcrypt')

router.route('/all').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});







router.route('/login/:name/:password').get((req, res) => {
  const name = req.params.name
  const password = req.params.password 
  
  /*
      if(bcrypt.compareSync('somePassword', hash)) {
    // Passwords match
    } else {
    // Passwords don't match
}


  */
  
  User.findOne({username : name})
    .then((user) =>{
      
      if(bcrypt.compareSync( password, user.password)){
        console.log("password matched ")
        res.json("true")
      }
      else{
        res.json("false")
      }

      
   

    
    
    
    })
    // .catch(err => res.status(400).json("false"));
    .catch(() => res.json("f"))
    
});


router.route('/:name').get((req, res) => {
    const name = req.params.name 
    User.findOne({username : name})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

router.route('/add/:name').post((req, res) => {
    const name = req.params.name 
    const entry = req.body.cou 
    User.findOne({username : name})
    .then((user)=>{
      user.count = entry 

      user.save()
      .then(()=> res.json("success"))
      .catch((err) => res.status(400).json('Error: ' + err) )
    })
    .catch((err) => res.status(400).json('Error: ' + err))

    
  });
  
  module.exports = router;

router.route('/add').post((req, res) => {
  const username = req.body.username;
  let  password = req.body.password 
  const email = req.body.email 
  
  const count = 0 
  const hash = bcrypt.hashSync(password, 10)
  
  password = hash 
  


  const newUser = new User({username , 
                            password , 
                            email , 
                            count  });

  newUser.save()
    .then(() => res.json('true'))
    .catch(() => res.json("false") );
});

module.exports = router;


