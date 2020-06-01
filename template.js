export default ({ article_title='', article_sitename='', article_url='', article_description='', article_cover='' }) => {
    let sitename = article_sitename ? article_sitename : '';
    let url = article_url ? article_url : '';
    let title = article_title ? article_title : '';
    let description = article_description ? article_description : '';
    let cover_url = article_cover? article_cover.url: '';
    let cover_width = article_cover? article_cover.width: '';
    let cover_height = article_cover? article_cover.height: '';

    return `<!DOCTYPE html>
        <html>
        <head>
            <script data-ad-client="ca-pub-9854855605577492" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <meta name="p:domain_verify" content="e9d06cc43d0b4c0f9a0e4c2d2b2db838"/>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name=viewport content="width=device-width,initial-scale=1">
            <title>feelfunny: Get feel of the fun</title>
            <meta name=keywords content="funny, image, gif, gifs, memes, jokes, image upload, upload image, lol, humor, vote, comment, share, feelfunny, feelfunny.app, wallpaper" />
            <meta name=description content="Discover the magic of the internet at feelfunny, a entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, viral videos, and so much more." />
            <meta name=copyright content="Copyright 2020 feelfunny, Inc." />
            <meta property="og:site_name" content="${sitename}"/>
            <meta property="og:url" content="${url}"/>
            <meta property="og:title" content="${title}"/>
            <meta property="og:description" content="${description}"/>
            <meta property="og:type" content="article"/>
            <meta property="og:image" content="${cover_url}"/>
            <meta property="og:image:width" content="${cover_width}" />
            <meta property="og:image:height" content="${cover_height}" />
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162054083-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-162054083-1');
            </script>
        </head>
        <body>
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js"></script>
        </body> 
    </html>`  
}