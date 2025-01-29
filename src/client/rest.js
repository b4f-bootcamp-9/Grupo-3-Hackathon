export const obterCasas = async (requestData) => {
  console.log("Requisição para /api/imoveis:", requestData);

  const response = await fetch("http://localhost:3000/api/imoveis", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Casas retornadas:", data);
    return data;
  } else {
    console.log("Erro na requisição:", response.status);
    return null;
  }
};
