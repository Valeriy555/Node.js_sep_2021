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
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), ((err, data) => {
        if (err) {
            console.log(err);
        }


        fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1)
            }


            fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${data1.toString()}`, {flag: "w"}, err2 => {
                if (err2) {
                    console.log(err2)
                }

                fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${data.toString()}`, {flag: "w"}, err2 => {
                    if (err2) {
                        console.log(err2)
                    }
                });

            });
        })
    }));

}

change();