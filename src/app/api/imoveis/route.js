import { NextResponse } from "next/server";
import getCasasFiltradas from "../../../server/services/filters";

export async function POST(req) {
  const body = await req.json();
  try {
    const casas = await getCasasFiltradas(body);
    return NextResponse.json(casas, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
