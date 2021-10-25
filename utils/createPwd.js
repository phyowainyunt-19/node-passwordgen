const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 9, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars);
}

const generatePassword = (length, chars) => {
    let pwd = '';
    for (let i = 0; i < length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pwd
}

module.exports = createPassword;
