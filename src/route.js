const express = require('express')
const app = express()
const port = 3000
const apiToken = process.env.API_TOKEN;

//key api 
const apiKey = require('.././middleware/ApikeyAuth')

const {getAllBatik,getBatikById, addBatik, addDeskripsi, deleteBatik, updateBatik, updateDeskripsi} = require('./models/batikModels')
// Middleware untuk parsing JSON
app.use(express.json());
// Middleware untuk parsing form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(apiKey);
// Routes Batik
app.get('/Batik', getAllBatik)
// Get Batik by id
app.get('/Batik/:id_batik', getBatikById)
// Insert data Batik
app.post('/Batik', addBatik);
// Insert data Batik
app.post('/Deskripsi', addDeskripsi);
// Update data mahasiswa
app.put('/Batik/:id_batik', updateBatik);
// Delete data mahasiswa
app.delete('/Batik/:id_batik', deleteBatik);
// Update data mahasiswa
app.put('/Deskripsi/:id_deskripsi', updateDeskripsi);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
