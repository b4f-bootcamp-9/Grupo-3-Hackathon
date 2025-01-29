export const adicionarCliente = async (cliente) => {
  const res = await fetch("http://localhost:3000/clientes/adicionar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });


  if (res.ok) {
    return await res.json()
  }
  return null
};

export const arquivarCliente = async (id) => {
  await fetch(`http://localhost:3000/clientes/arquivar/${id}`, {
    method: "PUT",
  });
};

export const obterCasas = async (requestData) => {
  // const response = await axios.post("/api/imoveis", requestData);
  const response = await fetch("/api/imoveis", {
    method: "POST",
    body: JSON.stringify(requestData)
  });

  if (response.ok) {
    return await res.json()
  }
  return null
}