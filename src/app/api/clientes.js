const express = require("express");
const Cliente = require("../models/Cliente");
const router = express.Router();

router.post("/adicionar", async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar cliente" });
  }
});

router.put("/arquivar/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      { arquivado: true },
      { new: true }
    );
    if (!cliente)
      return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao arquivar cliente" });
  }
});

module.exports = router;
