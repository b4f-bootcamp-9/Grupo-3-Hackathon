import mongoose from "mongoose";

const casaSchema = new mongoose.Schema(
  {
    house_name: String,
    distrito: String,
    municipio: String,
    tipo_habitacao: String,
    descricao: String,
    orcamento: String,
    quartos: Number,
    casa_banho: Number,
    varanda: Boolean,
    piscina: Boolean,
    area_ext: Boolean,
    garagem: Boolean,
    ano_constr: Number,
  },
  {
    collection: "casas",
  }
);

export default mongoose.models.Casa || mongoose.model("Casa", casaSchema);
