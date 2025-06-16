// app/api/razorpay/route.ts
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  const body = await req.json();
  const payment_capture = 1;
  const amount = body.amount * 100; // 500 INR in paise
  const currency = "INR";

  const options = {
    amount,
    currency,
    receipt: "receipt_order_74394",
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    return NextResponse.json({ order: response });
  } catch (error) {
    console.error("Order creation error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
