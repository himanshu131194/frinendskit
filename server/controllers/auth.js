// import postSections from '../models/sections.model'
import passport from 'passport'
// import CONFIG from '../../config';

export default (router)=>{

    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );
  
    router.get('/auth/google/callback', passport.authenticate('google'),
      (req, res) => {
        res.redirect('/');
      }
    );

    // router.get('/authenticate', (req, res) => {
    //      res.send(req.user);
    // });

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get('/authenticate', (req, res) => {
        if(req.user){
            res.status(200).send({
                user : req.user
            })
        }else{
            res.send({
                user : null
            })
        }
    });


    return router;
}