import { render } from "@react-email/render";

import WelcomeTemplate from "../../../../emails/index";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

const ratelimit = new Ratelimit({
  redis,
  // 2 requests per minute from the same IP address in a sliding window of 1 minute duration which means that the window slides forward every second and the rate limit is reset every minute for each IP address.
  limiter: Ratelimit.slidingWindow(2, "1 m")
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";

  const result = await ratelimit.limit(ip);

  if (!result.success) {
    return Response.json(
      {
        error: "Too many requests!!"
      },
      {
        status: 429
      }
    );
  }

  const { email } = await request.json();

  const html = await render(WelcomeTemplate({ email }));

  const { data, error } = await resend.emails.send({
    from: "Edgar Gago<edgar@useblueos.com>",
    to: [email],
    subject: "Thank you for wailisting BlueOS",
    replyTo: "edgar@useblueos.com",
    html
  });

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
