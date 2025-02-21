import mongoose from "mongoose";
const casaSchema = new mongoose.Schema(
  {
    house_name: { type: String },
    distrito: { type: String },
    municipio: { type: String },
    tipo_habitacao: { type: String },
    descricao: { type: String },
    orcamento: { type: String },
    quartos: { type: Number },
    casa_banho: { type: Number },
    varanda: { type: Boolean, default: false },
    piscina: { type: Boolean, default: false },
    area_ext: { type: Boolean, default: false },
    garagem: { type: Boolean, default: false },
    ano_constr: { type: Number },
    image_URL: { type: String },
  },
  { collection: "casas" }
);

export default mongoose.models.Casa || mongoose.model("Casa", casaSchema);
