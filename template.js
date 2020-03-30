export default () => {
    return `<!DOCTYPE html>
        <html>
        <head>
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
            <link href="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/css/materialdesignicons.min.css" rel="stylesheet">
            <link href="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/css/webfont.css" rel="stylesheet">
            <!-- Core CSS -->
            <link rel="stylesheet" href="/css/bulma.css">
            <link rel="stylesheet" href="/css/app.css">
            


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
                <script src="htttps://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/data/tipuedrop_content.js"></script>
                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/global.js"></script>
                <script src="https://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/main.js"></script>
                
                <!-- Page and UI related js -->
                <script src="htttps://feel-funny.s3.ap-south-1.amazonaws.com/friendskit/assets/js/feed.js"></script>
        
        </body> 
    </html>`  
}