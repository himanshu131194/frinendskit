import passport from 'passport'
import usersController from '../controllers/users.controller'

export default (router)=>{
    
    //GOOGLE LOGIN 
    router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));
  
    router.get('/auth/google/callback', passport.authenticate('google'), usersController.googleCallback);

    //FACEBOOK LOGIN 
    router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['profile', 'email']}));
  
    router.get('/auth/facebook/callback', passport.authenticate('facebook'), usersController.facebookCallback);

    router.get('/logout', usersController.allLogout);

    router.get('/authenticate', usersController.googleAuthenticate);

    return router;
}
