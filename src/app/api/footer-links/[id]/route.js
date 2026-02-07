 
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const id = params.id;
  const body = await request.json();

  try {
    await db.query(`UPDATE footer_links SET ? WHERE id = ?`, [body, id]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
