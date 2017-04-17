const fs = require('fs');
const knox = require('knox');

function downloadBundle (sha, dest, done) {

    const client = knox.createClient({
        key: process.env.ARTIFACTS_KEY, 
        secret: process.env.ARTIFACTS_SECRET,
        bucket: process.env.ARTIFACTS_BUCKET,
    });

    const filePath = `/website_ssr_bundles/ssr_bundles/mark-website-${sha}.js`;
    const fileStream = fs.createWriteStream(dest);

    client.getFile(filePath, function(err, res) {
        if (err || res.statusCode !== 200) {
            fs.unlinkSync(fileStream.path);
            console.log(err);
            throw new ReferenceError(`Could not download ${filePath}.`);
        }

        res.pipe(fileStream);
        res.on('end', () => {
            done();
        });
    });
}

module.exports = downloadBundle;
