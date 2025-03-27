import { NextResponse } from 'next/server';

const ADMIN_BOT_TOKEN = process.env.ADMIN_BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Получаем данные заказа
    const { customerName, orderDetails } = body;

    // Формируем сообщение для отправки в Telegram
    const message = `🎉 Новый заказ!\n\nКлиент: ${customerName}\nДетали заказа: ${orderDetails}`;

    // Отправляем сообщение через админского бота
    await fetch(`https://api.telegram.org/bot${ADMIN_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: ADMIN_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 