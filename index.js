const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt ([
    {
        type: 'input',
        name: 'username',
        message: 'enter username',
    },
    {
        type: 'list',
        name:'location',
        message: 'are you in the US?',
        choices: ['yes', 'no'],
    },
    {
        type: 'input',
        name:'bio',
        message: 'write a SHORT bio about yourself',
    },
    {
        type: 'input',
        name:'linkedin',
        message: 'enter your LinkedIn URL',
    },
    {
        type: 'input',
        name:'github',
        message: 'enter your GitHub URL',
    },

])
.then((data) => {
    const htmlFile = 

    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${data.username}</h1> 
        <h1>${data.location}</h1>
        <h1>${data.bio}</h1>
        <h1>${data.linkedin}</h1>
        <h1>${data.github}</h1>
    </body>
    </html>
    `

    fs.writeFile('index.html', htmlFile, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
})