export default (post_id, post_title, post_content) => {
    return`
    <html>
        <head>
                <meta property="og:title" content="${post_title}" />
                <meta property="og:site_name" content="FEELFUNNY" />
                <meta property="og:description" content="Discover the magic of the internet at feelfunny, a entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, and so much more." />
                <meta property="og:image" content="${post_content}" />
                <meta property="og:type" content="article" />
        </head>
        <body>
       
        </body>
    </html>
    `  
}
