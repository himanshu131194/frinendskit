export default () => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name=viewport content="width=device-width,initial-scale=1">
            <title>feelfunny: Get feel of the fun</title>
            <meta name=keywords content="funny, image, gif, gifs, memes, jokes, image upload, upload image, lol, humor, vote, comment, share, feelfunny, feelfunny.app, wallpaper" />
            <meta name=description content="Discover the magic of the internet at feelfunny, a entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, viral videos, and so much more." />
            <meta name=copyright content="Copyright 2020 feelfunny, Inc." />
         
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162054083-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-162054083-1');
            </script>

            <!-- Fonts -->
            <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:400,500" as="font" type="font/woff2" crossorigin>
        </head>
        <body>
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js"></script>
        </body> 
    </html>`  
}