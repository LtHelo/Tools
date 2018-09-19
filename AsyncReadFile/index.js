const fs = require('fs')

const asyncReadFile = async function(){

    const f1 = await readeFile('./file1.js')
    const f2 = await readeFile('./file2.js')
    console.log(f1.toString())
    console.log(f2.toString())


}

const readeFile = function(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })

}

asyncReadFile()