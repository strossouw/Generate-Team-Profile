const fs = require('fs');

const writeFile = pageContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/index.html', pageContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};


module.exports = { writeFile };