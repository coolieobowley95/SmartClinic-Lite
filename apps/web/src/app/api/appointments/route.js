import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      department,
      preferredDoctor,
      preferredDate,
      preferredTime,
      reason,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !phone ||
      !department ||
      !preferredDate ||
      !preferredTime
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Insert appointment into database
    const result = await sql`
      INSERT INTO appointments (
        full_name,
        phone,
        email,
        department,
        preferred_doctor,
        preferred_date,
        preferred_time,
        reason,
        status
      ) VALUES (
        ${fullName},
        ${phone},
        ${email || null},
        ${department},
        ${preferredDoctor || null},
        ${preferredDate},
        ${preferredTime},
        ${reason || null},
        'pending'
      )
      RETURNING id, full_name, department, preferred_date, preferred_time, created_at
    `;

    return Response.json(
      {
        success: true,
        appointment: result[0],
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return Response.json(
      { error: "Failed to create appointment" },
      { status: 500 },
    );
  }
}

// Get all appointments (for admin/staff view)
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const date = url.searchParams.get("date");

    let query;

    if (status && date) {
      query = sql`
        SELECT * FROM appointments 
        WHERE status = ${status} AND preferred_date = ${date}
        ORDER BY preferred_date DESC, preferred_time ASC
      `;
    } else if (status) {
      query = sql`
        SELECT * FROM appointments 
        WHERE status = ${status}
        ORDER BY preferred_date DESC, preferred_time ASC
      `;
    } else if (date) {
      query = sql`
        SELECT * FROM appointments 
        WHERE preferred_date = ${date}
        ORDER BY preferred_time ASC
      `;
    } else {
      query = sql`
        SELECT * FROM appointments 
        ORDER BY created_at DESC
        LIMIT 100
      `;
    }

    const appointments = await query;

    return Response.json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return Response.json(
      { error: "Failed to fetch appointments" },
      { status: 500 },
    );
  }
}
