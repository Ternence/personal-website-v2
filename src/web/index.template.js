module.exports = (markup) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mark Larah - Software Engineer</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#db5945">
        <link rel="manifest" href="/assets/manifest.json">
    </head>
    <body>
        <div id="root">${markup}</div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js" integrity="sha256-ivdPAn5h6U67z6OPgwfiLM9ug6levxmYFqWNxNCV0YE=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js" integrity="sha256-UEqn5+tyzezD6A5HBMNTlc5mXkmt+ohTfCBPtXMaGb0=" crossorigin="anonymous"></script>
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
