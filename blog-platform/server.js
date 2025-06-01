import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('backend ishga tushdi')
})

app.listen(4000, () => console.log('server 3000-portda ishga tushdi'))