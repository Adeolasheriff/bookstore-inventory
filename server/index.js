const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

// initialize
const app = express()

const PORT = process.env.PORT || 4000

//middleware
app.use(cors())
app.use(express.json())


// Connect to MongoDB

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}

const PracticeSchema = new mongoose.Schema({
    authorName: String,
    bookTitle: String,
    category: String,
    description: String,
    bookTitlePdf: String,
    imageUrl: String,
    price:Number

})

const PracticeModel = mongoose.model('bookedrecord', PracticeSchema)

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Book Store App!')
})

app.post('/upload-book', async (req, res) => {
    const data = req.body;
    await PracticeModel.create(data)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get('/all-books', async (req, res) => [
    await PracticeModel.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
])

app.get('/book/:id', async (req, res) => {
    const id = req.params.id;
    await PracticeModel.findById({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

// get books by category
app.get('/booksByCategory/:category', async(req,res)=>{
    const category = req.params.category;
    await bookModel.find({ category: category})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
  })

app.put('/book/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await PracticeModel.findByIdAndUpdate({ _id: id }, data, { new: true })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.delete('/book/:id', async (req, res) => {
    const id = req.params.id;
    await PracticeModel.findByIdAndDelete({ _id: id })
        .then(message => res.json({ message: "item deleted" }))
        .catch(err => res.json(err))
})

app.get('/category/:category', async (req, res) => {
    const category = req.params.category;
    await PracticeModel.find({ category: category })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
app.listen(PORT, (req, res) => {
    console.log(`Book store app is listening to port ${PORT}`)
})
