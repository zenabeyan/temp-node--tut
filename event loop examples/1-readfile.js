const {readFile} = require('fs')

console.log('Started the first task')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('Started second task');