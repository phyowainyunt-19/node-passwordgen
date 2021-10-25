#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPwd');
const savePassword = require('./utils/savePwd');


program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '10')
    .option('-s, --save', 'save your password to password.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse();

const { length, save, numbers, symbols } = program.opts();

// get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// save to file
if(save) {
    savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword)

// output generated pwd
console.log(chalk.green('Generated Password: ')+ chalk.bold.italic(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));