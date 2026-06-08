import { NextResponse } from "next/server";
import { connect } from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET() {
  try {
    await connect();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to load products. Check your MongoDB environment variable.",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connect();
    const body = await req.json();
    const product = await Product.create(body);
    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to create product. Check your MongoDB environment variable.",
      },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connect();
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to update product. Check your MongoDB environment variable.",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connect();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to delete product. Check your MongoDB environment variable.",
      },
      { status: 500 },
    );
  }
}
