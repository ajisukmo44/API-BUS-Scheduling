const express = require("express");
const models = require("../models");

// Ambil data Terminal Rute
const getAllTerminal = async (req, res) => {
    const Terminal = await models.terminalRute.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    });

    res.status(200).send({
        status: 200,
        message: "Berhasil Ambil Data Rute Terminal",
        data: Terminal,
    });
};

// Simpan Data Terminal Rute
const createTerminal = async (req, res) => {
    try {
        const {
            terminalAsal,
            terminalTujuan,
            deskripsi
        } = req.body;

        const Terminal = await models.terminalRute.create({
            terminalAsal,
            terminalTujuan,
            deskripsi
        });

        res.status(200).send({
            status: 200,
            message: "Rute Berhasil Di tambahkan",
            data: Terminal,
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

// Update Data Terminal Rute 
const updateTerminal = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            terminalAsal,
            terminalTujuan,
            deskripsi
        } = req.body;
        const Terminal = await models.terminalRute.update({
            terminalAsal,
            terminalTujuan,
            deskripsi
        }, {
            where: {
                id: id
            }
        })
        if (Terminal > 0) {
            res.status(200).send({
                status: 200,
                message: "Data Rute Terminal Berhasil Di Update"
            });
        } else {
            res.status(404).send({
                status: 404,
                message: "Data Rute Terminal Tidak Di Temukan"
            });
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        });
    }
}

// Delete Data Rute Terminal

const deleteTerminal = async (req, res) => {
    try {
        const id = req.params.id;
        const TerminalHapus = await models.terminalRute.destroy({
            where: {
                id: id,
            }
        })
        if (TerminalHapus > 0) {
            res.status(200).send({
                status: 200,
                message: "Data Rute Terminal Berhasil Di Hapus"
            });
        } else {
            res.status(404).send({
                status: 404,
                message: "Data Rute Terminal Tidak Di Temukan"
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
    getAllTerminal,
    createTerminal,
    updateTerminal,
    deleteTerminal,
};