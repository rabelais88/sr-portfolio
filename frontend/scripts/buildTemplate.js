const Mustache = require('mustache');
Mustache.escape = function (text) {
  return text;
};
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const projectName = process.argv[2];
const view = {
  name: projectName,
  configPackage: '@sr-portfolio/shared-config',
};

const getSrcFilePath = (srcFile) => path.join(__dirname, 'templates', srcFile);
const getDestFilePath = (_projectName, destFile) =>
  path.join('packages', _projectName, destFile);

async function buildTemplate(srcFile, destFile) {
  const src = await readFile(getSrcFilePath(srcFile), 'utf-8');
  const data = Mustache.render(src, view);
  await writeFile(getDestFilePath(projectName, destFile), data);
}

console.log('building templates');
(async () => {
  await buildTemplate('packageTemplate.json', 'package.json');
  await buildTemplate('_tsconfig.json', 'tsconfig.json');
  await buildTemplate('babelrc.json', '.babelrc');
  await buildTemplate('eslintrc.js', '.eslintrc.js');
  await buildTemplate('prettierrc.js', '.prettierrc.js');
  console.log('...finished building templates');
})();
