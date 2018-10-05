const http = require('http');
const fs = require('fs');
const path = require('path');


// http.createServer(
//     function(req,res){
//         const file = fs.readFileSync(path.join(__dirname,'ad.pdf'),'utf8');
//         res.write(file);
//     }
// ).listen(8080,()=>console.log('node server started on 8080'));
// 
// 
// http.createServer(
//     function(req,res){
//         const file = fs.readFile(path.join(__dirname,'ad.pdf'),'utf8',
//         function(error,data){
//             res.write(data);
//         }); 
//     }
// ).listen(8080,()=>console.log('node server started on 8080'));


http.createServer(
    function(req,res){
        const readable = fs.createReadStream(path.join(__dirname,'ad.pdf'),
        {encoding:'utf8', highWaterMark:16*1024} );

        readable.on('data',function(chunk){
            console.log('Chunk size is '+chunk.length);
            res.write(chunk);
        });
    }
).listen(8080,()=>console.log('node server started on 8080'));