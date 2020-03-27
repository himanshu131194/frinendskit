  
import passport from 'passport';
import {Strategy as GoogleStrategy}  from 'passport-google-oauth20';
import User from '../models/users.model'
import CONFIG from '../../config';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    const user = await User.findOne({_id : id});
          done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: CONFIG.LOGIN_KEYS.GOOGLE.CLIENT,
      clientSecret: CONFIG.LOGIN_KEYS.GOOGLE.SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {

      const existingUser = await User.findOne({ account_id: profile.id});
      
      if (existingUser) {
          return done(null, existingUser);
      }

      const user = await new User({ 
          name : profile.emails[0].value,
          email : profile.displayName,
          account_type: 1,
          account_id : profile.id,
          profile_pic: profile.photos[0].value
        }).save();
      done(null, user);
    }
  )
);