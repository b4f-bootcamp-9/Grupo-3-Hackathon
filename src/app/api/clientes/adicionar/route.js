const Cliente = require("../models/Cliente");

export async function POST(req) {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    return NextResponse.json({novoCliente}, { status: 201 });
  } catch (error) {
    return NextResponse.json({message: "cenas mas"}, { status: 500 });
  }
}