// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname,'main','online'),{recursive:true},(err)=>{
    if (err){
        console.log(err)
    }
})


fs.mkdir(path.join(__dirname,'main','inPerson'),{recursive:true},(err)=>{
    if (err){
        console.log(err)
    }
})

// створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;

const onlineUsers = [
    {name: 'Andriy', age: 25, city: 'Lviv'},
  ]

const inPersonUsers = [
  {name: 'Valeriy', age: 39, city: 'Odessa'},
]

// створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

for (const users of onlineUsers) {
    fs.writeFile(path.join(__dirname,'main','online','online.txt'),  `NAME:${users.name},\nAGE:${users.age},\nCITY:${users.city}`, (err) =>{
        if (err){
            console.log(err);
            throw err;
        }
    } )
}

for (const users of inPersonUsers) {
    fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),  `NAME:${users.name},\nAGE:${users.age},\nCITY:${users.city}`, (err) =>{
        if (err){
            console.log(err);
            throw err;
        }
    } )
}

// напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)



const change = () => {
    fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), ((err, dataOnline) => {
        if (err) {
            console.log(err);
        }

        fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err, dataInPerson) => {
            if (err) {
                console.log(err)
            }

            fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${dataInPerson}`, {flag: "w"}, err => {
                if (err) {
                    console.log(err)
                }

                fs.appendFile(path.join(__dirname, 'main',  'inPerson', 'inPerson.txt'), `${dataOnline}`, {flag: "w"}, err => {
                    if (err) {
                        console.log(err)
                    }
                });

            });
        })
    }));

}

change();

