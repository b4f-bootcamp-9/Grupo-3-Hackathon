"use client";
import React, { useState } from "react";
import ControllableStates from "@/client/components/ControllableStates";
import CheckboxLabels from "@/client/components/CheckboxLabels";
import styles from "@/client/styles/SchoolFilterPage.module.css";
import { obterCasas } from "@/client/rest";
import { toast } from "react-toastify";
import Header from "@/client/components/header";

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
    image_URL: "",
  });

  const numOptions = [...Array(7)].map((_, i) => i + 1);

  const clientes = [
    {
      _id: "1",
      name: "Alina Silva",
      contact: "(351) 915-765-432",
      email: "alina.silva@email.com",
      valorMaximo: "450000",
      tipoImovel: "Apartamento",
      localizacaoDesejada: "Lisboa, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 3,
        banheirosDesejados: 2,
        areaMinima: 120,
        extras: ["Piscina", "Área Externa", "Garagem"],
      },
    },
    {
      _id: "2",
      name: "Pedro Santos",
      contact: "(351) 912-345-678",
      email: "pedro.santos@email.com",
      valorMaximo: "380000",
      tipoImovel: "Casa",
      localizacaoDesejada: "Cascais, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 4,
        banheirosDesejados: 3,
        areaMinima: 200,
        extras: ["Piscina", "Garagem"],
      },
    },
    {
      _id: "3",
      name: "Izadora Oliveira",
      contact: "(351) 927-777-888",
      email: "izadora.oliveira@email.com",
      valorMaximo: "650000",
      tipoImovel: "Apartamento",
      localizacaoDesejada: "Oeiras, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 2,
        banheirosDesejados: 1,
        areaMinima: 70,
        extras: ["Área Externa", "Garagem"],
      },
    },
    {
      _id: "4",
      name: "Simone Beatriz",
      contact: "(351) 935-555-444",
      email: "simone.beatriz@email.com",
      valorMaximo: "290000",
      tipoImovel: "Casa",
      localizacaoDesejada: "Sintra, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 3,
        banheirosDesejados: 2,
        areaMinima: 150,
        extras: ["Piscina", "Área Externa"],
      },
    },
    {
      _id: "5",
      name: "Ariane Henrique",
      contact: "(351) 963-333-222",
      email: "ariane.h@email.com",
      valorMaximo: "550000",
      tipoImovel: "Apartamento",
      localizacaoDesejada: "Amadora, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 2,
        banheirosDesejados: 2,
        areaMinima: 90,
        extras: ["Garagem", "Área Externa"],
      },
    },
    {
      _id: "6",
      name: "Rafael Costa",
      contact: "(351) 917-777-666",
      email: "rafael.costa@email.com",
      valorMaximo: "850000",
      tipoImovel: "Casa",
      localizacaoDesejada: "Loures, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 4,
        banheirosDesejados: 3,
        areaMinima: 250,
        extras: ["Piscina", "Garagem", "Área Externa"],
      },
    },
    {
      _id: "7",
      name: "Gabriel Santos",
      contact: "(351) 968-888-999",
      email: "gabriel.santos@email.com",
      valorMaximo: "420000",
      tipoImovel: "Apartamento",
      localizacaoDesejada: "Odivelas, Distrito de Lisboa",
      requisitos: {
        quartosDesejados: 2,
        banheirosDesejados: 1,
        areaMinima: 80,
        extras: ["Garagem"],
      },
    },
  ];

  const [casas, setCasas] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const fetchCasas = async () => {
    setLoading(true);
    try {
      const { min_orcamento, max_orcamento, ...restFilters } = filters;
      const requestData = {
        ...restFilters,
        min_orcamento: min_orcamento || undefined,
        max_orcamento: max_orcamento || undefined,
        quartos: filters.quartos !== "" ? parseInt(filters.quartos) : undefined,
        casa_banho:
          filters.casa_banho !== "" ? parseInt(filters.casa_banho) : undefined,
      };
      const resultado = await obterCasas(requestData);
      if (resultado) {
        console.log(resultado);
        setCasas(resultado);
      } else {
        toast.error("Não encontrei nenhuma casa");
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
      [name]: value !== undefined ? value : prev[name],
    }));
  };

  const handleMudaCheckbox = (name, checked) => {
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleFiltrar = (clienteId) => {
    const cliente = clientes.find((cl) => cl._id === clienteId);
    if (cliente) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        tipo_habitacao: cliente.tipoImovel || prevFilters.tipo_habitacao,
        distrito:
          cliente.localizacaoDesejada.split(",")[1]?.trim() ||
          prevFilters.distrito,
        municipio:
          cliente.localizacaoDesejada.split(",")[0]?.trim() ||
          prevFilters.municipio,
        min_orcamento: cliente.valorMaximo || prevFilters.min_orcamento,
        max_orcamento: cliente.valorMaximo || prevFilters.max_orcamento,
        quartos: cliente.requisitos.quartosDesejados || prevFilters.quartos,
        casa_banho:
          cliente.requisitos.banheirosDesejados || prevFilters.casa_banho,
        area_ext: cliente.requisitos.extras.includes("Área Externa"),
        piscina: cliente.requisitos.extras.includes("Piscina"),
        garagem: cliente.requisitos.extras.includes("Garagem"),
      }));
    }
    fetchCasas();
  };

  return (
    
    <div className={styles.pagecontainer}>
       <Header />
      <main className={styles.maincontent}>
        <div className={styles.contentwrapper}>
          <aside className={styles.sidebar}>
            <div className={styles.filtersection}>
              <div className={styles.filterheader}>
                <h3 className={styles.fontmedium}>Filtros</h3>
              </div>

              <h4>Select Client</h4>
              <select
                onChange={(e) => handleFiltrar(e.target.value)}
                defaultValue=""
              >
                <option value="">Select a client</option>
                {clientes.map((cliente) => (
                  <option key={cliente._id} value={cliente._id}>
                    {cliente.name}
                  </option>
                ))}
              </select>

              <ControllableStates
                dataOptions={["Lisboa", "Porto", "Aveiro", "Beja", "Braga"]}
                labelText="Distrito"
                onChange={(newValue) => handleMudaFiltro("distrito", newValue)}
              />

              <ControllableStates
                dataOptions={["Oeiras", "Sintra", "Cascais"]}
                labelText="Município"
                onChange={(newValue) => handleMudaFiltro("municipio", newValue)}
              />
              <ControllableStates
                dataOptions={["Apartamento", "Moradia"]}
                labelText="Tipo de Habitação"
                onChange={(newValue) =>
                  handleMudaFiltro("tipo_habitacao", newValue)
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
                {numOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
                {numOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
                onChange={(checked) =>
                  handleMudaCheckbox("varanda", checked === "Sim")
                }
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
                onChange={(checked) =>
                  handleMudaCheckbox("piscina", checked === "Sim")
                }
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
                onChange={(checked) =>
                  handleMudaCheckbox("area_ext", checked === "Sim")
                }
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
                onChange={(checked) =>
                  handleMudaCheckbox("garagem", checked === "Sim")
                }
              />
              <div></div>
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
                      src={casa.image_URL}
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
