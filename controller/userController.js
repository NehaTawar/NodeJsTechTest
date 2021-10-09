

var registerUser = function(req,res){
    if(!req.body.Firstname && !req.body.LastName && !req.body.Email && (!req.body.Password || (req.body.Password && req.body.Password.length<=8))){
        res.status(400).send("Invalid form, please check all values")
    }
    let firstname = req.body.Firstname;
    let lastname = req.body.LastName;
    let email = req.body.Email;
    if(!req.body.subscribe){
        let message = `Hello ${firstname} ${lastname}, Thank you for signing up`
        res.status(200).send(message);
    }else if(req.body.subscribe){
        let message = `Hello ${firstname} ${lastname}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${email}`
        res.status(200).send(message);
    }else{
        res.status(400).send("Invalid form submission")
    }
}

exports.registerUser = registerUser;