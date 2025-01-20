const path = require('path');
const fs = require('fs');

const distPath = path.join(__dirname, 'project-dist');
const distAssetsPath = path.join(distPath, 'assets');
const stylesPath = path.join(__dirname, 'styles');
const templatePath = path.join(__dirname, 'template.html');
const indexPath = path.join(distPath, 'index.html');
const componentsPath = path.join(__dirname, 'components');
