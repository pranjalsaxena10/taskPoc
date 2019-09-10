var express = require("express")
var path = require("path")
var mongo = require("mongoose")
var bodyParser = require("body-parser")

//-----------Express Server----------------
var app = express()
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

//-----------MongoDB Connection------------
var db = mongo.connect("mongodb://localhost:27017/Tasks", {useNewUrlParser: true}, (err, response) => {
    if(err) {
        console.log(err)
    } else{
        console.log("Successfully Connected to" + db + '+' + response)
    }
})

var Schema = mongo.Schema
var TasksSchema = new Schema({
    taskName: { type: String },
    parentTask: { type: String },
    priorityFrom: { type: Number },
    priorityTo: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date }
}, { versionKey: false })

var model = mongo.model('tasks', TasksSchema, 'tasks')

app.post("/api/SaveTask",(req, res) => {
    console.log(req.body);  
    var mod = new model(req.body);
    mod.save((err, data) => {
        if(err) {
            res.send(err)
        } else {
            res.send({data: "Record has been inserted"})
        }
    })
})
app.get("/api/getTasks",(req, res) => {
    model.find({}, (err, data) => {
        if(err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})
app.listen(8080, () => {
    console.log("Listening on port 8080")
})

