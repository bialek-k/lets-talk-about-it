import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    const transporter = nodemailer.createTransport({
      host: 'najlepszy.email',
      port: 465,
      secure: true, // bo 465 to SSL
      auth: {
        user: process.env.HOME_EMAIL_USER, // np. kontakt@twojadomena.pl
        pass: process.env.HOME_EMAIL_PASS, // hasło do tej skrzynki
      },
    });

    await transporter.sendMail({
      from: `"Potwierdzenie regulaminu" <${process.env.HOME_EMAIL_USER}>`, // nadawca
      to: `${process.env.HOME_EMAIL_USER}`, // odbiorca, np.
      subject: 'Potwierdzenie zapoznania się z regulaminem',
      html: `<p><strong>Imię i Nazwisko:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Coś poszło nie tak' }, { status: 500 });
  }
}
