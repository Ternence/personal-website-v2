const fs = require('fs');
const knox = require('knox');

function downloadBundle (sha, dest, done) {

    const client = knox.createClient({
        key: process.env.ARTIFACTS_KEY, 
        secret: process.env.ARTIFACTS_SECRET,
        bucket: process.env.ARTIFACTS_BUCKET,
    });

    const filePath = `/website_ssr_bundles/ssr_bundles/mark-website-${sha}.js`;

    client.getFile(filePath, function(err, res) {
        if (err || res.statusCode !== 200) {
            throw new ReferenceError(`Could not download ${filePath}`);
        }

        const file = fs.createWriteStream(dest);

        res.on('data', (chunk) => { file.write(chunk); });
        res.on('end', (chunk) => {
            file.end();
            done();
        });
    });
}

module.exports = downloadBundle;
