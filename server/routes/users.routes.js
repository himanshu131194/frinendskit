import passport from 'passport'
import usersController from '../controllers/users.controller'

export default (router)=>{
    
    router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));
  
    router.get('/auth/google/callback', passport.authenticate('google'), usersController.googleCallback);

    router.get('/logout', usersController.googleLogout);

    router.get('/authenticate', usersController.googleAuthenticate);

    return router;
}