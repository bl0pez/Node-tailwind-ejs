const path = require('path');

const rootDir = path.dirname(require.main.filename)

//views
const viewsPath = path.join(rootDir, 'src', 'views');
const publicPath = path.join(rootDir, 'src', 'public');

module.exports = {
    viewsPath,
    publicPath
}
