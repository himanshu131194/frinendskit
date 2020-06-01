import express from 'express'
import path from 'path'
import passport from 'passport'
import CONFIG from './../config'
import bodyParser from 'body-parser'
import Template from './../template.js'
import FBshareTemplate from './service_templates/fb_share.js'
import ArticleshareTemplate from './service_templates/article_share.js'

import csrf from 'csurf'
import usersRoutes from './routes/users.routes'
import postsRoutes from './routes/posts.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import cookieSession from 'cookie-session'

import './services/passport_google';

import mongoose from 'mongoose'
import Posts from './models/posts.model'
import Article from './models/articals.model'


const app = express();

app.use(cors());

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

app.get('/share-facebook/:id', async (req, res)=>{
  if(req.query && req.query.fbclid){
     return res.redirect('/');
  }
  const postId = req.params.id;
  const result = await Posts.findById(mongoose.Types.ObjectId(postId));
  res.send(FBshareTemplate(postId, result.title, result.url));
});


app.get('/fbshare-article/:id', async (req, res)=>{
  const articleId = req.params.id;
  const result = await Article.findById(mongoose.Types.ObjectId(articleId));
  res.send(ArticleshareTemplate(result));
});

app.get('/article/:id', (req, res)=>{
   const articleId = req.params.id
   return res.send(Template());
});

app.get('/', (req, res)=>{
   res.send(Template());
})

app.get('/section/:id', (req, res)=>{
  res.send(Template());
})



export default app;

// https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080/share-facebook/5ec92f30b1ae287cdf07815f?post_title=More people die from other causes anyway...&amp;post_content=https://stylemycv.s3.ap-south-1.amazonaws.com/uploads/28-04-2020/af501080-dd52-4a4a-84d7-084686622e7c.jpg