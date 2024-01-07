const fs = require('fs');


fs.writeFile('./welcome.txt', 'hello Node', ()=> {
    console.log('file written')
});


fs.readFile('./welcome.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString())
});