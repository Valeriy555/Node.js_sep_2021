// const {greeting} = require('./test/helper');
//
// greeting('Valerii')
//
// console.log(__dirname, 'App dirname')
// console.log(process.cwd(),'App Process')

// ================================================================================================

const path = require('path');
//
// const joinedPath = path.join('test','test2','files','public','text.txt');
// const joinedPath2 = path.join(__dirname,'test2','files','public','text.txt');
//
// console.log(joinedPath)
// console.log(joinedPath2)
// -----------------------------------------------------------------------------------------------

// const normalizePath = path.normalize('test\\test2\\ files/// public//text.txt');
// console.log(normalizePath, 'NORMALIZE')
// -----------------------------------------------------------------------------------------------

// const resolvePath = path.resolve('test\\test2\\ files/// public//text.txt');
// console.log(resolvePath, 'REZOLVE')

// ================================================================================================
// const os = require('os');

// console.log(os.cpus())
// console.log(os.cpus().length)
// console.log(os.arch())

// ================================================================================================

const fs = require('fs');

// fs.writeFileSync(path.join(__dirname,'test','file.txt'), 'INFA ') // синхронное выполнение
// // в папке test создали фаил 'file.txt' и поместили туда текс 'INFA '
//---------------------------------------------------------------------------------
// fs.writeFile(path.join(__dirname,'test','file_2.txt'), 'INFA2 ', (err) =>{
//     if (err){
//         console.log(err);
//         throw err; // выкенеться ошибка и код далее остановит выполнение
//     }
// } ) // тоже, что и writeFileSync, но асинхронное выполнение

// ---------------------------------------------------------------------------------------

// fs.appendFile(path.join(__dirname,'test','file_2.txt'),'\nInfa NEW',(err) =>{
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
// дописали Infa NEW в фаил 'file_2.txt'

// ---------------------------------------------------------------------------------------
// for (let i=0;i<10;i++){
//     fs.appendFile(path.join(__dirname,'test','file_2.txt'),'\nInfa SUPER_NEW',{flag:'a'},(err) =>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
// }
// дописали Infa SUPER_NEW в фаил 'file_2.txt' десять раз с помощью цикла, {flag:'a'} добавляет новые строки с данными, {flag:'w'} перезаписывает в одной строке данные 10 раз
//------------------------------------------------------------------------------------------

// fs.truncate(path.join(__dirname,'test','file_2.txt'),(err) =>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
// очистили всю информацию в 'file_2.txt'
//------------------------------------------------------------------------------------------
// fs.unlink(path.join(__dirname, 'test', 'file_2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
// удалили фаил 'file_2.txt'




