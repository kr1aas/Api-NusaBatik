const db = require('../connection')
const response = require('../respons')

function getAllBatik(req, res) {
    const sql = "SELECT tb_batik.*, tb_deskripsi.* FROM tb_batik JOIN tb_deskripsi ON tb_batik.id_deskripsi = tb_deskripsi.id_deskripsi"
    db.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Server Error!" });
        }
        if (result.length > 0) {
            return res.status(200).json({ data: result, message: `Data Batik Berhasil Diambil!` });
        } else {
            return res.status(404).json({ error: "Data Not Found!" });
        }
    });
}

function getBatikById(req, res) {
    const id_batik = req.params.id_batik;
    const sql = `SELECT tb_batik.*, tb_deskripsi.* FROM tb_batik JOIN tb_deskripsi ON tb_batik.id_deskripsi = tb_deskripsi.id_deskripsi WHERE id_batik = ${id_batik}`;
    db.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Server Error!" });
        }
        if (result.length > 0) {
            return res.status(200).json({ data: result, message: `Data Batik Dengan ID:${id_batik} Berhasil Diambil!` });
        } else {
            return res.status(404).json({ error: "Data Not Found!" });
        }
    });
}


function addBatik(req, res) {
    const { id_deskripsi, nama_batik,gambar_batik, tahun_diciptakan } = req.body;

    const checkDeskripsiQuery = `SELECT * FROM tb_deskripsi WHERE id_deskripsi = ?`;
    db.query(checkDeskripsiQuery, [id_deskripsi], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Server Error!" });
        }
        if (result.length === 0) {
            return res.status(400).json({ error: "Deskripsi tidak tersedia. Tambahkan deskripsi terlebih dahulu!" });
        }

        const sql = `INSERT INTO tb_batik (id_deskripsi, nama_batik, gambar_batik, tahun_diciptakan) VALUES (?, ?, ?, ?)`;
        db.query(sql, [id_deskripsi, nama_batik,gambar_batik, tahun_diciptakan], (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Server Error!" });
            }
            return res.status(200).json({ message: "Data Batik Berhasil Ditambahkan!" });
        });
    });
}

function addDeskripsi(req, res) {
    const { makna_batik, sejarah, jenis_batik, penggunaan } = req.body;
    const sql = `INSERT INTO tb_deskripsi (makna_batik, sejarah, jenis_batik, penggunaan) VALUES (?, ?, ?, ?)`;
    db.query(sql, [makna_batik, sejarah, jenis_batik, penggunaan ], (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Server Error!" });
        }
        return res.status(200).json({ message: "Berhasil menambahkan Data Batik", id_deskripsi:  result.insertId });
    });
}

function deleteBatik(req, res) {
    const id_batik = req.params.id_batik; 

    const sql = `SELECT tb_batik.*,tb_deskripsi.* FROM tb_batik JOIN tb_deskripsi ON tb_batik.id_deskripsi = tb_deskripsi.id_deskripsi WHERE id_batik = ${id_batik}`;

    db.query(sql, id_batik, (error, result) => {
        if (error) {
            return response(500, [], error.sqlMessage, res);
        }
        if (result.length > 0) {
            const deleteQuery = `DELETE tb_deskripsi FROM tb_batik JOIN tb_deskripsi ON tb_batik.id_deskripsi = tb_deskripsi.id_deskripsi WHERE id_batik = ${id_batik}`;

            db.query(deleteQuery, id_batik, (error, result) => { 
                if (error) {
                    return response(500, [], error.sqlMessage, res);
                }
                if (result.affectedRows > 0) {
                    return response(200, [], "Data Batik telah terhapus", res);
                } else {
                    return response(404, [], "Data deskripsi tidak ditemukan berdsarkan id_batik", res);
                }
            });
        } else {
            return response(404, [], "Data Batik tidak ditemukan", res);
        }
    });
}

function updateBatik(req, res) {
    const id_batik = req.params.id_batik;
    const { id_deskripsi, nama_batik, gambar_batik, tahun_diciptakan } = req.body;

    let updates = [];
    let params = [];

    if (nama_batik) {
        updates.push("nama_batik = ?");
        params.push(nama_batik);
    }
    if (gambar_batik) {
        updates.push("gambar_batik = ?");
        params.push(gambar_batik);
    }
    if (tahun_diciptakan) {
        updates.push("tahun_diciptakan = ?");
        params.push(tahun_diciptakan);
    }
    if (id_deskripsi) {
        updates.push("id_deskripsi = ?");
        params.push(id_deskripsi);
    }

    if (updates.length === 0) {
        return response(400, [], "Tidak ada data yang diperbarui", res);
    }

    // Gunakan parameterized query untuk mencegah SQL injection dan susun query update
    const sql = `UPDATE tb_batik SET ${updates.join(", ")} WHERE id_batik = ?`;
    params.push(id_batik);

    // Eksekusi query update
    db.query(sql, params, (error, result) => {
        if (error) {
            return response(500, [], error.sqlMessage, res);
        }
        if (result && result.affectedRows > 0) {
            const data = {
                status: result.affectedRows,
            }
            return response(201, data, "Berhasil Mengubah Data Batik", res);
        }
        return response(404, [], "Data Batik tidak ditemukan", res);
    });
}

function updateDeskripsi(req, res) {
    const id_deskripsi = req.params.id_deskripsi;
    const { makna_batik, sejarah, jenis_batik, penggunaan } = req.body;

    let updates = [];
    let params = [];

    // Periksa apakah setiap atribut dikirim melalui req.body dan tambahkan ke query dan array parameter jika ada
    if (makna_batik) {
        updates.push("makna_batik = ?");
        params.push(makna_batik);
    }
    if (sejarah) {
        updates.push("sejarah = ?");
        params.push(sejarah);
    }
    if (jenis_batik) {
        updates.push("jenis_batik = ?");
        params.push(jenis_batik);
    }
    if (penggunaan) {
        updates.push("penggunaan = ?");
        params.push(penggunaan);
    }

    if (updates.length === 0) {
        return response(400, [], "Tidak ada data yang diperbarui", res);
    }

    // Gunakan parameterized query untuk mencegah SQL injection dan susun query update
    const sql = `UPDATE tb_deskripsi SET ${updates.join(", ")} WHERE id_deskripsi = ${id_deskripsi}`;
    params.push(id_deskripsi);

    // Eksekusi query update
    db.query(sql, params, (error, result) => {
        if (error) {
            return response(500, [], error.sqlMessage, res);
        }
        if (result && result.affectedRows > 0) {
            const data = {
                status: result.affectedRows,
            }
            return response(201, data, "Berhasil Mengubah Data Deskripsi", res);
        }
        return response(404, [], "Data Deskripsi tidak ditemukan", res);
    });
}

module.exports = { getAllBatik, getBatikById, addBatik, addDeskripsi, deleteBatik, updateBatik, updateDeskripsi }