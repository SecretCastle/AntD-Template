const exec = require('child_process').exec;
const fs = require('fs');
function deleteDist () {
    return new Promise((resolve,reject) => {
        exec('rm -rf dist',function(err,out){ 
            resolve('done')   
            if( err ){
                reject(err)
                console.log(err);
            }
        })
    })
}
function readFile(){
    return new Promise((resolve,reject) => {
        fs.readFile('index.html', function(err , data){
            resolve(data)
        })
    })
}
function writeHtml(data){
    return new Promise((resolve,reject) => {
        fs.mkdirSync('./dist');
        fs.writeFile('./dist/index.html', data , (err) => {
            if (err) reject(err);
            resolve('done')
        })
    })
}
function run(){
    deleteDist().then(() => {
        return readFile()
    }).then(res => {
        if(res){
            return writeHtml(res)
        }
    }).then(res => {
        console.log('Clean dist done');
    })
}
run();