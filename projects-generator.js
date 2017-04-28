const fs = require('fs');
const data = require('./data.json');

for (section of data.projects) {
    for (project of section.contents) {
let text = `extends ../_subpage.pug

block head
    title ${project.name}

block main
    h1 ${project.name}
    p ${project.description}
    h2 場所
    p ${project.place}
    `;
        const makeStyle = (id) => {
            return `style g#${id} > rect:first-child, g#${id} > polyline:first-child { fill: #faa95b !important; }`
        };
        if (project.place.indexOf('研修館') !== -1) {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += makeStyle('west');
        } else if (project.place.indexOf('2階') !== -1) {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += makeStyle(project.address);
        } else if (project.place.indexOf('3階') !== -1) {
            text += 'include ../../images/3f.svg';
            text += '\n    '
            text += makeStyle(project.address);
        } else if (project.place.indexOf('4階') !== -1) {
            text += 'include ../../images/4f.svg';
            text += '\n    '
            text += makeStyle(project.address);
        } else if (project.place === '視聴覚教室') {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += makeStyle('east');
        } else if (project.place === '中庭ステージ') {
            text += 'include ../../images/1f.svg';
            text += '\n    '
            text += makeStyle('stage');
        }
        fs.writeFile(`src/projects/${project.address}.pug`, text);
    }
}
