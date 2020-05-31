export default ({ article_title, article_sitename, article_url, article_description, article_cover }) => {
    return`
    <html>
        <head>
            <meta property="og:site_name" content=${article_sitename}/>
            <meta property="og:url" content=${article_url}/>
            <meta property="og:title" content=${article_title}/>
            <meta property="og:description" content=${article_description}/>
            <meta property="og:type" content="article"/>
            <meta property="og:image" content=${article_cover.url}/>
            <meta property="og:image:width" content=${article_cover.width} />
            <meta property="og:image:height" content=${article_cover.height} />
        </head>
    </html>
    `  
}
