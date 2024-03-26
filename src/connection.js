const mysql = require('mysql')

const db = mysql.createConnection({
    host: "46.17.173.161",
    user: "n1561813_krisnabatik",
    password: "Batik123acde",
    database: "n1561813_db_batik"
})

module.exports = db