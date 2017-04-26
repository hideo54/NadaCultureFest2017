const fs = require('fs');
const data = require('./data.json');

for (section of data.projects) {
    for (project of section.contents) {
const text = `extends ../_subpage.pug

block head
    title ${project.name}

block main
    h1 ${project.name}
    p ${project.description}
    h2 場所
    p ${project.place}
    //- ここにマップを入れる
`;
        fs.writeFile(`src/projects/${project.address}.pug`, text);
    }
}
