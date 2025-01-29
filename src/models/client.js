const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  valorMaximo: Number,
  tipoImovel: String,
  localizacaoDesejada: String,
  requisitos: {
    quartosDesejados: Number,
    banheirosDesejados: Number,
    areaMinima: Number,
    extras: [String],
  },
  arquivado: { type: Boolean, default: false },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
