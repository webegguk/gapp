---
layout: post
category: Information
title: Basic Requirements
custom_css: styles
---
The main requirement for implementing an AMP document is that its base code look like this:
```html
<!doctype html>
<html ⚡ lang="en">
  <head>
    <meta charset="utf-8">
    
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    <title>Head Sections</title>
    
    <link rel="canonical" href="/current-page.html">
    
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
    -moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s
     1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes 
     -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes 
     -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes 
     -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes 
     -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes 
     -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;
    -ms-animation:none;animation:none}</style></noscript>
    
    <style amp-custom>body{font-family:"Source Sans Pro", sans-serif;padding:0;margin:0;
    font-size:20px;background:#000}p{line-height:1.6em}a{color:#000}h1,h2{padding:0;
    margin:0}h1{font-weight:normal}h2{font-size:60px;text-align:center}h3{font-size:1.8em;
    margin:15px 0}img{max-width:100%;height:auto}amp-img{background-color:grey;height:auto}
    .you-tube{text-align:center;margin-bottom:20px}</style>
    
  </head>
  <body>
  </body>
</html>
```

<p class="smaller">Source / Read more <a href="https://www.ampproject
.org/docs/tutorials/create/basic_markup">Amp Project</a></p>

Main points to note are the Lightening Bolt added in, the dependency on Google's main Javascript 
file, Canonical tags and inline css styles.

Notice the extra attributes added to the style tags, the `amp-boilerplate` tag and its contents 
are required. The `amp-custom` should have your own styles in it.

The improvements in initial speed are evident with regards to the lack of page reflow though 
components themselves can take time to load.
