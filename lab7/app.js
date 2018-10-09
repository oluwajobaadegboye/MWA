var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;


var logger = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var crypto = require('crypto');


app.use(cors());
app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

    function decrypt(data, masterkey){
    try {
        // base64 decoding
        var bData = new Buffer(data, 'base64');

        // convert data to buffers
        let salt = bData.slice(0, 64);
        let iv = bData.slice(64, 80);
        let tag = bData.slice(80, 96);
        let text = bData.slice(96);

        // derive key using; 32 byte key length
        var key = crypto.pbkdf2Sync(masterkey, salt , 2145, 32, 'sha512');

        // AES 256 GCM Mode
        var decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(tag);

        // encrypt the given text
        var decrypted = decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');

        return decrypted;

    }catch(e){
    }

    // error
    return null;
}

app.get('/secret',function(req,res){ 
    MongoClient.connect('mongodb://127.0.0.1:27017/library',(error,client)=>{
        if(error) throw error;
        var db = client.db('library');
        db.collection('homework7').findOne({},(error,doc)=>{
            if(error) throw error
            console.log('DOC'+doc);  
            
            // crypto.pbkdf2(doc.message,"asaadsaad",100000,512,"SHA512",(data)=>{
            //     console.log("Data is "+data)
            // }); 
         

        client.close; 
            res.status(200).json(doc);
        });
    });
   
});

app.listen(3000,()=>{console.log('App started on port 3000')});

module.exports = app;