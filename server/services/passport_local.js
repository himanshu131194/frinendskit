  
// import passport from 'passport';
// import {Strategy as GoogleStrategy}  from 'passport-google-oauth20';
// import User from '../models/users.model'
// import CONFIG from '../../config';

// passport.serializeUser((user, done) => {
//   console.log(user.id);
//   done(null, user.id);
// });

// passport.deserializeUser( async (id, done) => {
//     const user = await User.findOne({_id : id});
//           done(null, user);
// });


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
// ));


// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: CONFIG.LOGIN_KEYS.GOOGLE.CLIENT,
//       clientSecret: CONFIG.LOGIN_KEYS.GOOGLE.SECRET,
//       callbackURL: '/api/auth/google/callback',
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ account_id: profile.id});
//       console.log('existing user');
//       console.log(existingUser);
      
//       if (existingUser) {
//           return done(null, existingUser);
//       }

//       const user = await new User({ 
//           name : profile.emails[0].value,
//           email : profile.displayName,
//           acccount_type: 1,
//           account_id : profile.id 
//         }).save();
//       done(null, user);
//     }
//   )
// );