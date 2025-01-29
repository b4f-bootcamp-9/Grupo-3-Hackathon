"use client";
import React, { useState } from "react";
import ControllableStates from "@/client/components/ControllableStates";
import CheckboxLabels from "@/client/components/CheckboxLabels";
import axios from "axios";
import styles from "@/client/styles/SchoolFilterPage.module.css";
import { obterCasas } from "@/client/rest";

const PagFiltrosCasa = () => {
  const [filters, setFilters] = useState({
    _id: "",
    house_name: "",
    distrito: "",
    municipio: "",
    tipo_habitacao: "",
    min_orcamento: "",
    max_orcamento: "",
    min_ano_constr: "",
    max_ano_constr: "",
    quartos: "",
    casa_banho: "",
    varanda: false,
    piscina: false,
    area_ext: false,
    garagem: false,
    description: "",
  });

  const [casas, setCasas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCasas = async () => {
    setLoading(true);
    try {
      const minOrcamento = filters.min_orcamento || undefined;
      const maxOrcamento = filters.max_orcamento || undefined;

      const requestData = {
        ...filters,
        distrito: filters.distrito || undefined,
        municipio: filters.municipio || undefined,
        min_orcamento: minOrcamento,
        max_orcamento: maxOrcamento,
        min_ano_constr: filters.min_ano_constr || undefined,
        max_ano_constr: filters.max_ano_constr || undefined,
        quartos: filters.quartos ? parseInt(filters.quartos) : undefined,
        casa_banho: filters.casa_banho
          ? parseInt(filters.casa_banho)
          : undefined,
        varanda: filters.varanda || undefined,
        piscina: filters.piscina || undefined,
        area_ext: filters.area_ext || undefined,
        garagem: filters.garagem || undefined,
      };

     const resultado =  await obterCasas(requestData)
     console.log(resultado)
      if (resultado) {
        setCasas(response.data);
      } else {
        toast.error("nao encontrei nenhuma casa")
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMudaFiltro = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleMudaCheckbox = (name, checked) => {
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const formatarOrcamento = (valor) => {
    if (typeof valor === "string") {
      const valorNum = parseFloat(valor);
      if (isNaN(valorNum)) return valor;
      return valorNum.toLocaleString("pt-PT", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
      });
    }
    return "N/A";
  };

  return (
    <div className={styles.pagecontainer}>
      <main className={styles.maincontent}>
        <div className={styles.contentwrapper}>
          <aside className={styles.sidebar}>
            <div className={styles.filtersection}>
              <div className={styles.filterheader}>
                <h3 className={styles.fontmedium}>Filtros</h3>
              </div>
              <div></div>
              <ControllableStates
                dataOptions={["Lisboa", "Porto", "Aveiro", "Beja", "Braga"]}
                labelText="Distrito"
                onChange={(event, newValue) =>
                  handleMudaFiltro("distrito", event)
                }
              />
              <div></div>
              <ControllableStates
                dataOptions={["Oeiras", "Sintra", "Cascais"]}
                labelText="Município"
                onChange={(event, newValue) =>
                  handleMudaFiltro("municipio", event)
                }
              />
              <div></div>
              <ControllableStates
                dataOptions={["Apartamento", "Moradia"]}
                labelText="Tipo de Habitação"
                onChange={(event, newValue) =>
                  handleMudaFiltro("tipo_habitacao", event)
                }
              />
              <div>
                <h5 style={{ marginTop: "1.3rem", fontSize: "1.1rem" }}>
                  Orçamento
                </h5>
              </div>
              <input
                type="number"
                name="min_orcamento"
                placeholder="Orçamento Mínimo"
                value={filters.min_orcamento || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  handleMudaFiltro(
                    "min_orcamento",
                    value ? parseFloat(value) : ""
                  );
                }}
              />
              <input
                type="number"
                name="max_orcamento"
                placeholder="Orçamento Máximo"
                value={filters.max_orcamento || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  handleMudaFiltro(
                    "max_orcamento",
                    value ? parseFloat(value) : ""
                  );
                }}
              />
              <div>
                <h5 style={{ marginTop: "1.0rem", fontSize: "1.1rem" }}>
                  Ano de Construção
                </h5>
              </div>
              <input
                type="number"
                name="min_ano_constr"
                placeholder="Ano de Construção Mínimo"
                onChange={(e) =>
                  handleMudaFiltro("min_ano_constr", e.target.value)
                }
              />
              <input
                type="number"
                name="max_ano_constr"
                placeholder="Ano de Construção Máximo"
                onChange={(e) =>
                  handleMudaFiltro("max_ano_constr", e.target.value)
                }
              />
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Nº de Quartos
                </h5>
              </div>
              <select
                name="quartos"
                value={filters.quartos || ""}
                onChange={(e) => handleMudaFiltro("quartos", e.target.value)}
              >
                {[...Array(7)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Nº de Casas de Banho
                </h5>
              </div>
              <select
                name="casa_banho"
                value={filters.casa_banho || ""}
                onChange={(e) => handleMudaFiltro("casa_banho", e.target.value)}
              >
                {[...Array(7)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Varandas
                </h5>
              </div>
              <CheckboxLabels
                options={["Sim"]}
                name="varanda"
                checked={filters.varanda}
                onChange={(checked) => handleMudaCheckbox("varanda", checked)}
              />
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Piscina
                </h5>
              </div>
              <CheckboxLabels
                options={["Sim"]}
                name="piscina"
                checked={filters.piscina}
                onChange={(checked) => handleMudaCheckbox("piscina", checked)}
              />
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Área Exterior
                </h5>
              </div>
              <CheckboxLabels
                options={["Sim"]}
                name="area_ext"
                checked={filters.area_ext}
                onChange={(checked) => handleMudaCheckbox("area_ext", checked)}
              />
              <div>
                <h5 style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                  Garagem
                </h5>
              </div>
              <CheckboxLabels
                options={["Sim"]}
                name="garagem"
                checked={filters.garagem}
                onChange={(checked) => handleMudaCheckbox("garagem", checked)}
              />
              <button onClick={fetchCasas} className={styles.searchButton}>
                Filtrar
              </button>
            </div>
          </aside>
          <div className={styles.cardscontainer}>
            {loading ? (
              <p>Carregando...</p>
            ) : casas.length > 0 ? (
              casas.map((casa) => (
                <div key={casa._id} className={styles.housecard}>
                  <button className={styles.cardcontent}>
                    <div className={styles.classhouse}>
                      <h2 className={styles.namehouse}>{casa.house_name}</h2>
                      <p className={styles.locationhouse}>
                        {casa.distrito}, {casa.municipio}
                      </p>
                      <p className={styles.descriptionhouse}>
                        {casa.descricao}{" "}
                        <span className={styles.hoverunderline}>ler mais</span>
                      </p>
                      <p className={styles.priceStyle}>
                        <b>Preço:</b> {formatarOrcamento(casa.orcamento)}
                      </p>
                      <p className={styles.yearStyle}>
                        <b>Ano de Construção:</b> {casa.ano_constr}
                      </p>
                    </div>
                    <img
                      src={casa.image_URL || "https://via.placeholder.com/200"}
                      alt={`Casa ${casa.house_name}`}
                      className={styles.imagehouse}
                    />
                  </button>
                </div>
              ))
            ) : (
              <p>Nenhuma casa encontrada</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagFiltrosCasa;
