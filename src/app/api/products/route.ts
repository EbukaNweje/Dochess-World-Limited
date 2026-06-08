import { NextResponse } from "next/server";
import { connect } from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET(req: Request) {
  await connect();
  const products = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connect();
  const body = await req.json();
  const product = await Product.create(body);
  return NextResponse.json(product);
}

export async function PUT(req: Request) {
  await connect();
  const body = await req.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const product = await Product.findByIdAndUpdate(id, updates, { new: true });
  return NextResponse.json(product);
}

export async function DELETE(req: Request) {
  await connect();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
