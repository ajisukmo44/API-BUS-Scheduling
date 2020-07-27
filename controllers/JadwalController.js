const express = require("express");
const models = require("../models");

// Ambil Data Jadwal Bus
const getAllJadwal = async (req, res) => {
    const JadwalBus = await models.JadwalBus.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: [models.Bus, models.terminalRute],
    })

    res.status(200).send({
        status: 200,
        message: "Berhasil Ambil Data Jadwal Bus",
        data: JadwalBus,
    });
};

// Simpan Data Jadwal Bus
const createJadwal = async (req, res) => {
    try {
        const {
            tanggal,
            terminalRuteId,
            busId,
            jamBerangkat,
            jamSampai,
            etimasiWaktuPerjalanan
        } = req.body;

        const JadwalBus = await models.JadwalBus.create({
            tanggal,
            terminalRuteId,
            busId,
            jamBerangkat,
            jamSampai,
            etimasiWaktuPerjalanan
        });

        res.status(200).send({
            status: 200,
            message: "JadwalBus Berhasil Di tambahkan",
            data: JadwalBus,
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

// Update Data Jadwal
const updateJadwal = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            tanggal,
            terminalRuteId,
            busId,
            jamBerangkat,
            jamSampai,
            etimasiWaktuPerjalanan
        } = req.body;

        await models.JadwalBus.update({
            tanggal,
            terminalRuteId,
            busId,
            jamBerangkat,
            jamSampai,
            etimasiWaktuPerjalanan
        }, {
            where: {
                id: id
            }
        })
        res.status(200).send({
            status: 200,
            message: "Jadwal Bus Berhasil Di update"
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

// Delete Data Jadwal Bus
const deleteJadwal = async (req, res) => {
    try {
        const id = req.params.id;
        await models.JadwalBus.destroy({
            where: {
                id: id,
            }
        })
        res.status(200).send({
            status: 200,
            message: "Jadwal Berhasil Di hapus"
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

module.exports = {
    getAllJadwal,
    updateJadwal,
    createJadwal,
    deleteJadwal
};