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
        if (project.place.indexOf('研修館') !== -1) {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += `style g#west > rect { fill: #faa95b !important; }`;
        } else if (project.place.indexOf('2階') !== -1) {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += `style g#${project.address} > rect { fill: #faa95b !important; }`;
        } else if (project.place.indexOf('3階') !== -1) {
            text += 'include ../../images/3f.svg';
            text += '\n    '
            text += `style g#${project.address} > rect { fill: #faa95b !important; }`;
        } else if (project.place.indexOf('4階') !== -1) {
            text += 'include ../../images/4f.svg';
            text += '\n    '
            text += `style g#${project.address} > rect { fill: #faa95b !important; }`;
        } else if (project.place === '視聴覚教室') {
            text += 'include ../../images/2f.svg';
            text += '\n    '
            text += `style g#east > rect { fill: #faa95b !important; }`;
        } else if (project.place === '中庭ステージ') {
            text += 'include ../../images/1f.svg';
            text += '\n    '
            text += `style g#stage > rect { fill: #faa95b !important; }`;
        }
        fs.writeFile(`src/projects/${project.address}.pug`, text);
    }
}
