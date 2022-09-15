const colors = require('colors');
const fs = require('fs');

const createFile = async (base = 1, limit = 10, file = false) => {
    try {
        let outPut = '';
        let consoleOutPut = '';
        let total = 0;
        
        for (let i = 1; i <= limit; i++) {
            total = base * i;
            outPut += `${base} x ${i} = ${total}\n`;
            consoleOutPut += `${colors.blue(base)} x ${colors.green(i)} = ${colors.yellow(total)}\n`;
        }

        const fileName = `Table-${base}.txt`;

        if (file) {
            fs.writeFileSync(`./outPut/${fileName}`, outPut);
            return `File ${fileName} have been created!`.rainbow;
        } else {
            console.log('=================='.cyan);
            console.log(`     Table: ${colors.blue(base)}`);
            console.log('=================='.cyan);
            console.log(consoleOutPut);
            return '';
        }

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
}