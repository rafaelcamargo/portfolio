const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fileSystem = require('file-system');

class FileService {
  constructor(dependencies = {}){
    this.fs = getDependency(dependencies, 'fs', fs);
    this.glob = getDependency(dependencies, 'glob', glob);
    this.fileSystem = getDependency(dependencies, 'fileSystem', fileSystem);
  }

  readSync(filepath){
    return this.fs.readFileSync(filepath, 'utf-8');
  }

  collect(pattern, onSuccess, onError){
    this.glob(pattern, (err, files) => {
      if(err) return onError ? onError(err) : console.log(`Failed to collect ${pattern} files`, err);
      onSuccess(files);
    });
  }

  write(filepath, data, onSuccess, onError){
    this.fileSystem.writeFile(filepath, data, err => {
      if(err) return handleWriteError(err, filepath, onError);
      onSuccess && onSuccess();
    });
  }
}

function handleWriteError(err, filepath, onError){
  return onError ? onError(err) : console.log(`Failed to write ${filepath}`, err);
}

function getDependency(dependencies, dependencyName, rawDependency){
  return dependencies[dependencyName] || rawDependency;
}

let fileService = new FileService();

module.exports = {
  fileService,
  FileService
};
