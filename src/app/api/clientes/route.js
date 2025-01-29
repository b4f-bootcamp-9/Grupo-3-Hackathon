import { NextResponse } from "next/server";
import getClientes from "@/server/services/clientFilters";

export async function GET(req) {
  const body = await req.json();
  try {
    const clientes = await getClientes(body);
    return NextResponse.json(clientes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
