import connectToDatabase from "@/server/utils/db";
import Casa from "@/server/models/house";

const getCasasFiltradas = async (filters) => {
  console.log("CARALHO:", filters);
  const {
    distrito,
    municipio,
    tipo_habitacao,
    min_orcamento,
    max_orcamento,
    min_ano_constr,
    max_ano_constr,
    quartos,
    casa_banho,
    varanda,
    piscina,
    area_ext,
    garagem,
  } = filters;

  await connectToDatabase();

  const filter = {};

  if (tipo_habitacao) filter.tipo_habitacao = tipo_habitacao;

  if (distrito) filter.distrito = distrito;

  if (municipio) filter.municipio = municipio;

  if (min_orcamento || max_orcamento) {
    filter.orcamento = {};
    if (min_orcamento) filter.orcamento.$gte = Number(min_orcamento);
    if (max_orcamento) filter.orcamento.$lte = Number(max_orcamento);
  }

  if (min_ano_constr || max_ano_constr) {
    filter.ano_constr = {};
    if (min_ano_constr) filter.ano_constr.$gte = parseInt(min_ano_constr);
    if (max_ano_constr) filter.ano_constr.$lte = parseInt(max_ano_constr);
  }

  if (quartos) filter.quartos = parseInt(quartos);
  if (casa_banho) filter.casa_banho = parseInt(casa_banho);

  if (varanda !== undefined) filter.varanda = Boolean(varanda);
  if (piscina !== undefined) filter.piscina = Boolean(piscina);
  if (area_ext !== undefined) filter.area_ext = Boolean(area_ext);
  if (garagem !== undefined) filter.garagem = Boolean(garagem);

  console.log("PUTA QUE PARIU", filter);
  return await Casa.find(filter);
};

export default getCasasFiltradas;
