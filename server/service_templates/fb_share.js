export default (post_id, post_title, post_content) => {
    return `
    <html>
        <head>
                <title>Your Website Title</title>
                <meta property="og:title" content="${post_title}" />
<meta property="og:site_name" content="9GAG" />
<meta property="og:description" content="More memes, funny videos and pics on 9GAG" />
<meta property="og:type" content="article" />
<meta property="og:image" content="${post_content}" />
        </head>
        <body>
       
        </body>
    </html>
    `  
}
