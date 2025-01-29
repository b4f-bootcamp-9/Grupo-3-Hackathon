export const adicionarCliente = async (cliente) => {
  await fetch("http://localhost:3000/clientes/adicionar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
};

export const arquivarCliente = async (id) => {
  await fetch(`http://localhost:3000/clientes/arquivar/${id}`, {
    method: "PUT",
  });
};
