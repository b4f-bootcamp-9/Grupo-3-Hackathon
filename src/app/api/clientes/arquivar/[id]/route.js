const express = require("express");
const Cliente = require("../models/Cliente");
const router = express.Router();

export async function POST(req) {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      { arquivado: true },
      { new: true }
    );
    if (!cliente) {
      return NextResponse.json({ message: "not_found" }, { status: 404 });
    }
    return NextResponse.json({ message: "archived_success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "cenas_mas" }, { status: 500 });
  }
}