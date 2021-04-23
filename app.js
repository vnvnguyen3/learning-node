//Events module
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial', 1, 2);

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// christina.on('name', () => {
//     console.log('my name is ' + christina.name);
// });
// pedro.on('name', () => {
//     console.log('my name is ' + pedro.name);
// });
// christina.emit('name');
// pedro.emit('name');

//Readline Module
// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin, output : process.stdout});
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;
// rl.question(`What is ${num1} + ${num2}? \n`,
//     (userInput) => {
//         if(userInput.trim() == answer){
//             rl.close();
//         }
//         else {
//             rl.setPrompt('Incorrect response please try again');
//             rl.prompt();
//             rl.on('line', (userInput) => {
//                 if(userInput.trim() == answer){
//                     rl.close();
//                 }
//             })
//         }
//     });
// rl.on('close', () => {
//     console.log('Correct');
// });

//File System Module
//const fs = require('fs');
// fs.writeFile('example.txt', "this is an example", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File successfully created");
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully renamed the file');
//     }
// });

// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully appended data to file')
//     }
// })

// fs.unlink('example2.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successfully deleted the file')
//     }
// })

// fs.mkdir('tutorial', (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('successfully created file');
//             }
//         })
//     }
// })

// fs.readdir('tutorial', (err, files)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(files);
//         for(let file of files){
//             fs.unlink('./tutorial/' + file, (err)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log('successfully deleted file');
//                 }
//             })
//         }
//     }
// })

// fs.unlink('./tutorial/example.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         fs.rmdir('tutorial', (err)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log('folder successfully deleted');
//             }
//         });
//     }
// })

//Streams and pipes
// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('./uncompressed.txt');
// readStream.pipe(gunzip).pipe(writeStream);

//http module
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write('hello world from nodejs');
//         res.end();
//     }
//     else{
//         res.write('using some other domain');
//         res.end();
//     }
// });
// server.listen('3000');

//file system module
// const http = require('http');
// const fs  = require('fs');
// http.createServer((req,res)=>{
//     //read stream from static folder
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200, {'Content-type': 'text/html'});
//     readStream.prependListener(res);
// }).listen(3000);

//lodash (optional)
// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 1, 4);
// console.log(example);

//semantic versioning
// 4.17.11 => major.minor.patch
// ^4.x.x
// ~4.17.x
