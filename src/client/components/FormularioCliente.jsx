import React, { useState } from "react";
import { adicionarCliente } from "../api/clientesApi";
import BotaoSalvar from "./BotaoSalvar";

const FormularioCliente = () => {
  const [cliente, setCliente] = useState({
    _id: "",
    name: "",
    contact: "",
    email: "",
    valorMaximo: "",
    tipoImovel: "",
    localizacaoDesejada: "",
    requisitos: {
      quartosDesejados: "",
      banheirosDesejados: "",
      areaMinima: "",
      extras: [],
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarCliente({ ...cliente, _id: Date.now().toString() });
    setCliente({
      _id: "",
      name: "",
      contact: "",
      email: "",
      valorMaximo: "",
      tipoImovel: "",
      localizacaoDesejada: "",
      requisitos: {
        quartosDesejados: "",
        banheirosDesejados: "",
        areaMinima: "",
        extras: [],
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={cliente.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contato"
        value={cliente.contact}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={cliente.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="valorMaximo"
        placeholder="Valor Máximo"
        value={cliente.valorMaximo}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tipoImovel"
        placeholder="Tipo de Imóvel"
        value={cliente.tipoImovel}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="localizacaoDesejada"
        placeholder="Localização Desejada"
        value={cliente.localizacaoDesejada}
        onChange={handleChange}
        required
      />
      <BotaoSalvar onClick={handleSubmit} />
    </form>
  );
};

export default FormularioCliente;
