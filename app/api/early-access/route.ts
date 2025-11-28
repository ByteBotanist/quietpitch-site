// app/api/early-access/route.ts
import { NextRequest, NextResponse } from "next/server";
import { TableClient } from "@azure/data-tables";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

// MUST match your Azure table name exactly (you have QPEarlyAccessSignups)
const tableName = "QPEarlyAccessSignups";
const connectionString = process.env.AZURE_TABLES_CONNECTION_STRING;

if (!connectionString) {
  console.error("❌ AZURE_TABLES_CONNECTION_STRING is not set");
  throw new Error("AZURE_TABLES_CONNECTION_STRING is not set");
}

const tableClient = TableClient.fromConnectionString(
  connectionString,
  tableName
);

export async function POST(req: NextRequest) {
  console.log("➡️  /api/early-access POST hit");

  try {
    const body = await req.json();
    console.log("🧾 Received body:", body);

    const now = new Date().toISOString();

    const entity = {
      partitionKey: "default",
      rowKey: randomUUID(),
      name: body.name ?? "",
      email: body.email ?? "",
      firm: body.firm ?? "",
      notes: body.notes ?? "",
      licensedProfessional: !!body.licensedProfessional,
      createdAt: now,
    };

    console.log("📦 Creating entity:", entity);

    await tableClient.createEntity(entity);

    console.log("✅ Entity written to Azure Table");

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("❌ Error saving early access signup:", err);
    return NextResponse.json(
      { error: "Failed to save early access signup" },
      { status: 500 }
    );
  }
}


