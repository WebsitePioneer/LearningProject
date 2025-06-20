// app/api/verify-recaptcha/route.js
export async function POST(request) {
  const body = await request.json();
  const token = body.token;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, errorCodes: data['error-codes'] }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
