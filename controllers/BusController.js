const express = require("express");
const models = require("../models");

// Ambil Data Bus
const getAllBus = async (req, res) => {
    const ambilBus = await models.Bus.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })

    res.status(200).send({
        status: 200,
        message: "Data Bus Berhasil Di Ambil",
        data: ambilBus,
    });
};


// Simpan Data Bus
const createBus = async (req, res) => {
    try {
        const {
            nopol,
            namaBus,
            kapasitas,
            fasilitas,
            fotoBus
        } = req.body;

        const Bus = await models.Bus.create({
            nopol,
            namaBus,
            kapasitas,
            fasilitas,
            fotoBus
        });

        res.status(200).send({
            status: 200,
            message: "Data Bus Berhasil Di tambahkan",
            data: Bus,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

// Update Data Bus
const updateBus = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            nopol,
            namaBus,
            kapasitas,
            fasilitas,
            fotoBus
        } = req.body;

        const updatebus = await models.Bus.update({
            nopol,
            namaBus,
            kapasitas,
            fasilitas,
            fotoBus,
        }, {
            where: {
                id: id
            }
        })
        if (updatebus > 0) {
            res.status(200).send({
                status: 200,
                message: "Data Bus Berhasil Di Update"
            });
        } else {
            res.status(404).send({
                status: 404,
                message: "Data Bus Tidak Di Temukan"
            });
        }

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}


//Hapus Data bus
const deleteBus = async (req, res) => {
    try {
        const id = req.params.id;
        const deletebus = await models.Bus.destroy({
            where: {
                id: id,
            }
        })
        if (deletebus > 0) {
            res.status(200).send({
                status: 200,
                message: "Data Bus Berhasil Di hapus"
            });
        } else {
            res.status(404).send({
                status: 404,
                message: "Data Bus Tidak Di Temukan"
            });
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

module.exports = {
    getAllBus,
    createBus,
    updateBus,
    deleteBus
};