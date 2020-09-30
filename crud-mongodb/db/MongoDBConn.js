var mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud'
mongoose.connect(mongoDB_URI, {useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongoose Connected to ' + mongoDB_URI)
});

db.on('disconnercted', ()=>{
    console.log('Mongoose Disconneted to ' + mongoDB_URI)
})

db.on('erro', (err)=>{
    console.log('Mongoose Error: ' + err)
})