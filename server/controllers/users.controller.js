// import postSections from '../models/sections.model'
import passport from 'passport'
// import CONFIG from '../../config';

export default {
    // googleLogin : passport.authenticate('google', { scope: ['profile', 'email']}),
    googleCallback: (req, res) => {
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
    googleLogout:  (req, res) => {
        req.logout();
        res.redirect('/');
    },

    authenticate: (req, res, next)=>{
        if(req.user){
           next();
        }else{
           req.user = {
                gender: 1,
                badgets: 1,
                account_type: 1,
                favourite_sections: [],
                _id: "5e3551da2dafec60becda62c",
                name: "himanshu131194@gmail.com",
                email: "himanshu savita",
                account_id: "113944163418601847954",
                created: "2020-02-01T10:24:26.981Z",
                __v: 0
           }; 
           next();
            //   return res.status(403).send({
            //          error: "No token provided"
            //   }) 
        }
}
}