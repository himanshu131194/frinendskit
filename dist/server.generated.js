module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=28)}([function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n={env:"production",port:process.env.PORT||8080,API_URL:"https://feelfunny.app",MONGO_URI:"mongodb+srv://feelfunny:feelfunny123@cluster0-ekrsc.mongodb.net/test?retryWrites=true&w=majority",COOKIEKEY:"mycookiesecret",DB:{DEFAULT_COUNT:0,DEFAULT_CONTENT_TYPE:1,DEFAULT_TRUE:!0,DEFAULT_FALSE:!1,DEFAULT_ACCOUNT_TYPE:0,GENDER:{MALE:1,FEMALE:2,OTHER:3},BADGETS:{NOOBIE:1,PRO:2}},S3:{BUCKET:"stylemycv",URL:"https://stylemycv.s3.ap-south-1.amazonaws.com",ACCESS:"AKIA3YIPQLXVUZ3S3UD7",SECRET:"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",PASSWORD:"WMwQ}t%c(XqR"},LOGIN_KEYS:{GOOGLE:{CLIENT:"38122336055-7stkqff3vae90il94e1p12tp0pq26a4h.apps.googleusercontent.com",SECRET:"Czvtwg5Is_ZZwdVPEwUAoR8c"}},MESSAGES:{100:"post has beeb added successfully",101:"section has been added successfully"},ERRORS:{100:"something went wrong, please try to post again"},USER:{POST_TYPES:{UPLOADED:1,LIKED:2,COMMENTED:3}},JWT_SECRET:"himanshu@1234",ACCESS_TOKEN:"0z6v8b4uua"};t.a=n,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(n,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/config/index.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(20),n=r(21),s=r(6),i=r(13),d=r(8),u=r(14),c=r(22),l=r(0),p=r.n(l),f=r(1),m=r(23),v=r.n(m),y=r(24),b=r.n(y),h=r(15),g=r.n(h);function _(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,n=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return n=e.done,e},e:function(e){s=!0,o=e},f:function(){try{n||null==a.return||a.return()}finally{if(s)throw o}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function j(e,t,r,a,o,n,s){try{var i=e[n](s),d=i.value}catch(e){return void r(e)}i.done?t(d):Promise.resolve(d).then(a,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function s(e){j(n,a,o,s,i,"next",e)}function i(e){j(n,a,o,s,i,"throw",e)}s(void 0)}))}}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var G,w,O,S,x,H,D,E,T,U,R,I,A,C,$,M,N=new b.a.S3({accessKeyId:f.a.S3.ACCESS,secretAccessKey:f.a.S3.SECRET,region:"ap-south-1"}),P={listSections:(C=k(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.find({});case 3:a=e.sent,r.status(200).send({data:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r.status(400).send({error:f.a.ERRORS[100]});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e,t){return C.apply(this,arguments)}),listTags:(A=k(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.a.find({});case 3:a=e.sent,r.status(200).send({data:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r.status(400).send({error:f.a.ERRORS[100]});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e,t){return A.apply(this,arguments)}),uploadImagetoS3:(I=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,s,i,d,u,c,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=null,o=null,n=null,s=["jpg","jpeg","png","webp","gif"],t.body.url||!t.body.data64){e.next=8;break}a=Buffer.from(t.body.data64.replace(/^data:image\/\w+;base64,/,""),"base64"),n=t.body.ext,e.next=14;break;case 8:return e.next=10,g()({url:t.body.url,encoding:null});case 10:a=e.sent,i=new Buffer(a),n=t.body.url.split(".").pop(),o="data:image/".concat(n,";base64,")+i.toString("base64");case 14:return n=s.indexOf(n)<0?"jpg":n,d=v()(),u=a,c="image/".concat(n),l="posts/".concat(d,".").concat(n),p={Bucket:f.a.S3.BUCKET,Key:l,Body:u,ContentType:c},e.next=22,N.putObject(p).promise();case 22:return e.sent,e.abrupt("return",r.status(200).send({url:"https://".concat(f.a.S3.BUCKET,".s3.ap-south-1.amazonaws.com/").concat(l),key:l,slug:d,base64:o,mime:c,ext:n}));case 26:return e.prev=26,e.t0=e.catch(0),e.abrupt("return",r.status(400).send({error:e.t0}));case 29:case"end":return e.stop()}}),e,null,[[0,26]])}))),function(e,t){return I.apply(this,arguments)}),uploadPost:(R=k(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={user_id:t.user?t.user._id:"5e12110169481b125b9d0cb6",url:t.body.uploadedURL.trim(),slugId:t.body.postSlug.trim(),title:t.body.postTitle.trim(),section:t.body.postSections,mime_type:t.body.postMime.trim(),ext:t.body.postExt.trim()},t.body.postMime.indexOf("video")>=0&&(a.content_type=2),o=new s.a(a),e.prev=3,e.next=6,o.save();case 6:return e.sent,e.abrupt("return",r.status(200).send({data:f.a.MESSAGES[100]}));case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",r.status(400).send({error:f.a.ERRORS[100]}));case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e,t){return R.apply(this,arguments)}),listOfUsersPosts:(U=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,u,c,l,m,v,y,b,h,g,L;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=f.a.USER.POST_TYPES,o=a.COMMENTED,n=a.LIKED,u=!1,c=[],e.t0=parseInt(t.body.filters.value),e.next=e.t0===n?6:e.t0===o?10:14;break;case 6:return e.next=8,i.a.find({user_id:p.a.Types.ObjectId(t.user._id),is_active:!0},{_id:0,post_id:1});case 8:return c=e.sent,e.abrupt("break",16);case 10:return e.next=12,d.a.find({user_id:p.a.Types.ObjectId(t.user._id),is_active:!0},{_id:0,post_id:1});case 12:return c=e.sent,e.abrupt("break",16);case 14:return u=!0,e.abrupt("break",16);case 16:if(l=null,m=[],u)l={is_active:!0,user_id:p.a.Types.ObjectId(t.user._id)};else{v=_(c);try{for(v.s();!(y=v.n()).done;)b=y.value,m.push(b.post_id)}catch(e){v.e(e)}finally{v.f()}l={is_active:!0,_id:{$in:m}}}return e.prev=19,h=parseInt(t.body.offset)||0,g=parseInt(t.body.limit)||2,e.next=23,s.a.aggregate([{$match:l},{$lookup:{from:"sections",localField:"section",foreignField:"_id",as:"section_details"}},{$unwind:"$section_details"},{$lookup:{from:"liked_posts",let:{liked_post:"$_id"},pipeline:[{$match:{$expr:{$eq:["$post_id","$$liked_post"]},user_id:p.a.Types.ObjectId(t.user._id),is_active:!0}}],as:"liked"}},{$project:{like_count:1,comment_count:1,share_count:1,download_count:1,user_id:1,url:1,title:1,section:1,mime_type:1,ext:1,created:1,liked:{$size:"$liked"},"section_details._id":1,"section_details.value":1,"section_details.url":1}},{$sort:{created:-1}}]).skip(h).limit(g);case 23:L=e.sent,r.status(200).send({data:L}),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(19),r.status(400).send({error:f.a.ERRORS[100]});case 30:case"end":return e.stop()}}),e,null,[[19,27]])}))),function(e,t){return U.apply(this,arguments)}),listPosts:(T=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,i,d,u,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={is_active:!0},e.prev=1,o=parseInt(t.body.offset)||0,n=parseInt(t.body.limit)||2,i=t.user?p.a.Types.ObjectId(t.user._id):0,d=t.body,u=d.section,c=d.tag,u&&(a.section=p.a.Types.ObjectId(u.trim())),c&&(a.tag={$in:[p.a.Types.ObjectId(c.trim())]}),e.next=8,s.a.count();case 8:return l=e.sent,e.next=11,s.a.aggregate([{$match:a},{$lookup:{from:"sections",localField:"section",foreignField:"_id",as:"section_details"}},{$unwind:"$section_details"},{$lookup:{from:"liked_posts",let:{liked_post:"$_id"},pipeline:[{$match:{$expr:{$eq:["$post_id","$$liked_post"]},user_id:i,is_active:!0}}],as:"liked"}},{$project:{like_count:1,comment_count:1,share_count:1,download_count:1,user_id:1,url:1,title:1,section:1,mime_type:1,ext:1,created:1,liked:{$size:"$liked"},"section_details._id":1,"section_details.value":1,"section_details.url":1}},{$sort:{created:-1}}]).skip(o).limit(n);case 11:f=e.sent,r.status(200).send({data:f,count:l}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),r.status(400).send({error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),function(e,t){return T.apply(this,arguments)}),postLiked:(E=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body.post_id.trim(),o=!0===t.body.flag?1:-1,e.prev=2,n=o>0,e.next=6,i.a.findOneAndUpdate({user_id:p.a.Types.ObjectId(t.user._id),post_id:p.a.Types.ObjectId(a)},{is_active:n},{upsert:!0});case 6:return e.next=8,s.a.findOneAndUpdate({_id:a},{$inc:{like_count:o}},{new:!0});case 8:d=e.sent,r.status(200).send({data:d}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),r.status(400).send({error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[2,12]])}))),function(e,t){return E.apply(this,arguments)}),queryTest:(D=k(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.updateMany({},{liked:!1,like_count:0,comment_count:0,share_count:0});case 3:a=e.sent,r.status(200).send({data:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r.status(400).send({error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e,t){return D.apply(this,arguments)}),postComments:(H=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body.post_id.trim(),o=t.body.text.trim(),n=new d.a({user_id:t.user._id,post_id:a,text:o}),e.prev=2,e.next=5,n.save();case 5:return e.sent,e.next=8,s.a.findOneAndUpdate({_id:a},{$inc:{comment_count:1}},{new:!0});case 8:i=e.sent,r.status(200).send({data:i}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),r.status(400).send({error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[2,12]])}))),function(e,t){return H.apply(this,arguments)}),listComments:(x=k(regeneratorRuntime.mark((function e(t,r){var a,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body.post_id,o=p.a.Types.ObjectId(t.user._id),e.prev=2,e.next=5,d.a.aggregate([{$match:{post_id:p.a.Types.ObjectId(a),is_active:!0}},{$lookup:{from:"users",localField:"user_id",foreignField:"_id",as:"user_details"}},{$unwind:"$user_details"},{$lookup:{from:"liked_comments",let:{liked_comment:"$_id"},pipeline:[{$match:{$expr:{$eq:["$comment_id","$$liked_comment"]},post_id:p.a.Types.ObjectId(a),user_id:p.a.Types.ObjectId(t.user._id),is_active:!0}}],as:"liked"}},{$project:(s={points:1,created:1,liked:{$size:"$liked"},user_id:1,post_id:1,text:1,"user_details._id":1,"user_details.name":1,"user_details.profile_pic":1},i="user_details._id",u=1,i in s?Object.defineProperty(s,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[i]=u,s)},{$set:{current_user:{$eq:["$user_id",o]}}},{$sort:{created:-1}}]);case 5:n=e.sent,r.status(200).send({data:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r.status(400).send({error:e.t0});case 12:case"end":return e.stop()}var s,i,u}),e,null,[[2,9]])}))),function(e,t){return x.apply(this,arguments)}),upvoteComments:(S=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body.comment_id,o=t.body.post_id,n=!0===t.body.flag?1:-1,e.prev=3,s=n>0,e.next=7,u.a.findOneAndUpdate({user_id:p.a.Types.ObjectId(t.user._id),comment_id:p.a.Types.ObjectId(a),post_id:p.a.Types.ObjectId(o)},{is_active:s},{upsert:!0});case 7:return e.next=9,d.a.findOneAndUpdate({_id:p.a.Types.ObjectId(a)},{$inc:{points:n}},{new:!0});case 9:i=e.sent,r.status(200).send({data:i}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),r.status(400).send({error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),function(e,t){return S.apply(this,arguments)}),deleteComment:(O=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body,o=a.comment_id,n=a.post_id,e.prev=1,e.next=4,d.a.findOneAndUpdate({_id:p.a.Types.ObjectId(o),user_id:p.a.Types.ObjectId(t.user._id),post_id:p.a.Types.ObjectId(n)},{is_active:!1});case 4:return s=e.sent,e.next=7,u.a.findOneAndUpdate({user_id:p.a.Types.ObjectId(t.user._id),comment_id:p.a.Types.ObjectId(o),post_id:p.a.Types.ObjectId(n)},{is_active:!1});case 7:r.status(200).send({data:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.status(400).send({error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(e,t){return O.apply(this,arguments)}),downloadContent:(w=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,o=a.content_url,n=a.post_id,e.prev=1,e.next=4,g()({uri:o,encoding:null});case 4:return i=e.sent,e.next=7,s.a.findOneAndUpdate({_id:p.a.Types.ObjectId(n)},{$inc:{download_count:1}},{new:!0});case 7:e.sent,r.status(200).send(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.status(400).send({error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),function(e,t){return w.apply(this,arguments)}),reportPost:(G=k(regeneratorRuntime.mark((function e(t,r){var a,o,n,i,d,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.body,o=a.post_id,n=a.report_reason,i=a.report_text,e.prev=1,e.next=4,s.a.findOneAndUpdate({_id:p.a.Types.ObjectId(o)},{is_active:!1});case 4:return d=new c.a({text:i,reason:n,user_id:p.a.Types.ObjectId(t.user._id),post_id:p.a.Types.ObjectId(o)}),e.next=7,d.save();case 7:u=e.sent,r.status(200).send({data:u}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.status(400).send({error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),function(e,t){return G.apply(this,arguments)}),serverRealTimeNotifications:function(e,t){t.status(200).set({connection:"keep-alive","cache-control":"no-cache","content-Type":"text/event-stream"});var r=Date.now();t.write("data: ".concat(r,"\n\n"))}};t.a=P,($="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&($.register(N,"s3","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/posts.controller.js"),$.register(P,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/posts.controller.js")),(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&M(e)}).call(this,r(3)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("passport")},function(e,t,r){"use strict";(function(e){var a;r(4);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,s={googleCallback:function(e,t){t.redirect("/")},facebookCallback:function(e,t){t.redirect("/")},googleAuthenticate:function(e,t){e.user?t.status(200).send({user:e.user}):t.send({user:null})},allLogout:function(e,t){e.logout(),t.redirect("/")},authenticate:function(e,t,r){if(!e.user)return t.status(403).send({error:"No token provided"});r()}};t.a=s,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(s,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/controllers/users.controller.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({user_id:{type:n.a.Schema.ObjectId,ref:"users"},url:{type:String},poster_url:{type:String},slug:{type:String},title:{type:String},liked:{type:Boolean,default:u.DEFAULT_FALSE},like_count:{type:Number,default:u.DEFAULT_COUNT},comment_count:{type:Number,default:u.DEFAULT_COUNT},share_count:{type:Number,default:u.DEFAULT_COUNT},download_count:{type:Number,default:u.DEFAULT_COUNT},tags:[{type:n.a.Schema.ObjectId,ref:"tags"}],section:{type:n.a.Schema.ObjectId,ref:"sections"},content_type:{type:Number,default:u.DEFAULT_CONTENT_TYPE},mime_type:{type:String},ext:{type:String},is_new:{type:Boolean,default:u.DEFAULT_TRUE},is_hide:{type:Boolean,default:u.DEFAULT_FALSE},is_nsfw:{type:Boolean,default:u.DEFAULT_FALSE},width:{type:Number},height:{type:Number},duration:{type:Number,default:u.DEFAULT_COUNT},size:{type:Number},liker_list:[{type:n.a.Schema.ObjectId,ref:"users"}],is_active:{type:Boolean,default:u.DEFAULT_TRUE},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("posts",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js"),i.register(c,"Posts","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/posts.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({post_id:{type:n.a.Schema.ObjectId,ref:"posts"},user_id:{type:n.a.Schema.ObjectId,ref:"users"},parent_id:{type:n.a.Schema.ObjectId,ref:"comments"},points:{type:Number,default:u.DEFAULT_COUNT},liked:{type:Boolean,default:u.DEFAULT_FALSE},replies_count:{type:Number,default:u.DEFAULT_COUNT},text:{type:String},is_active:{type:Boolean,default:u.DEFAULT_TRUE},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("comments",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/comments.model.js"),i.register(c,"Comments","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/comments.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/comments.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("crypto")},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(9),i=r.n(s),d=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u=d.a.DB,c=new n.a.Schema({name:{type:String,trim:!0,required:!0,unique:!0},email:{type:String,trim:!0,required:!0,unique:!0},password_hash:{type:String,trim:!0},password_salt:{type:String,trim:!0},gender:{type:Number,default:u.GENDER.MALE},dob:{type:Date},country:{type:Number},profile_pic:{type:String},description:{type:String},badgets:{type:Number,default:u.BADGETS.NOOBIE},accounts:{facebook:{type:String},google:{type:String}},account_type:{type:Number,default:u.DEFAULT_ACCOUNT_TYPE},account_id:{type:String},favourite_sections:[{type:Number}],created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}});c.virtual("password").set((function(e){this._password=e,this.password_salt=this.makeSalt(),this.password_hash=this.encryptPassword(e)})).get((function(){return this._password})),c.methods={authenticate:function(e){return this.encryptPassword(e)===this.password_hash},encryptPassword:function(e){if(!e)return"";try{return i.a.createHmac("sha1",this.password_salt).update(e).digest("hex")}catch(e){return""}},makeSalt:function(){return Math.round((new Date).valueOf()*Math.random())+""}};var l,p,f=n.a.model("users",c);t.a=f,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js"),l.register(c,"UserSchema","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js"),l.register(f,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/users.model.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=(r(9),r(1));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({user_id:{type:n.a.Schema.ObjectId,ref:"users"},post_id:{type:n.a.Schema.ObjectId,ref:"posts"},is_active:{type:Boolean,default:u.DEFAULT_TRUE},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("liked_posts",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js"),i.register(c,"likePosts","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_posts.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=(r(9),r(1));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({user_id:{type:n.a.Schema.ObjectId,ref:"users"},comment_id:{type:n.a.Schema.ObjectId,ref:"comments"},post_id:{type:n.a.Schema.ObjectId,ref:"posts"},is_active:{type:Boolean,default:u.DEFAULT_TRUE},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("liked_comments",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_comments.model.js"),i.register(c,"likedComments","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_comments.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/liked_comments.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("request-promise")},function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),s=r(11),i=r.n(s),d=r(4),u=r.n(d),c=r(1),l=r(12),p=r.n(l),f=r(17),m=r(18),v=r(19),y=r(25),b=r.n(y),h=r(26),g=r.n(h);r(31);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _=n()();_.use(b()()),_.use(p.a.urlencoded({limit:"10mb",extended:!0})),_.use(p.a.json({limit:"10mb",extended:!0}));var L=process.cwd();_.use(g()({maxAge:2592e6,keys:[c.a.COOKIEKEY]})),_.use(u.a.initialize()),_.use(u.a.session()),_.use(n.a.static(i.a.join(L,"public"))),_.use("/dist",n.a.static(i.a.join(L,"dist"))),_.use("/api",Object(m.a)(n.a.Router())),_.use("/api",Object(v.a)(n.a.Router())),_.get("*",(function(e,t){t.send(Object(f.a)())}));var j,k,G=_;t.a=G,(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(_,"app","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js"),j.register(L,"CURRENT_WORKING_DIR","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js"),j.register(G,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/express.js")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n=function(){return'<!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=utf-8>\n            <meta name=viewport content="width=device-width,initial-scale=1">\n            <title>feelfunny: Get feel of the fun</title>\n            <meta name=keywords content="funny, image, gif, gifs, memes, jokes, image upload, upload image, lol, humor, vote, comment, share, feelfunny, feelfunny.app, wallpaper" />\n            <meta name=description content="Discover the magic of the internet at feelfunny, a entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, viral videos, and so much more." />\n            <meta name=copyright content="Copyright 2020 feelfunny, Inc." />\n         \n            <script data-ad-client="ca-pub-9854855605577492" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>\n            \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162054083-1"><\/script>\n            <script>\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag(\'js\', new Date());\n            gtag(\'config\', \'UA-162054083-1\');\n            <\/script>\n\n            \x3c!-- Fonts --\x3e\n            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">\n            \x3c!-- Core CSS --\x3e\n            <link rel="stylesheet" href="/css/bulma.css">\n            <link rel="stylesheet" href="/css/core.css">\n\n        </head>\n        <body>\n                \x3c!-- Pageloader --\x3e\n                <div class="pageloader"></div>\n                <div class="infraloader is-active"></div>\n                <div class="app-overlay"></div>\n               \n                <div id="root"></div>\n                <script type="text/javascript" src="/dist/bundle.js"><\/script>\n\n                \x3c!-- Concatenated js plugins and jQuery --\x3e\n                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/jquery.js"><\/script>\n                \n                \x3c!-- Core js --\x3e\n                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/global.js"><\/script>\n                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/main.js"><\/script>\n                \n        \n        </body> \n    </html>'};t.a=n,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(n,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/template.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(4),n=r.n(o),s=r(5);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=function(e){return e.get("/auth/google",n.a.authenticate("google",{scope:["profile","email"]})),e.get("/auth/google/callback",n.a.authenticate("google"),s.a.googleCallback),e.get("/auth/facebook",n.a.authenticate("facebook",{scope:["profile","email"]})),e.get("/auth/facebook/callback",n.a.authenticate("facebook"),s.a.facebookCallback),e.get("/logout",s.a.allLogout),e.get("/authenticate",s.a.googleAuthenticate),e};t.a=u,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(u,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/routes/users.routes.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(2),n=r(5);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,i,d=function(e){return e.get("/ask-post-updates",o.a.serverRealTimeNotifications),e.get("/list-sections",o.a.listSections),e.get("/list-tags",o.a.listTags),e.post("/list-posts",o.a.listPosts),e.post("/list-usersposts",n.a.authenticate,o.a.listOfUsersPosts),e.get("/query-test",o.a.queryTest),e.get("/download-content",o.a.downloadContent),e.post("/list-comments",n.a.authenticate,o.a.listComments),e.post("/upvote-comments",n.a.authenticate,o.a.upvoteComments),e.post("/delete-comments",n.a.authenticate,o.a.deleteComment),e.post("/report-post",n.a.authenticate,o.a.reportPost),e.post("/upload-s3",o.a.uploadImagetoS3),e.post("/upload-posts",o.a.uploadPost),e.post("/post-liked",n.a.authenticate,o.a.postLiked),e.post("/post-comments",n.a.authenticate,o.a.postComments),e};t.a=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(d,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/routes/posts.routes.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({value:{type:String},description:{type:String},url:{type:String},is_active:{type:Boolean,default:u.DEFAULT_TRUE},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("sections",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/sections.model.js"),i.register(c,"Sections","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/sections.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/sections.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({name:{type:String},created:{type:Date,default:Date.now},is_active:{type:Boolean,default:u.DEFAULT_TRUE},updated:{type:Date},comment:{type:String}}),l=n.a.model("tags",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/tags.model.js"),i.register(c,"Tags","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/tags.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/tags.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),s=r(1);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,d,u=s.a.DB,c=new n.a.Schema({text:{type:String},reason:{type:String},user_id:{type:n.a.Schema.ObjectId,ref:"users"},post_id:{type:n.a.Schema.ObjectId,ref:"posts"},created:{type:Date,default:Date.now},updated:{type:Date},comment:{type:String}}),l=n.a.model("report_posts",c);t.a=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"DB","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/report_posts.model.js"),i.register(c,"Reportposts","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/report_posts.model.js"),i.register(l,"default","/Users/himanshusavita/Documents/live-projects/friendskit-front/server/models/report_posts.model.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("uuid/v4")},function(e,t){e.exports=require("aws-sdk")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("passport-google-oauth20")},function(e,t,r){r(29),e.exports=r(30)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";r.r(t);var a=r(1),o=r(0),n=r.n(o),s=r(16);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;n.a.Promise=global.Promise,n.a.connect(a.a.MONGO_URI,{useNewUrlParser:!0}),n.a.connection.on("error",(function(){throw new Error("unable to connect to database")})),s.a.listen(a.a.port,(function(e){e&&console.log(e),console.info("Server started on port %s.",a.a.port)}))},function(e,t,r){"use strict";var a=r(4),o=r.n(a),n=r(27),s=r(10),i=r(1);function d(e,t,r,a,o,n,s){try{var i=e[n](s),d=i.value}catch(e){return void r(e)}i.done?t(d):Promise.resolve(d).then(a,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function s(e){d(n,a,o,s,i,"next",e)}function i(e){d(n,a,o,s,i,"throw",e)}s(void 0)}))}}"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;o.a.serializeUser((function(e,t){t(null,e.id)})),o.a.deserializeUser(function(){var e=u(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.findOne({_id:t});case 2:a=e.sent,r(null,a);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),o.a.use(new n.Strategy({clientID:i.a.LOGIN_KEYS.GOOGLE.CLIENT,clientSecret:i.a.LOGIN_KEYS.GOOGLE.SECRET,callbackURL:"/api/auth/google/callback"},function(){var e=u(regeneratorRuntime.mark((function e(t,r,a,o){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.findOne({account_id:a.id});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",o(null,n));case 5:return e.next=7,new s.a({name:a.emails[0].value,email:a.displayName,account_type:1,account_id:a.id,profile_pic:a.photos[0].value}).save();case 7:i=e.sent,o(null,i);case 9:case"end":return e.stop()}}),e)})));return function(t,r,a,o){return e.apply(this,arguments)}}()))}]);