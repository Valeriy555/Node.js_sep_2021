// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname,'file.txt'),  'PRIVET', (err) =>{
    if (err){
        console.log(err);
        throw err;
    }
})
