const path = require('path');
const { fileService } = require('../file/file');

const _public = {};

_public.handleRelativePaths = () => {
  fileService.collect(`${getDistDirectoryFilepath()}/**/*.html`, filepaths => {
    removeUnnecessaryFilepaths(filepaths).forEach(filepath => {
      const file = fileService.readSync(filepath);
      fileService.write(filepath, _public.fixRelativePaths(file));
    })
  });
};

_public.fixRelativePaths = htmlString => {
  return htmlString.replace(/="assets\//g, '="/assets/');
};

function removeUnnecessaryFilepaths(filepaths){
  return filepaths.filter(filepath => {
    return !filepath.includes('blog');
  });
}

function getDistDirectoryFilepath(){
  return path.join(__dirname, '../../../../../dist');
}

module.exports = _public;
