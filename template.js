export default () => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <script data-ad-client="ca-pub-9854855605577492" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162054083-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-162054083-1');
            </script>

            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="x-ua-compatible" content="ie=edge">

            <title>feelfunny</title>
            <link rel="icon" type="image/png" href="assets/images/favicon.png" />
            <!-- Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Montserrat:600,700,800,900" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
            <link href="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/css/webfont.css" rel="stylesheet">
            <!-- Core CSS -->
            <link rel="stylesheet" href="/css/bulma.css">
            <link rel="stylesheet" href="/css/core.css">

        </head>
        <body>
                <!-- Pageloader -->
                <div class="pageloader"></div>
                <div class="infraloader is-active"></div>
                <div class="app-overlay"></div>
               
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js"></script>

                <!-- Concatenated js plugins and jQuery -->
                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/jquery.js"></script>
                
                <!-- Core js -->
                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/global.js"></script>
                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/main.js"></script>
                
        
        </body> 
    </html>`  
}