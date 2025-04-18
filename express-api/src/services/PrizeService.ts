import nodemailer from 'nodemailer';
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

/**
 * Отправляет письмо пользователю о завершении темы
 * @param userEmail Email пользователя
 * @param topicTitle Название темы
 */
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
    html: `<p style="text-align: center;"><img alt="Mars" src="https://downloader.disk.yandex.ru/preview/7188514eaa75ec3c30172936deb5a63598f453cd72551f9d0211544c710c0861/67fe6f9d/txwtISVLIba5wIn4JBvGTsa_WbHkUOyKRhY7D4NJtq_-1PLaewBEvdT7a_VPDzx2SrQ2iv5VSo7ad6zdNziEVw%3D%3D?uid=0&filename=3.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x935" width="300" /></p>
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

const topicAttachments: Record<string, string[]> = {
    'Техника и космос': ['./prizes/deserteye.jpg','./prizes/ballhash.jpg'],
    'Культура': ['./prizes/clouds.jpg', './prizes/river.jpg'],
    'Жизнь замечательных людей': ['./prizes/islands.jpg', './prizes/soyuz.jpg'],
    'Самарские предприятия, проложившие путь в космос': ['./prizes/moon.jpg', './prizes/sunrise.jpg']
  };

export async function sendCompletionEmail(userEmail: string, topicName: string, userName: string, stars: number): Promise<void> {
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
    html: `<p style="text-align: center;"><img alt="Mars" src="https://downloader.disk.yandex.ru/preview/af0de0cb738359d8e2ffda7fe5c36d0153737da6b983cc45151ee61736911bce/67edbf7d/UqB5QTAuJ9ubx_mtG2gT3ca_WbHkUOyKRhY7D4NJtq_InAzVmkGm94KQxDXolZMPckGQZruN_HOlvJH5tH1SWA%3D%3D?uid=0&filename=2.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x935" width="300" /></p>
<p style="text-align: center;"><strong>${userName}, поздравляю!</strong></p>
<p style="text-align: center;"><strong>Ты настоящий знаток космонавтики! </strong></p>
<p style="text-align: center;">Ты ответил на все вопросы маршрута &laquo;${topicName}&raquo; и набрал ${stars} баллов.&nbsp;</p>
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