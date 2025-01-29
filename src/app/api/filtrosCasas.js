import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  try {
    const casas = await getCasasFiltradas(body);
    NextResponse.json(casas, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
