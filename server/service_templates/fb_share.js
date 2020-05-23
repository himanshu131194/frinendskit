export default (post_id, post_title, post_content) => {
    return `
    <html>
        <head>
                <script data-ad-client="ca-pub-9854855605577492" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <title>Your Website Title</title>
                <meta property="og:title" content="${post_title}" />
                <meta property="og:site_name" content="FEELFUNNY" />
                <meta property="og:description" content="Discover the magic of the internet at feelfunny, a entertainment destination. Lift your spirits with funny jokes, trending memes, entertaining gifs, inspiring stories, and so much more." />
                <meta property="og:image" content="${post_content}" />
                <meta property="og:url" content="https://feelfunny.app" />
                <meta property="og:type" content="article" />
        </head>
        <body>
            <!-- Load Facebook SDK for JavaScript -->
            <div id="fb-root"></div>
            <script>(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>
        </body>
    </html>
    `  
}
