const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (password) => {
    // not to overwrite > a / 666 (permission)
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
        // end of line EOL
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.blue('Saved to password.txt'));
            })
        })
    })

}


module.exports = savePassword;