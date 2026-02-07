 
import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const { is_visible, label } = body;  
    const updates = [];
    const values = [];

    if (typeof is_visible !== "undefined") {
      updates.push("is_visible = ?");
      values.push(is_visible ? 1 : 0);
    }

    if (typeof label !== "undefined") {
      updates.push("label = ?");
      values.push(label);
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    values.push(params.id);  

    const sql = `UPDATE header_links SET ${updates.join(", ")} WHERE id = ?`;
    await db.query(sql, values);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error in PATCH /api/header-links/[id]:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
