const fs = require('fs')

const readeFile = function(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })

}

const generatorReadFile = function*(){
    const f1 = readeFile('./read1.js')
    const f2 = readeFile('./read2.js')
    console.log(f1.toString())
    console.log(f2.toString())
}
function autoRun (gen){
    let g = gen();

    function next(data){
        let result = g.next(data);
        if(result.done) return result.value;
        result.value.then((data)=>{
            next(data)
        })
    }
    next()
}

autoRun(generatorReadFile)