const fs = require('fs');
const path = require('path');
const firebaseService = require('./src/scripts/base/services/firebase/firebase.js');

fs.writeFileSync(
  path.join(__dirname, './firebase.json'),
  JSON.stringify(firebaseService.buildConfig(), null, 2)
);
