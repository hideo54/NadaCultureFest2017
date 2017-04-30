const fs = require('fs');

let pug = `extends _subpage.pug

block head
    title ギャラリー

block main
    h1 ギャラリー
    .gallery
`;
let style = `        .gallery {
            display: flex;
            flex-wrap: wrap;
        }
        .image {
            width: 180px;
            height: 150px;
            margin: 0.5em;
        }
`;
fs.readdir('./images/gallery/', (err, files) => {
    for (image of files) {
        const name = image.split('.')[0];
        pug += `        .image#${name}\n`;
        style += `        .image#${name} {
            background-image: url('/images/gallery/${image}');
            background-position: center center;
            background-size: cover;
        }\n`;
    }
    pug += `    style.\n`;
    pug += style;
    fs.writeFile(`src/gallery.pug`, pug);
});
