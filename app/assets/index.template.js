module.exports = (markup) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mark Larah - Software Engineer</title>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="root">${markup}</div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>
        <script type="text/javascript" src="assets/vendor.bundle.js"></script>
        <script type="text/javascript" src="assets/app.bundle.js"></script>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-64692179-1', 'auto');
          ga('send', 'pageview');
        </script>
    </body>
    </html>
`;
