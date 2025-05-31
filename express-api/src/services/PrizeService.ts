import nodemailer from 'nodemailer';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

export async function sendNewUserEmail1(userEmail: string, userName: string): Promise<void> {
  try {
    const response = await axios.post('http://odysseymars.com/api/v0/sendemail?key=ZfMtsgkd$2RpkWWx', {
      email: userEmail,
      name: userName,
      prize: 'registration',
    });

    console.log('Ответ от внешнего API:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
};

export async function sendNewUserEmail(userEmail: string, userName: string): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: `Одиссея Марса – приз за регистрацию`,
    html: `<p style="text-align: center;"><img alt="Mars" src="https://downloader.disk.yandex.ru/preview/5bd78cabf73dc0884bc7dce8bc614be82706dc66e0ebd7cc22d7ef5e9e13fcdb/681a4fda/UtkeXK6qzAyfpeMwa1h-Wsa_WbHkUOyKRhY7D4NJtq_gpff4z8NiIiml-WZd_at8K6FjbnWl-VkKcmTQ8BJ6_w%3D%3D?uid=0&filename=1.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x935" width="300" /></p>
</strong></p>
<p style="text-align: center;"><strong>Привет, ${userName}!</strong></p>
<p style="text-align: center;"><strong>Я &ndash; Марс! </strong>Я познакомлю тебя с нашими героями, космонавтами!<strong>&nbsp;</strong></p>
<p style="text-align: center;">В знак нашей зарождающейся дружбы я <strong>дарю тебе авторский космический стикерпак </strong>от художника Анастасии Петровой.</p>
<p style="text-align: center;">Вот твоя <a href="https://t.me/addstickers/OdysseyOfMars" target="_blank">ссылка на приз</a>.</p>
<p style="text-align: center;"><strong>Спасибо, что решил поиграть со мной! </strong></p>
<p style="text-align: center;"><strong>Твой Марс!</strong></p>
`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email отправлен на ${userEmail}`);
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
  }
}

const starsAttachments: Record<number , string> = {
  30: './prizes/tsiolkovsky.jpg',
  60: './prizes/Leonov.jpg',
  90: './prizes/horzions.jpg',
  120: './prizes/shuttle.jpg'
};

export async function sendStarsEmail(userEmail: string, userName: string, stars: number): Promise<void> {
  const prizePath = starsAttachments[stars];
  const attachments = fs.existsSync(prizePath)
  ? [{
      filename: path.basename(prizePath),
      path: prizePath,
      contentType: 'image/jpg' 
    }]
  : [];
  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: `Одиссея Марса – приз за получение баллов`,
    text: `Отличные новости! Вы уже получили ${stars} баллов. Продолжайте в том же духе!`,
    html: `<p style="text-align: center;"><img alt="Mars" src="https://downloader.disk.yandex.ru/preview/86bc0b00b81527d54d2e33bfdb43396120611b1e042b0aac41bcb4e8e5392312/681a4fda/txwtISVLIba5wIn4JBvGTsa_WbHkUOyKRhY7D4NJtq_-1PLaewBEvdT7a_VPDzx2SrQ2iv5VSo7ad6zdNziEVw%3D%3D?uid=0&filename=3.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x935" width="300" /></p>
<p style="text-align: center;"><strong>${userName}, поздравляю!</strong></p>
<p style="text-align: center;"><strong>Ты настоящий знаток космонавтики! </strong></p>
<p style="text-align: center;">Ты набрал уже целых ${stars} баллов.&nbsp;</p>
<p style="text-align: center;">За это я хочу подарить тебе <strong>картину космического хужожника Просочкиной Анастасии.</strong> Ты можешь её использовать как заставки рабочего стола или распечатать и повесить на стену!</p>
<p style="text-align: center;">Давай наберём больше баллов?!</p>
<p style="text-align: center;"><strong>Твой Марс!</strong></p>
`,
    attachments
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email отправлен на ${userEmail}`);
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
  }
}

export async function sendStarsEmail1(userEmail: string, userName: string, stars: number): Promise<void> {
  try {
    const response = await axios.post('http://odysseymars.com/api/v0/sendemail?key=ZfMtsgkd$2RpkWWx', {
      email: userEmail,
      name: userName,
      count: `prize ${stars}`,
      prize: 'stars',
      score: stars
    });
    console.log('Ответ от внешнего API:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
}

const topicAttachments: Record<string, string[]> = {
    'Техника и космос': ['./prizes/deserteye.jpg','./prizes/ballhash.jpg'],
    'Культура': ['./prizes/clouds.jpg', './prizes/river.jpg'],
    'Жизнь замечательных людей': ['./prizes/islands.jpg', './prizes/soyuz.jpg'],
    'Самарские предприятия, проложившие путь в космос': ['./prizes/moon.jpg', './prizes/sunrise.jpg']
  };

export async function sendCompletionEmail1(userEmail: string, topicName: string, userName: string, stars: number): Promise<void> {
    const prizePaths = topicAttachments[topicName];
    const imageUrl = "http://localhost:5001/prizes/2.PNG";
    const attachments = prizePaths
      .filter(prizePath => fs.existsSync(prizePath)) // Фильтруем только существующие файлы
      .map(prizePath => ({
        filename: path.basename(prizePath), // Имя файла
        path: prizePath, // Путь к файлу
        contentType: 'image/jpg' // Замените на нужный тип
      }));
  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: `Одиссея Марса – приз за прохождение темы`,
    text: `Отличные новости! Вы завершили тему "${topicName}". Продолжайте в том же духе!`,
    html: `<p style="text-align: center;"><img alt="Mars" src="https://downloader.disk.yandex.ru/preview/300d3465fef37352875cdc882915e9058a1fa17007449acfee41d878f28f612b/681a4fda/UqB5QTAuJ9ubx_mtG2gT3ca_WbHkUOyKRhY7D4NJtq_InAzVmkGm94KQxDXolZMPckGQZruN_HOlvJH5tH1SWA%3D%3D?uid=0&filename=2.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x935" width="300" /></p>
<p style="text-align: center;"><strong>${userName}, поздравляю!</strong></p>
<p style="text-align: center;"><strong>Ты настоящий знаток космонавтики! </strong></p>
<p style="text-align: center;">Ты ответил на все вопросы темы &laquo;${topicName}&raquo; и набрал ${stars} баллов.&nbsp;</p>
<p style="text-align: center;">За это я хочу подарить тебе <strong>уникальные фотографии Героя РФ, лётчика-космонавта Артемьева Олега Германовича.</strong> Ты можешь их использовать как заставки рабочего стола или распечатать и повесить на стену!</p>
<p style="text-align: center;">Давай пройдем следующую тему вместе?!</p>
<p style="text-align: center;"><strong>Твой Марс!</strong></p>
`,
    attachments
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email отправлен на ${userEmail}`);
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
  }
}

const topics: Record<string, string> = {
    'Техника и космос': 'spacetech',
    'Культура': 'culture',
    'Жизнь замечательных людей': 'peoplelife',
    'Самарские предприятия, проложившие путь в космос': 'samaraindustry'
  };

export async function sendCompletionEmail(userEmail: string, topicName: string, userName: string, stars: number): Promise<void> {
  const topic = topics[topicName];
  console.log(topic);
  try {
    const response = await axios.post('http://odysseymars.com/api/v0/sendemail?key=ZfMtsgkd$2RpkWWx', {
      email: userEmail,
      name: userName,
      topic: topic,
      prize: 'topic',
      score: stars
    });
    console.log('Ответ от внешнего API:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
}