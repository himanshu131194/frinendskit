import passport from 'passport'

export default {
    googleCallback: (req, res) => {
        res.redirect('/');
    }, 

    facebookCallback: (req, res)=>{
        res.redirect('/');
    },

    googleAuthenticate: (req, res) => {
        if(req.user){
            res.status(200).send({
                user : req.user
            })
        }else{
            res.send({
                user : null
            })
        }
    },
    allLogout:  (req, res) => {
        req.logout();
        res.redirect('/');
    },
    authenticate: (req, res, next)=>{
        if(req.user){
           next();
        }else{
            return res.status(403).send({
                    error: "No token provided"
            }) 
        }
}
}