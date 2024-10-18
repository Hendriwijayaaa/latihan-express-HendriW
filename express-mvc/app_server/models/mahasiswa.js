const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama: {
        Type: String,
    },
    npm: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tenggal_lahir:{
        type: Date,
    },
    aktif: {
        type: Boolean,
    }
});

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaschema);
module.export = Mahasiswa;