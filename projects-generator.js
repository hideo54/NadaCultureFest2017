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
        const makeMap = (floor, id) => {
            text = `include ../../images/${floor}.svg
    style .${id} { fill: #faa95b !important; }
    p 色付きの区域を選択するとそのエリアのページを見ることができます。`;
            return text;
        };
        if (project.place.indexOf('研修館') !== -1) {
            text += makeMap('2f', 'training-hall');
        } else if (project.place === '西ゾーン2階') {
            text += makeMap('2f', 'west');
        } else if (project.place.indexOf('2階') !== -1) {
            text += makeMap('2f', project.address);
        } else if (project.place.indexOf('3階') !== -1) {
            text += makeMap('3f', project.address);
        } else if (project.place.indexOf('4階') !== -1) {
            text += makeMap('4f', project.address);
        } else if (project.place === '視聴覚教室') {
            text += makeMap('2f', 'east');
        } else if (project.place === '中庭ステージ') {
            text += makeMap('1f', 'stage');
        } else if (project.place === '高校棟1階') {
            text += makeMap('1f', 'concert');
        } else if (['第1グラウンド', '新中庭'].indexOf(project.place) !== -1) {
            text += makeMap('1f', project.address);
        }
        fs.writeFile(`src/projects/${project.address}.pug`, text);
    }
}
