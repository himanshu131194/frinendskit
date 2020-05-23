import express from 'express'
import path from 'path'
import passport from 'passport'
import CONFIG from './../config'
import bodyParser from 'body-parser'
import Template from './../template.js'
import FBshareTemplate from './service_templates/fb_share.js'
import csrf from 'csurf'
import usersRoutes from './routes/users.routes'
import postsRoutes from './routes/posts.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import cookieSession from 'cookie-session'

import './services/passport_google';


const app = express();

// app.use(cors());

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({limit: '10mb', extended: true}))

const CURRENT_WORKING_DIR = process.cwd();

app.use(
   cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: [CONFIG.COOKIEKEY]
   })
 );


 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')));

//comment out before building for production
// import devBundle from './devBundle'
//comment out before building for production
// devBundle.compile(app);

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/api', usersRoutes(express.Router()));
app.use('/api', postsRoutes(express.Router()));

app.get('/share-facebook/:id', (req, res)=>{
  if(req.query && req.query.fbclid){
     return res.redirect('/');
  }
  const post_id = req.params.id;
  const { post_title: postTitle, 'amp;post_content': postContent } = req.query;
  res.send(FBshareTemplate(post_id, postTitle, postContent));
})

app.get('*', (req, res)=>{
   res.send(Template());
})

export default app;