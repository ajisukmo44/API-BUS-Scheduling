const express = require("express");
const models = require("../models");

// cari Jadwal Data Bus
const carijadwal = async (req, res) => {
    try {
        const {
            tanggal,
            terminalRuteId
        } = req.body;

        const Jadwal = await models.JadwalBus.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [models.Bus, models.terminalRute],
            where: {
                "tanggal": tanggal,
                "terminalRuteId": terminalRuteId,
            }
        });

        res.status(200).send({
            status: 200,
            message: "Data Pencarian Berhasil Di Tampilkan",
            data: Jadwal,
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}


// tampilkan semua jadwal bus
const getAllJadwal = async (req, res) => {
    try {
        const JadwalBus = await models.JadwalBus.findAll({

            include: [models.Bus, models.terminalRute],
        })

        res.status(200).send({
            status: 200,
            message: "Berhasil Ambil Data jadwal",
            data: JadwalBus,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}



module.exports = {
    carijadwal,
    getAllJadwal
};