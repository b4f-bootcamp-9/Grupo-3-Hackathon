import React from "react";

const BotaoSalvar = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Salvar Cliente
    </button>
  );
};

export default BotaoSalvar;
