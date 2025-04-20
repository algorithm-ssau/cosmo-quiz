import Question from "./models/Question";
import Topic from "./models/Topic";
import Author from "./models/Author";

export default async function initDatabase() {
  let Kotelnikov = new Author({
    name: "Котельников Геннадий Петрович",
    whoAuthor: "Академик РАН, Председатель Самарской Думы",
    desc: "Академик РАН, заслуженный деятель науки Российской Федерации, Председатель Самарской губернской Думы, Президент Самарского государственного медицинского университета, Председатель Совета ректоров Самарской области, заведующий кафедрой травматологии, ортопедии и экстремальной хирургии",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Котельников.png"
  });
  await Kotelnikov.save();

  let Ren = new Author({
    name: "Рень Виктор Алексеевич",
    whoAuthor: "Герой РФ, Инструктор-испытатель",
    desc: "Герой Российской Федерации, полковник, Инструктор-испытатель авиационно-космической техники, Свыше 900 полётов в воздушной лаборатории для проверки влияния перегрузок и невесомости на человека, Свыше 2000 парашютных прыжков, Более 400 часов работы под водой в скафандрах",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Рень.png"
  });
  await Ren.save();

  let Stepanova = new Author({
    name: "Степанова Анастасия Александрова",
    whoAuthor: "Участник «Марс 160», Испытатель-исследователь ",
    desc: "Участница международного проекта Марс 160, Испытатель-исследователь экипажа изоляционного имитационного полета к Луне «SIRIUS-19», Космический журналист, волонтер-спасатель отряда Спасрезерв",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Степанова.png"
  });
  await Stepanova.save();

  let Vinogradov = new Author({
    name: "Виноградов Павел Владимирович",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 87/363 (России/мира), 3 полёта – 546 сут. 22 час. 33 мин., 7 выходов в открытый космос – 38 час. 27 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Виноградов.png"
  });
  await Vinogradov.save();

  let Prokopiev = new Author({
    name: "Прокопьев Сергей Валерьевич",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 122/554 (России/мира), 2 полёта – 567 сут. 15 час. 12 мин., 8 выходов в открытый космос – 55 час. 14 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Прокопьев.png"
  });
  await Prokopiev.save();

  let Lazarenko = new Author({
    name: "Лазаренко Александр Юрьевич",
    whoAuthor: "Ветеран поисково-спасательного отдела",
    desc: "Ветеран поисково-спасательного отдела космонавтов",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Лазаренко.png"
  });
  await Lazarenko.save();

  let Shkaplerov = new Author({
    name: "Шкаплеров Антон Николаевич",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 111/521 (России/мира), 3 полёта – 533 сут. 05 час. 31 мин., 2 выхода в открытый космос – 14 час. 28 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Шкаплеров.png"
  });
  await Shkaplerov.save();

  let Lazutkin = new Author({
    name: "Лазуткин Александр Иванович",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 86/356 (России/мира), 1 полёт – 184 сут. 22 час. 7 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Лазуткин.png"
  });
  await Lazutkin.save();

  let Korolev = new Author({
    name: "Королёв Андрей Вадимович",
    whoAuthor: "Внук С.П. Королёва",
    desc: "Внук советского учёного, конструктора С.П. Королёва, д.м.н., профессор, хирург-ортопед-травматолог, профессор Российского университета дружбы народов, главный врач и директор Европейской клиники спортивной травматологии и ортопедии ECSTO",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Королев.png"
  });
  await Korolev.save();

  let Artemiev = new Author({
    name: "Артемьев Олег Германович",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, к.э.н., Космонавт 118/534 (России/мира), 3 полёта – 560 сут. 18 час. 7 мин., 8 выходов в открытый космос – 53 час. 31 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Артемьев.png"
  });
  await Artemiev.save();

  let Filatova = new Author({
    name: "Филатова Тамара Дмитриевна",
    whoAuthor: "Племянница Ю.А. Гагарина",
    desc: "Племянница первого космонавта Ю.А. Гагарина, Заведующая мемориальным отделом Объединенного мемориального музея Ю.А. Гагарина (г. Гагарин)",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Филатова.png"
  });
  await Filatova.save();

  let Kotov = new Author({
    name: "Котов Олег Валерьевич",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 100/452 (России/мира), 3 полёта – 526 сут. 6 час. 2 мин., 3 выхода в открытый космос – 37 час. 19 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Котов.png"
  });
  await Kotov.save();

  let Prosochkina = new Author({
    name: "Просочкина Анастасия",
    whoAuthor: "Художник, иллюстратор и дизайнер An.Pro ART",
    desc: "Художник, иллюстратор и дизайнер An.Pro ART, Автор космического арт-календаря",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Просочкина.png"
  });
  await Prosochkina.save();

  let Zhdanova = new Author({
    name: "Жданова Александра Николаевна",
    whoAuthor: "Доцент, к.т.н., Популяризатор космонавтики",
    desc: "Популяризатор космонавтики, Автор книги для детей про животных в космосе, Доцент Самарского университета, к.т.н.",
    avatar: ""
  });
  await Zhdanova.save();

  let Babkin = new Author({
    name: "Бабкин Андрей Николаевич",
    whoAuthor: "Космонавт-испытатель Роскосмоса",
    desc: "Космонавт-испытатель отряда космонавтов Роскосмоса, к.т.н., Ведущий научный сотрудник РКК «Энергия»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Бабкин.png"
  });
  await Babkin.save();

  let Yurchenko = new Author({
    name: "Юрченко Екатерина Сергеевна",
    whoAuthor: "Инструктор по исследованию Земли из космоса",
    desc: "Инструктор по подготовке к экспериментам по исследованию Земли из космоса Центра подготовки космонавтов имени Ю. А. Гагарина",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Юрченко.png"
  });
  await Yurchenko.save();

  let Titov = new Author({
    name: "Титов Владимир Георгиевич",
    whoAuthor: "Герой СССР, Лётчик-космонавт",
    desc: "Герой Советского Союза, Лётчик-космонавт СССР, Космонавт 54/118 (России/мира), 4 полёта – 387 сут. 00 час. 45 мин., 4 выхода в открытый космос – 18 час. 48 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Титов.png"
  });
  await Titov.save();

  let Cherkasov = new Author({
    name: "Черкасов Андрей Николаевич",
    whoAuthor: "Инженер-испытатель «НПП «Звезда»",
    desc: "Инженер-испытатель АО «НПП «Звезда»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Черкасов.png"
  });
  await Cherkasov.save();

  let Kornienko = new Author({
    name: "Корниенко Михаил Борисович",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 106/511 (России/мира), 2 полёта – 516 сут. 10 час. 43 мин., Участник годовой экспедиции, 2 выхода в открытый космос – 12 час. 17 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Корниенко.png"
  });
  await Kornienko.save();

  let Koroleva = new Author({
    name: "Королёва Наталия Сергеевна",
    whoAuthor: "Дочь С.П. Королёва",
    desc: "Дочь советского учёного, конструктора С.П. Королёва, д.м.н., Профессор кафедры госпитальной хирургии 1-го МГМУ имени И. М. Сеченова, Лауреат Государственной премии, автор книг",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Королева.png"
  });
  await Koroleva.save();

  let Soifer = new Author({
    name: "Сойфер Виктор Александрович",
    whoAuthor: "Академик РАН",
    desc: "Академик РАН, заслуженный деятель науки Российской Федерации, Президент Самарского университета",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Сойфер.png"
  });
  await Soifer.save();

  let Korzun = new Author({
    name: "Корзун Валерий Григорьевич",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 85/351 (России/мира), 2 полёта – 381 сут. 15 час. 41 мин., 4 выхода в открытый космос – 22 час. 20 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Корзун.png"
  });
  await Korzun.save();

  let Baranov = new Author({
    name: "Баранов Дмитрий Александрович",
    whoAuthor: "Генеральный директор РКЦ «Прогресс»",
    desc: "Заслуженный конструктор Российской Федерации, к.т.н., Генеральный директор АО «РКЦ «Прогресс»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Баранов.png"
  });
  await Baranov.save();

  let Kikina = new Author({
    name: "Кикина Анна Юрьевна",
    whoAuthor: "Космонавт-испытатель Роскосмоса",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 129/592 (России/мира), 1 полёт – 157 сут. 10 час. 1 мин., Первый российский космонавт на корабле Crew Dragon",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Кикина.png"
  });
  await Kikina.save();

  let Avdeev = new Author({
    name: "Авдеев Сергей Васильевич",
    whoAuthor: "Герой РФ, Лётчик-космонавт",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, к.ф.-м.н., Космонавт 74/277 (России/мира), 3 полёта – 747 сут. 14 час. 14 мин., 10 выходов в открытый космос – 41 час. 59 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Авдеев.png"
  });
  await Avdeev.save();

  let Serduk = new Author({
    name: "Сердюк Александр Владимирович",
    whoAuthor: "Старший преподаватель по физподготовке ЦПК",
    desc: "Cтарший тренер-преподаватель по физической подготовке Центра подготовки космонавтов имени Ю. А. Гагарина",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Сердюк.png"
  });
  await Serduk.save();

  let Fedyaev = new Author({
    name: "Федяев Андрей Валерьевич",
    whoAuthor: "Космонавт-испытатель Роскосмоса",
    desc: "Герой Российской Федерации, Лётчик-космонавт РФ, Космонавт 130/600 (России/мира), Военный летчик 2-го класса, 1 полёт – 185 сут. 22 час. 42 мин.",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Федяев.png"
  });
  await Fedyaev.save();

  let Tihonov = new Author({
    name: "Тихонов Николай Владимирович",
    whoAuthor: "Космонавт-испытатель Роскосмоса",
    desc: "Космонавт-испытатель отряда космонавтов Роскосмоса, Инженер РКК «Энергия»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Тихонов.png"
  });
  await Tihonov.save();

  let Leonov = new Author({
    name: "Леонов Алексей Архипович 1934-2019",
    whoAuthor: "",
    desc: "Дважды Герой Советского Союза, Лётчик-космонавт СССР №11, Генерал-майор авиации, к.т.н., Первый человек, вышедший в открытый космос, Участник первого международного космического полета «Союз-Аполлон»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Леонов.png"
  });
  await Leonov.save();

  let Tkachenko = new Author({
    name: "Ткаченко Сергей Иванович 1950-2017",
    whoAuthor: "",
    desc: "Профессор кафедры космического машиностроения Самарского университета, д.т.н., заместитель Генерального конструктора по научной работе АО «РКЦ «Прогресс», Главный конструктор серии малых космических аппаратов «АИСТ»",
    avatar: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/C8yQ/edCR2PMBj/Ткаченко.png"
  });
  await Tkachenko.save();
  
  let topic = new Topic({
    name: "Техника и космос",
    questions: [],
  });

  let question = new Question({
    author: Kotelnikov._id,
    name: "Костюмчик на выход",
    question: "Невесомость приводит к общему ухудшению состояния здоровья. Сегодня космические экспедиции длятся около полугода. Во время них космонавты каждый день занимаются спортом минимум два часа, а перед возвращением на Землю используют нагрузочный костюм. С помощью специальных прорезиненных жгутов он позволяет придать телу нагрузку, похожую на земную. Назовите название нагрузочного костюма, благодаря которому космонавты возвращаются на Землю немного ослабевшими, но все же здоровыми.",
    answer: "Перед посадкой космонавты используют нагрузочный костюм «Пингвин».\n\nКроме космических задач, ещё одно применение этого костюма нашлось и на Земле: он помогает больным восстановить организм после инсульта. На Земле «Пингвин» стал называться «Регентом». Он помогает прямо стоять, двигаться, даёт необходимую нагрузку мышцам и даже восстанавливает у пациентов речь.",
    words: ["Пингвин"],
    questionVideo:"https://rutube.ru/play/embed/2154a6760eb27b89795b1083d3c18919/?p=SGe6tm2RINVR5t1ezGncQA",
    answerVideo:"https://rutube.ru/play/embed/9a486e3321896266aecf68fc0dac9d6b/?p=nmsfnMAJQEiPWyAvjQJBvw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Ren._id,
    name: "Новый старт",
    question: "Назовите космодром, при пуске с которого трасса выведения пилотируемого транспортного корабля в основном проходит над водной поверхностью.",
    answer: "Космодром «Восточный». Он расположен в Амурской области. При стартах с него трасса выведения корабля с космонавтами на борту в основном будет пролегать над Охотским морем и Тихим океаном. И «морские выживания» — это очень важный элемент подготовки, потому что в случае несрабатывания одной из ступеней ракеты-носителя космонавты будут приводняться в эту стихию и действовать в этих условиях.",
    words: ["Восточный"],
    questionVideo:"https://rutube.ru/play/embed/e6aa7ddce25f06cd437248a3135f4a76/?p=Q__5FvnFY35aTXPol3ffuQ",
    answerVideo:"https://rutube.ru/play/embed/a42d093ac65956c2960ef9af10cc5101/?p=WYGssZNmNODMRpTTRgi2fw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Stepanova._id,
    name: "На пыльных дорожках",
    question: "Средняя температура Марса –55 градусов, его атмосфера на 95% состоит из углекислого газа. Диаметр Марса почти в 2 раза меньше диаметра Земли. А сколько процентов составляет сила тяжести на поверхности Красной планеты относительно земной?",
    answer: "37%. То есть если ваша масса на Земле равна 100 кг, то на Марсе вы будете весить всего 37.",
    words: ["37"],
    questionVideo:"https://rutube.ru/play/embed/67e37960bd8c070acb43f51978f5045d/?p=9Ca7eUxFAxMHqLqQUo5mcA",
    answerVideo:"https://rutube.ru/play/embed/a7f0b619e194122eced9494ab5d03d06/?p=hGKB5OkqgMEuCPvODGSCpQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Vinogradov._id,
    name: "Звездный сосед",
    question: "Как называется звезда самая близкая к Солнцу и нашей Солнечной системе?",
    answer: "К Солнечной системе ближе всего звезда, которую мы называем Альфа Центавра. На самом деле в этом месте три звезды: Альфа Центавра А, Альфа Центавра В и Проксима Центавра. «Proxima» в переводе с греческого переводится как «ближайшая». Но мы говорим, что Альфа Центавра ближайшая звезда к нашей Солнечной системе.", 
    words: ["Альфа", "Центавра"],
    questionVideo:"https://rutube.ru/play/embed/81dbb98d59afe07a285bdb12934f1f17/?p=QqxQ_4_4HSOQjmBl3qzO0Q",
    answerVideo:"https://rutube.ru/play/embed/056f8ff4d17033b016e94699246a64fe/?p=fT2Jefo8JawjObaW-PmOUw",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Prokopiev._id,
    name: "Космос-арена",
    question: "Какое природное явление космонавты видят 16 раз в сутки?",
    answer: "Восход Солнца. На орбите день сменяется ночью 16 раз, так как продолжительность полного оборота корабля вокруг Земли составляет приблизительно полтора часа. При этом сумерки и рассветы длятся всего лишь несколько минут.", 
    words: ["Восход"],
    questionVideo:"https://rutube.ru/play/embed/a6803d13c2bfcd338c2df92f4b579876/?p=lu4DV7y1408eumpNEBiWBA",
    answerVideo:"https://rutube.ru/play/embed/5342e3dfbbd4a4328e3f5eed9ce93122/?p=PfXwd6OMHxraaS6a7Lop8Q",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Lazarenko._id,
    name: "Космические посадки",
    question: "За сколько часов происходит возвращение космонавтов с орбиты: от момента расстыковки корабля с МКС до посадки?",
    answer: "3 или 4", 
    words: ["3"],
    questionVideo:"https://rutube.ru/play/embed/360277d7c85be813b553d435aad0db59/?p=N57yU0V7mgQDgi4DkyBBVg",
    answerVideo:"https://rutube.ru/play/embed/4a1a8541c68a348b6fa85763ff4b387c/?p=uhwW7nb0YZifQVocuIQbuw",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Shkaplerov._id,
    name: "Как за каменной стеной",
    question: "Какова толщина стенок Международной космической Станции (в миллиметрах)?",
    answer: "3.\n\nДля защиты космонавтов и приборов от агрессивной космической среды стенки Международной космической станции имеют многослойную структуру: сначала идет противометеороидная защита – это тонкий лист алюминия около 1 мм, затем пустое пространство, а затем герметичная оболочка. Толщина стенок герметичной оболочки модулей МКС составляет три миллиметра. Толщина стенок связана с проблемой подъема веса в космос. Поскольку МКС движется по сравнительно невысокой орбите, существует вероятность столкновения станции с космическим мусором: обломками космических аппаратов или микрометеоритами. Учитывая космические скорости, даже малые объекты способны нанести серьёзный урон станции. В связи с этим орбиту МКС приходится регулярно корректировать. Для этого ненадолго включают двигательную установку, которая выдаёт импульс и уводит станцию на более высокую орбиту во избежание столкновения.",
    words: ["3"],
    questionVideo:"https://rutube.ru/play/embed/99126b8490b4e3fa00cd05229cb1662c/?p=qJpRkWGA2mAJmWEJ1KNu0Q",
    answerVideo:"https://rutube.ru/play/embed/e35e26eeb7f6c46979b0cbc4f10dc96a/?p=ew_ziRKyitkRSt9Zdc_6tg",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Lazutkin._id,
    name: "К полету готов",
    question: "Вне зависимости от типа и предназначения все российские скафандры названы в честь НИХ. О ком идет речь?",
    answer: "В честь птиц: Беркут, Ястреб, Кречет, Сокол, Орлан, Стриж" ,    
    words: ["Птицы"],
    questionVideo:"https://rutube.ru/play/embed/af855d5cb511c6c3646cd2f8e999bc84/?p=YQbVnmte_9CrPHaNB_5M7w",
    answerVideo:"https://rutube.ru/play/embed/61ea00c9f46b459c5a5548259119acc3/?p=8iISxDH7DF3nyk5RIQWlew",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Korolev._id,
    name: "За гранью возможного",
    question: "Вспомните названия пилотируемых кораблей, созданных под руководством С.П. Королева",
    answer: "«Восток», «Восход», «Союз»" ,
    words: ["Восток", "Восход", "Союз"],
    questionVideo:"https://rutube.ru/play/embed/1187433f226df42d36067163fcffafd9/?p=AmT3kkTcR6jCLJ-2raMPfg",
    answerVideo:"https://rutube.ru/play/embed/f1f272211b4097f5cf675322628db4fd/?p=asiIr76LSTqpv0na4IaJxQ",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Ren._id,
    name: "Упавшая звезда",
    question: "Что делают в Центре подготовки космонавтов при подготовке к космическим полетам для того, чтобы члены экипажа сохранили жизнь и здоровье?",
    answer: "Тренировки по выживанию.\n\nДля того, чтобы обеспечить жизнь и деятельность, а также сохранить здоровье, космические экипажи и космонавты отдельно проходят подготовку в Центре подготовки космонавтов в различных климатах и географических зонах, это лесисто-болотистая местность зимой, это пустыня, это степь зимой, это горы и на акватории моря также проходят подготовку и тренировку космонавты. Заключительную часть поисково-спасательных операций они завершают тренировками по подъему на борт вертолета, который находится в режиме висения, с суши и водной поверхности." ,
    words: ["Тренировки", "по", "Выживанию"],
    questionVideo:"https://rutube.ru/play/embed/4426abd8d216b8d4f848b2a0e728c0a2/?p=o0nf5ggAgFKhItRXEiQKNw",
    answerVideo:"https://rutube.ru/play/embed/e1afc26c417d97a7378573c673b14258/?p=dpFStl_PI36BhlZsppmymg",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Artemiev._id,
    name: "Трещин нет!",
    question: "Начало пути Юрия Алексеевича Гагарина в авиации тоже было связано с посадкой. Он был невысокого роста и во время обучения в летном училище оказался на грани отчисления, так как не мог корректно выполнить посадку. Заметив это, один из руководителей предложил Юрию положить на сидение самолета этот предмет. Назовите этот предмет.",
    answer: "Подушка" ,
    words: ["Подушка"],
    questionVideo:"https://rutube.ru/play/embed/8a60308e174e704c933c710350c9dbd8/?p=uLZQpzITPxUgloUgUch4pw",
    answerVideo:"https://rutube.ru/play/embed/8011ebdcda525366efbc8c567886b79b/?p=9NHFPgygo_QBFIebRV8lJg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Stepanova._id,
    name: "Пункт назначения",
    question: "Транспортное сообщение между двумя этими пунктами налажено около 50 лет назад, но грузообмен явно неравномерен. В пункте Б на данный момент находится примерно 170 тонн различных грузов и материалов, доставленных из пункта А, в то время как пункт А за все это время получил всего 382 килограмма из пункта Б. Назовите пункты А и Б в правильном порядке.",
    answer: "Земля, Луна. На Землю доставлено 328 кг образцов лунного грунта и пыли, а на Луне оставлено 170 тонн мусора: 65 спутников и их обломков, луноходы, памятные таблички, и даже мячик для гольфа." ,
    words: ["Земля", "Луна"],
    questionVideo:"https://rutube.ru/play/embed/d0c687a1ff4d21f2f322a8f91c3d88e3/?p=I_5XsCQl06jt7fjSKvemNA",
    answerVideo:"https://rutube.ru/play/embed/06952b1de9e159fda43c984775547a95/?p=UATepiQN3GsCVOvYlTf-wA",
  });
  await question.save();
  topic.questions.push(question._id);

  await topic.save();
  
  //-----------------------------

  topic = new Topic({
    name: "Культура",
    questions: [],
  });

  question = new Question({
    author: Filatova._id,
    name: "Музыкальная пауза",
    question: "Ещё одна песня, написанная Дмитрием Шостаковичем на слова Евгения Долматовского в 1950 году, неразрывно связана с началом космической эры. Первоначально она создавалась как «песня-позывной» для лётчика. Стала известна в исполнении солиста и хора, ещё большую популярность песня получила после того, как её спел Юрий Алексеевич Гагарин в первом космическом полёте. Назовите название этой песни",
    answer: "Родина слышит" ,
    words: ["Родина", "Слышит"],
    questionVideo:"https://rutube.ru/play/embed/27872c16fa5441b47ef44994dc0e7cd4/?p=TvqJ8qGbSHDvW2LMyrCE9Q",
    answerVideo:"",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Prokopiev._id,
    name: "Космическая физика",
    question: "В классической механике существует теорема теннисной ракетки о неустойчивости вращения твёрдого тела относительно второй главной оси инерции. Проявление этой теоремы в невесомости названо в честь советского космонавта, который заметил это явление 25 июня 1985 года, находясь на борту космической станции «Салют-7». Назовите фамилию этого космонавта.",
    answer: "Эффект Джанибекова. Владимир Александрович, скрутив в невесомости гайку-барашек с длинной шпильки, заметил, что она немного пролетает и разворачивается на 180°, потом, ещё немного пролетев, опять разворачивается.",     
    words: ["Джанибеков"],
    questionVideo:"https://rutube.ru/play/embed/dd71c6a5812d5cec8a358b72d32a42fc/?p=UUV6W70g-_hAJoxK5O3DlQ",
    answerVideo:"https://rutube.ru/play/embed/78aeb49e4b49a6fe09e7ec1dd790858b/?p=Lzb8GLg8Kjf6tMJepiKF4Q",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Kotov._id,
    name: "Про любовь",
    question: "Памятник товарищу Сухову посвящён главному персонажу фильма, которого блестяще сыграл актёр Анатолий Борисович Кузнецов. Этот памятник расположен здесь не случайно. Ведь именно в Самару писал свои трогательные письма красноармеец Сухов. Назовите имя «единственной и незабвенной» Фёдора Ивановича",
    answer: "Катерина Матвеевна" ,
    words: ["Катерина"],
    questionVideo:"https://rutube.ru/play/embed/3fd10df327d60c40a7b0eac1b21eab3f/?p=zQUGmBC3PdLuicUTJ41_sg",
    answerVideo:"https://rutube.ru/play/embed/d09482314d1589ad796b793c904ae01f/?p=BgK_tFgLn6D1_yY1vgh_XA",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Prosochkina._id,
    name: "Космический художник",
    question: "Среди космонавтов тоже есть талантливые художники. Картины этого человека хранятся в Третьяковской галереи. Назовите фамилию первого космического художника.",
    answer: "Дважды Герой Советского Союза, первый человек, вышедший в открытый космос – Алексей Архипович Леонов", 
    words: ["Леонов"],
    questionVideo:"https://rutube.ru/play/embed/c4cec088ea317d5e512debe5d2d28118/?p=CYf_G4JwSJEvavgrydz7kA",
    answerVideo:"https://rutube.ru/play/embed/1341980b2933cfade1da31047395c09b/?p=JQS5mzCh2z7njksOeREUEg",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Zhdanova._id,
    name: "Священное писание",
    question: "В одной книге рассказывается о первых космических полетах. Автор шутит, что люди отправили в космос разделённый на части груз этого «плавательного средства». Оно отсылает нас к одной из священных книг. Назовите это плавательное средство, состоящее из двух слов",
    answer: "Ноев ковчег", 
    words: ["Ноев", "Ковчег"],
    questionVideo:"https://rutube.ru/play/embed/524a8878758e4467aa6a32fbd07241af/?p=gcPoTzJuLwB-IFEIeU9Xig",
    answerVideo:"https://rutube.ru/play/embed/ee9eeea8df58a4b10ed6b584655a41bc/?p=259GjbNW0celnmEV01iExg",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Babkin._id,
    name: "Учитель",
    question: "Этот человек происходил из польского дворянского рода, но был «обычным» сельским учителем. Преподавал арифметику и геометрию, а стал основоположником теоретической космонавтики. Он первый пришёл к выводу о необходимости использования «ракетных поездов» — прототипов многоступенчатых ракет. Автор научно-фантастических произведений, сторонник и пропагандист идей освоения космического пространства. Его именем назван кратер на Луне и малая планета «1590», открытая 1 июля 1933 года. В 2015 году его имя присвоено городу, построенному близ космодрома «Восточный». В Самаре, Москве, Санкт-Петербурге, а также во многих других населённых пунктах есть улицы его имени. Назовите фамилию этого ученого.",
    answer: "Циолковский Константин Эдуардович – «отец» теоретической космонавтики. Многие его идеи воплотил в жизнь Сергей Павлович Королев. Циолковский предлагал заселить космическое пространство с использованием орбитальных станций, выдвинул идеи космического лифта, поездов на воздушной подушке. Считал, что развитие жизни на одной из планет Вселенной достигнет такого могущества и совершенства, что это позволит преодолевать силы тяготения и распространять жизнь по Вселенной.", 
    words: ["Циолковский"],
    questionVideo:"https://rutube.ru/play/embed/f2c291205c4e79e252a67c1ebd40a4c1/?p=PlPL1oszqBAGurvWrTj4aw",
    answerVideo:"https://rutube.ru/play/embed/f2c291205c4e79e252a67c1ebd40a4c1/?p=PlPL1oszqBAGurvWrTj4aw",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Artemiev._id,
    name: "Древние цивилизации",
    question: "Константин Эдуардович Циолковский из-за глухоты рано оказался наедине с собой, со своими мыслями, он мерил жизнь и мир собственной меркой, иначе определял границы между реальным и воображаемым. И стирал их. Своё отношение к жизни он описал в одной очень увлекательной книге, в которой отмечал, что самое важное для него – «не прожить даром жизнь». О какой книге идет речь?",
    answer: "Космическая философия", 
    words: ["Космическая", "Философия"],
    questionVideo:"https://rutube.ru/play/embed/a6ae70b364e90935d28eb46ff8d0c338/?p=_12hyVKX2hgs544lrNlU9g",
    answerVideo:"https://rutube.ru/play/embed/deb2225d6982d6f427b07345844c8c58/?p=yk3rfzZT0vTHrsQAv6zJjQ",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Filatova._id,
    name: "Космическая «нетленка»",
    question: "Однажды осенью 1960 года срочно потребовалась песня о завоевании космического пространства великим советским народом — позже выяснилось, что задание о песне было спущено с самого верха, от советского правительства. сотрудник Всесоюзного радио Владимир Войнович, набравшись храбрости, предложил в качестве поэта себя. На другое утро он показал комиссии свои стихи. Музыка О.Фельцмана была готова уже через несколько часов, а Владимир Трошин стал первым исполнителем. Назовите название этой песни на слова Войновича, планы озвученные в которой спустя почти 60 лет так и остаются пока мечтой.",
    answer: "14 минут до старта.", 
    words: ["14", "Минут", "До", "Старта"],
    questionVideo:"https://rutube.ru/play/embed/e4019448e2d8aa54805b76e86a15a680/?p=LtZ0-Z_eqlJUWekoN82-hw",
    answerVideo:"",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Prokopiev._id,
    name: "Мертвая станция",
    question: "Об отопительной батарее в 1987 году в космосе мечтали два космонавта, когда, прилетев на станцию, они узнали, что температура внутри нее примерно 3 – 5°С. Запасы воды, оставшиеся на станции, замёрзли. Температура была настолько низкой, что приходилось надевать тёплые комбинезоны, шерстяные шапки и варежки. Это произошло из-за сбоя системы ориентации солнечных батарей, что повлекло отключение всей системы электропитания станции. Эта история описана в книге «Записки с мертвой станции», а в 2017 году по этой книге был снят фильм. Назовите фамилии космонавтов и название «мертвой» станции",
    answer: "Владимир Джанибеков и Виктор Савиных, станция «Салют-7»", 
    words: ["Джанибеков", "Савиных", "Салют-7"],
    questionVideo:"https://rutube.ru/play/embed/8384b21c5b4a222586663bdc0fa022d1/?p=PcTzepbi9QGaDyhNH8FeFw",
    answerVideo:"https://rutube.ru/play/embed/d1e1a14baa04fec57c90113e03e61da6/?p=ZJ3_Jsbaz7JlfnJUyGmU2g",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Yurchenko._id,
    name: "Искусство обмана",
    question: "Айзек Азимов писал, что, когда женщина занимается макияжем, она творит из Хаоса ЭТО. Что имел ввиду известный фантаст?",
    answer: "Космос.  Женщина «приводит себя в порядок», «порядок» по-гречески — «космос», откуда и происходит «косметика»", 
    words: ["Космос"],
    questionVideo:"https://rutube.ru/play/embed/bcde9887783e93307aeb85fb25bca13a/?p=63PxiZ-apJCI-9qDVfd1bg",
    answerVideo:"https://rutube.ru/play/embed/aae9435c5c65dfe64c0d0d720e6b0f99/?p=EbfinWVAdFUkSXMSaID8sQ",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Titov._id,
    name: "Ключ на старт",
    question: "Все космонавты берут с собой на борт игрушку. На какой минуте полета игрушка выполняет свое предназначение?",
    answer: "8 или 9\nИгрушка для космонавтов – это индикатор невесомости. Через 528 секунд игрушка взлетает, именно так экипаж понимает, что все идет штатно и они уже в космосе.", 
    words: ["8"],
    questionVideo:"https://rutube.ru/play/embed/6a0d13dc8d77da5ce32ac541d9d9f533/?p=a0G27BwKGqer6uhvknOqtQ",
    answerVideo:"https://rutube.ru/play/embed/b3cbce5619ee7a401f733021508be5a4/?p=ZtojK-nBwtuyKfCVhqB8ZQ",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Cherkasov._id,
    name: "Знаете, каким он парнем был",
    question: "Одной из самых известных его песен стала – «Знаете, каким он парнем был». Песня-посвящение Ю.А. Гагарину. Назовите фамилии композитора и автора стихов данного произведения.",
    answer: "Александра Пахмутова и Николай Добронравов.\nСупруги Пахмутова и Добронравов были не просто поклонниками первого космонавта. Они его прекрасно знали, поскольку были друзьями. Юрий Алексеевич стал первым слушателем их «Нежности», которую всегда называл одной из самых любимых своих песен.\nСтрока «Опустела без тебя Земля» с 27 марта 1968 года зазвучала особенно трагически: не стало прекрасного человека. Это событие страшно потрясло чету. Откликом стал цикл из четырех песен, получивший название «Созвездие Гагарина». Однако самым удачным песенным сочинением стала песня «Знаете, каким он парнем был».", 
    words: ["Пахмутова", "Добронравов"],
    questionVideo:"https://rutube.ru/play/embed/787a2556db474a0eaaec23f03d948825/?p=6tw1s2jxEvDf_f62BlXPeQ",
    answerVideo:"https://rutube.ru/play/embed/e67fea97cb9fec0e61cb555b39dc233d/?p=ODcddEkkfqW50nE1HuCm_Q",
  });
  await question.save();
  topic.questions.push(question._id);
  
  question = new Question({
    author: Kornienko._id,
    name: "Сила духа",
    question: "Чтобы сократить после полёта время реабилитации, на МКС космонавт должен ежедневно заниматься около двух с половиной часов. Силовых упражнений нет — только аэробные: если нарастить мышечную массу, можно не поместиться в кресло, и тогда вернуться на Землю будет затруднительно. Назовите явление, которое является главным «врагом» мышц в космосе.",
    answer: "Невесомость. Первое и самое очевидное последствие невесомости — стремительное атрофирование мышц: мускулатура фактически выключается из деятельности человека, в результате падают все физические характеристики организма.", 
    words: ["Невесомость"],
    questionVideo:"https://rutube.ru/play/embed/9f517d45b7b90e609129a78c757717c0/?p=PUy1lYw3ye2vdbuO8LwuLA",
    answerVideo:"https://rutube.ru/play/embed/bb46a9ee7a93bcac5d3b84edce9600ad/?p=cv2Cu2r0I_xylYpt8QgVdg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Lazutkin._id,
    name: "Поля без границ",
    question: "Играли ли когда-нибудь люди в космосе в гольф? Назовите количество раз (0, если не играли никогда).",
    answer: "2 раза. Первый удар клюшкой по мячу в космосе нанес в 1971 году астронавт Алан Шепард на поверхности Луны во время экспедиции Аполлон-14. Из-за слабого лунного притяжения и отсутствия атмосферы мячик пролетел несколько километров.\n23 ноября 2006 года российский космонавт Михаил Тюрин во время выхода в открытый космос на Международной космической станции произвёл удар по мячу для гольфа. Мячик для гольфа, являющийся космическим мусором, не представлял опасности для МКС и, войдя в плотные слои атмосферы, сгорел.", 
    words: ["2"],
    questionVideo:"https://rutube.ru/play/embed/9e7750c72c2d6c087d0386f12fbaedf3/?p=6wWTvj0fkTUJRU_YmaWUOQ",
    answerVideo:"https://rutube.ru/play/embed/1c0b63be46799a4ae91fdcad7212d810/?p=pGqicA4fw_Mza5V__eNUoQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Koroleva._id,
    name: "Хвостатые герои",
    question: "Какие до полета в космос были имена у собак Белки и Стрелки?",
    answer: "У собак Белки и Стрелки были имена Капля и Вильна", 
    words: ["Капля", "Вильна"],
    questionVideo:"https://rutube.ru/play/embed/04c485922296757585ad222c04684aa2/?p=-ebtncoMXT5b251lWZ1ouQ",
    answerVideo:"https://rutube.ru/play/embed/4c325a4fe44ca9ebe9c353a8680ab995/?p=4XzAuUkZjyQ2FCsir0-EAg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Soifer._id,
    name: "Поэма о космонавте",
    question: "В стихотворении В.Высоцкого «Поэма о космонавте» есть такие строки:\n" +
              "Вот мой дублер, который мог быть Первым,\n" + 
              "Который смог впервые стать вторым.\n" +
              "Пока что на него не тратят шрифта —\n" +
              "Запас заглавных букв на одного.\n" +
              "Мы с ним вдвоем прошли весь путь до лифта,\n" +
              "Но дальше я поднялся без него.\n" +
    "Назовите фамилию этого известного всем Героя",
    answer: "Второй космонавт мира, дублер Юрия Алексеевича Гагарина – Герман Степанович Титов", 
    words: ["Титов"],
    questionVideo:"https://rutube.ru/play/embed/3d66fc05cbc26415fcec562d4f0270fb/?p=-KQO5vMzvBBSG5h1a3JVCA",
    answerVideo:"https://rutube.ru/play/embed/617e0eb71313e27311cbe3d6ffc791c8/?p=2y11nxja2KJMgq7uTpSw8g",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Artemiev._id,
    name: "Океан вселенной",
    question: "Отбытие экипажа на старт всегда сопровождает песня сверхпопулярной некогда группы «Земляне». Вспомните название этой песни",
    answer: "Трава у дома", 
    words: ["Трава","у", "Дома"],
    questionVideo:"https://rutube.ru/play/embed/07af8841a7b66095387d613473c14b07/?p=Y68xyOiX6VtthrS5zrEW4g",
    answerVideo:"https://rutube.ru/play/embed/2bf4f00beae09c3102a2a368a77ec364/?p=rUUYNXemmhkfIG165hy7vw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Filatova._id,
    name: "На земле и в космосе",
    question: "В честь Гагарина называли улицы, скверы, школы, университеты и прочее. Кроме этого, существует сорт гладиолусов, посвященный Гагарину. Как называются эти гладиолусы",
    answer: "Улыбка Гагарина",
    words: ["Улыбка", "Гагарина"],
    questionVideo:"https://rutube.ru/play/embed/a6d45f18b2927377ca3156b36fa9fbf8/?p=S_oCFgpH3OxuP9pSmkqnVw",
    answerVideo:"",
  });
  await question.save();
  topic.questions.push(question._id);

  await topic.save();

  //-----------------------------

  topic = new Topic({
    name: "Жизнь замечательных людей",
    questions: [],
  });

  question = new Question({
    author: Zhdanova._id,
    name: "На удачу",
    question: "У Сергея Павловича Королева был другой любимый головной убор. С осени и до ранней весны он всегда носил его. Сергей Павлович был тоже весьма суеверным человеком, и этот предмет непременно был на нем во время каждого старта. О каком головном уборе идет речь?",
    answer: "Легендарная шляпа Королева известна каждому, на всех фото со стартов он обязательно был в ней. Дочь легендарного конструктора, Наталья Сергеевна Королева, передала этот уникальный экспонат в Музей авиации и космонавтики Самарского университета имени Сергея Павловича Королева, где она бережно хранится и по сей день.",
    words: ["Шляпа"],
    questionVideo:"https://rutube.ru/play/embed/4508854f652cddee83663fc54dcc279f/?p=LgFZjbL9BgsCfDYM0f1Hcw",
    answerVideo:"https://rutube.ru/play/embed/236af773698a5f42ad85f4432cb001cd/?p=7qvaGUGaG3IpEaJNzta8Tw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Artemiev._id,
    name: "Заключённый",
    question: "В 1944 г. отечественные инженеры впервые получили возможность ознакомиться с немецкой ракетной техникой: в их распоряжение попали элементы конструкции ракеты А-4. Назовите общеизвестное название этой ракеты.",
    answer: "Фау-2 – первая в мире баллистическая ракета дальнего действия, разработанная немецким конструктором Вернером фон Брауном. Именно во многом с запуска модифицированных ракет Фау-2 начались советские и американские ракетные программы.",
    words: ["Фау-2"],
    questionVideo:"https://rutube.ru/play/embed/6dc4b2329300c09e7ff267bc613b27c1/?p=VCJ_aZt7XtjOXLRIwXt-MA",
    answerVideo:"https://rutube.ru/play/embed/49d7d28795cb00c9c7ada9171c0b5527/?p=GUau7YKNvaTvYx-PoqmdqQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Korolev._id,
    name: "Свет далеких планет",
    question: "Исследование каких планет проводилось под руководством С.П. Королева?",
    answer: "Венера, Марс",
    words: ["Венера", "Марс"],
    questionVideo:"https://rutube.ru/play/embed/70e2fe6189b0fedb695bbcef4d127783/?p=NlhW3dKt_EAdYWPvrwY-Kw",
    answerVideo:"https://rutube.ru/play/embed/a673e289d5cae5266c6d17ff36519fdd/?p=me-DiZ7rb6ZvIbRZ6aNXMw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Artemiev._id,
    name: "Секреты космонавтики",
    question: "Королев был настолько засекречен, что когда он приехал в, так называемый, «домик на Волге» и хотел войти, сотрудник КГБ попытался этому воспрепятствовать. Так как в лицо его знали только начальники. Назовите фамилию человека, к которому на встречу шел Королев",
    answer: "12 апреля 1961 года Юрий Гагарин сказал свое знаменитое «Поехали». И в тот же самый день первого космонавта Земли принимали в «домике на Волге». В тот день он встречался с техническими специалистами, а на следующий день, после отчета Госкомиссии и доклада по «вч» (закрытой правительственной связи) Хрущеву, он звонил своей маме — Анне Тимофеевне. \n" +
        "Сегодня этот телефон хранится в музее ФСБ по Самарской области.",
    words: ["Гагарин"],
    questionVideo:"https://rutube.ru/play/embed/7553a73d603ea5a00f20c3a00ed04069/?p=WxmXjg6OJAE1HK2OIHLvcA",
    answerVideo:"https://rutube.ru/play/embed/7b7ea75cbf26cd9cb7cde38c77d77e1c/?p=j6r-a1koH_VIsfJqGyJuNA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Cherkasov._id,
    name: "Семейные узы",
    question: "В истории отечественной космонавтики есть потомственные космонавты, когда дети осознанно выбирают путь своих отцов и становятся достойными их продолжателями в профессии космонавта. Назовите фамилии космических династии.",
    answer: "Александр Волков летал в космос 3 раза. На Земле он дослужился до командира отряда космонавтов, но любимое дело пришлось оставить из-за родного сына, выбравшего – космос. Таков закон – отец и сын служить в одной части не могут. На счету Сергея Волкова 2 длительных полета. Теперь Волковы вписаны в историю космонавтики, как первая в мире космическая династия.\n" +
        "Путь к звездам продолжила вторая космическая династия – Юрий Романенко и его сын Роман. Юрий Романенко трижды летал в космос.  Кроме того, он стал первым космическим бардом. В свободное от работы время в космосе он писал песни. И даже свой космический дневник он вел тоже в стихотворной форме. На счету Романа 2 длительных полета.\n",
    words: ["Волков", "Романенко"],
    questionVideo:"https://rutube.ru/play/embed/5b555efef477f87e56e05f8d0b2afb66/?p=aKRoXiKnFluwX4khO3gwRg",
    answerVideo:"https://rutube.ru/play/embed/d54407d30afb13ba55389b4f9aaff499/?p=-zOF3QmuvrIWcFIQsP--Jg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Kornienko._id,
    name: "Родной край",
    question: "Четыре космонавта родились в Самарской области. Назовите их в алфавитном фамилии.",
    answer: "Михаил Борисович Корниенко родился в Сызрани, Алексей Алексеевич Губарев – родился в селе Гвардейцы, Олег Юрьевич Атьков – в селе Хворостянка, Сергей Васильевич Авдеев – родом из Чапаевска",
    words: ["Авдеев", "Атьков", "Губарев", "Корниенко"],
    questionVideo:"https://rutube.ru/play/embed/a7ed689695c6b3d07371c7e0ded2b0d5/?p=Ck9J5dcndrQE9PVh5VMW2g",
    answerVideo:"https://rutube.ru/play/embed/c6e053d315877ccb83ef97c84b969773/?p=E_QVLruikjAAX_k2DnGnug",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Kotelnikov._id,
    name: "Астрокошка",
    question: "В космос успешно запускали не только собак, но и наиболее близких человеку по физиологии обезьян. А вот судьба кошек-космонавтов, к сожалению, не сложилась. На данный момент достоверно подтверждён полет в космос единственного представителя вида. Назовите имя этой астрокошки.",
    answer: "Чёрно-белая кошка Фелисетт является единственной кошкой-космонавтом. Ее запуск осуществил французский Центр авиационной медицины 18 октября 1963 года. Ракета-носитель поднял менее чем за 15 минут капсулу с кошкой  на высоту 160 км. Затем капсула на парашюте опустилась на землю, где была найдена поисковой командой.",
    words: ["Фелисетт"],
    questionVideo:"https://rutube.ru/play/embed/d760002e04343850580b7d77329ab305/?p=rxfdtm-Vyj3b8cSGPO-glQ",
    answerVideo:"https://rutube.ru/play/embed/712674c4e073ac09921f963e646cf653/?p=OuxRwN-LC9E-FCd_OjuAJw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Korzun._id,
    name: "Опередивший время",
    question: "15 ноября 1988 года состоялся полет советского многоразового орбитального корабля «Буран». Впервые в истории «челнок» успешно приземлился в автоматическом режиме и попал в книгу рекордов Гиннесса. «Шаттлы» сажали исключительно вручную. Назовите фамилию летчика-космонавта, научившего «летать» Буран",
    answer: "Командиром отряда испытателей «Бурана» был назначен Игорь Петрович Волк — опытный советский лётчик-испытатель, суммарно налетавший на всех летательных аппаратах более 7 тысяч часов. А отряд прозвали «волчьей стаей».",
    words: ["Волк"],
    questionVideo:"https://rutube.ru/play/embed/db26a7c97706ee01de89373c27875dd6/?p=4GJZYDAvS11HpNsZYBJ06w",
    answerVideo:"https://rutube.ru/play/embed/19eca05864fe5f072408d2f457177b52/?p=eNy12R90gQVbg7fFV_EbJg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Lazutkin._id,
    name: "Домик над Волгой",
    question: "Перед полётом в космос Юрий Гагарин имел звание старшего лейтенанта. Какое воинское звание было присвоено ему в городе Куйбышеве после полета в космос?",
    answer: "Юрий Гагарин пропустил воинское звание капитана и сразу стал майором",
    words: ["Майор"],
    questionVideo:"https://rutube.ru/play/embed/b8d5f657ee5caadd5f417ea34807d712/?p=uWyLklvuDUooJF0f9XbsHg",
    answerVideo:"https://rutube.ru/play/embed/e7a17c4636837c1cad8f74d846edbc86/?p=47oMQ1H6cJxf_PgWLFkSew",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Artemiev._id,
    name: "Первопроходец",
    question: "12 апреля 1961 года первый космонавт Ю.А. Гагарин приземлился на поле колхоза имени Шевченко, близь деревни Смеловка в 27 километрах южнее города Энгельса. После посадки подобравшего его вертолета удивленный председатель колхоза вручил ему награду. Как называется первая медаль, которой был награжден Юрий Алексеевич после полета?",
    answer: "Медаль «За освоение целинных земель». Ей награждаются колхозники, работники совхозов, строительных и других организаций, партийные, советские, профсоюзные и комсомольские работники за хорошую работу на освоении целинных и залежных земель в районах Казахстана, Сибири, Урала, Поволжья и Северного Кавказа.\n" +
        "После случая с Гагариным награждение этой медалью стало традицией, она вручалась на месте посадки и многим другим космонавтам.\n",
    words: ["За", "освоение", "целинных", "земель"],
    questionVideo:"https://rutube.ru/play/embed/be6007a4915a85e3df0c73efd48c040f/?p=KQ-ne0WSAKNMt7PA1zsFww",
    answerVideo:"https://rutube.ru/play/embed/b468ba4905f53a57b9acaf520ee47434/?p=H36PGA7x_DI-T3ukgHxVEA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Koroleva._id,
    name: "Минуты, изменившие мир",
    question: "Сколько минут длился первый в мире полет человека в космос?",
    answer: "Первый в мире полет человека в космос – полет Юрия Гагарина длился 108 минут или 1 час 48 минут",
    words: ["108"],
    questionVideo:"https://rutube.ru/play/embed/64015cad4312f8c6fa807277605572fb/?p=mDbKTYMXsRKAGtMl7RUhnQ",
    answerVideo:"https://rutube.ru/play/embed/95c72b2302d044eb0fe3e363c81f2600/?p=ylfjPOv9_ByHMB6YhTPnsQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Baranov._id,
    name: "Великолепная шестерка",
    question: "В 1946 году перед ведущими конструкторами СССР ставилась единая цель – создание баллистических, а затем и космических ракет. Для управления этой системой был создан координационный орган, который хоть и имел совещательно-консультативные функции, однако его члены обладали необходимыми полномочиями для формирования направления развития советской ракетно-космической программы и смежных исследований. Вспомните название этого совещательного органа",
    answer: "Совет Главных Конструкторов или просто Совет Главных просуществовал с 1946 по 1966 гг. Сергей Павлович Королев еще в 30-е годы понял, что главное в работе – это команда. Благодаря слаженной работе Совета Главных удалось осуществить главную мечту человечества и обеспечить успешный запуск межконтинентальной баллистической ракеты Р-7. \n" +
        "В наше время, по каждому космическому, ракетно-космическому и ракетному комплексу существуют «Советы главных», составленные из высокопоставленных представителей предприятий-смежников. Этот орган решает организационные и технические вопросы в реальном режиме времени.\n",
    words: ["Совет", "Главных"],
    questionVideo:"https://rutube.ru/play/embed/f9c499258982e7ddc9eb457dea4dcfc1/?p=J7_hcN5XUEcCrTNVytRtAg",
    answerVideo:"https://rutube.ru/play/embed/4623fd53e37bf6a448ffcb1733683ed2/?p=wocFSlP641AtT1s5TgZFmA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Kikina._id,
    name: "Покорившая небо",
    question: "Один из основных факторов космического полёта — элемент риска и опасности, заставляющий быть готовым быстро принимать правильные решения, — моделирует специальная парашютная подготовка. У истоков парашютной подготовки космонавтов стояла ЭТА удивительная хрупкая женщина. К моменту зачисления в отряд космонавтов она уже выполнила около 700 прыжков. А общее число прыжков — около 2500. Кроме того она является полковником ВВС в отставке, дублёром Валентины Терешковой. Назовите фамилию этой женщины",
    answer: "Соловьева Ирина Баяновна",
    words: ["Соловьева"],
    questionVideo:"https://rutube.ru/play/embed/8306ae48c3ba5d6ba10413ff6a03c78c/?p=343sr9AbRqDh25WocJHC4A",
    answerVideo:"https://rutube.ru/play/embed/a87bf7452785f9652eae4061cc056b8b/?p=AouuldJ64uSqu5SeqTw7aQ",
  });
  await question.save();
  topic.questions.push(question._id);

  await topic.save();

  //-----------------------------

  topic = new Topic({
    name: "Самарские предприятия, проложившие путь в космос",
    questions: [],
  });

  question = new Question({
    author: Kotov._id,
    name: "Космическая эстафета",
    question: "«Сердце» этого предмета, было изготовлено специалистами ПАО «Кузнецов» и учеными Самарского аэрокосмического университета. Он стал главным символом мероприятия, которое состоялось в 2014 году в Сочи. Перед этим событием уменьшенная копия этого предмета впервые побывала в открытом космосе. Назовите предмет, о котором идёт речь",
    answer: "Факел. Организаторы зимних Олимпийских Игр 2014 года решили сделать космический этап уникальной особенностью традиционной эстафеты олимпийского огня. Российские космонавты Олег Котов и Сергей Рязанский вынесли олимпийский факел в открытый космос. Они передавали факел друг другу, имитируя эстафету олимпийского огня.",
    words: ["Факел"],
    questionVideo:"https://rutube.ru/play/embed/dd25ed8effbd8258828a37286d23515f/?p=lcGmkZy_IWzJmdBXf0lzyQ",
    answerVideo:"https://rutube.ru/play/embed/8a62efeae8cf699254a35922c6c0f5cb/?p=ZPZUyV-sbaNUCDQ1GXnDbw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Kornienko._id,
    name: "Вопреки",
    question: "Этот Двигатель создавался в Куйбышеве коллективом под руководством Генерального конструктора Н.Д. Кузнецова в конце 60-х – начале 70-х годов для первой ступени «лунной» ракеты Н1-Л3.  Главное преимущество двигателя – максимальное отношение тяги к весу.   К сожалению, в 1974 году «лунная программа» была закрыта. Этот двигатель получил своё второе рождение спустя более чем 20 лет: он применялся в первой ступени американской РН «Антарес», и сейчас используется в первой ступени РН легкого класса «Союз-2.1в». Как называется этот двигатель?",
    answer: "НК-33.После закрытия Лунной программы Н.Д. Кузнецову было приказано в трехмесячный срок все двигатели сдать в металлолом. Николай Дмитриевич спрятал двигатели в одном из корпусов Химзавода (ныне ОП «Винтай» ПАО «Кузнецов»), где в кратчайшие сроки была поставлена фальшстена, скрывавшая помещение, в котором находилась партия этих уникальных двигателей.",
    words: ["НК-33"],
    questionVideo:"https://rutube.ru/play/embed/2b2d565e690830321c9ca01e99b51589/?p=l2ByivNF23GeGK-vy2p8-Q",
    answerVideo:"https://rutube.ru/play/embed/09795929addd0294f09b110389ea9345/?p=UVxsNduDumqcLoMKHX-erw",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Artemiev._id,
    name: "Пешком вокруг земли",
    question: "Скорость бега космонавтов на тренировках составляет примерно 7-14 км/ч. За 5 лет на беговой дорожки космонавты провели около 4000 часов и преодолели путь равный экватору Земли. Сколько километров пробежали космонавты по беговой дорожке БД-2?",
    answer: "Длина экватора Земли составляет 40 075 км, а мы, космонавты, пробежали по дорожке уже более 42 000 км. Так что пошли на второй круг. (принимается любой ответ от 40 до 42 тысяч)",
    words: ["40075"],
    questionVideo:"https://rutube.ru/play/embed/a2c30cc2d77c3d59f6dceb90d630d2ea/?p=xlfgY1z_SYG3J94CMPCxvA",
    answerVideo:"https://rutube.ru/play/embed/373a53a2a4185ff7262bc56766f02f7e/?p=51XUxjfCC_htT68MPwHOBQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Avdeev._id,
    name: "Война и космос",
    question: "Победители в Великой Отечественной стали и победителями в освоении космоса, среди них много конструкторов и рабочих. Кроме того, и в отряде космонавтов был человек, прошедший всю войну. И ставший единственным, кто удостоен первой звезды Героя за Великую Отечественную войну, а второй — за полёт в космос. Назовите фамилию этого человека.",
    answer: "Георгий Тимофеевич Береговой — лётчик-космонавт СССР, дважды Герой Советского Союза, заслуженный лётчик-испытатель СССР, генерал-лейтенант авиации.",
    words: ["Береговой"],
    questionVideo:"https://rutube.ru/play/embed/97c218a58b4bef16c137d65e0168fc72/?p=6PbW3ITLPFCMoCBnI_5uLA",
    answerVideo:"https://rutube.ru/play/embed/fdaf700e8b66dc9a9d7d8fdb257dc0e7/?p=9AxBJMBYbj6Nm8rYUfcw1Q",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Serduk._id,
    name: "Восточный",
    question: "В какой области расположен космодром Восточный и как называется наукоград при космодроме?",
    answer: "Космодром был построен в Амурской области, административным центром которого является город Благовещенск. Наукоград при космодроме Восточный носит имя отца мировой Космонавтики Константина Эдуардовича Циолковского.",
    words: ["Амурская", "Циолковский"],
    questionVideo:"https://rutube.ru/play/embed/b0c808b46ec8dc9c286a96a907a665ab/?p=tN7c_dO30V4Gaefds0of-w",
    answerVideo:"https://rutube.ru/play/embed/060aac0fcf21c9b158f7c5f4425619b9/?p=n2IBeVsRIUw-qKOUT12prQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Avdeev._id,
    name: "Дом-рекордсмен",
    question: "Дмитрий Ильич Козлов всю жизнь защищал Родину, причем в молодости ему пришлось делать это собственной кровью. 1 июля 1941 года студент пятого курса института Дмитрий Козлов добровольцем записался в народное ополчение, прошел всю Великую Отечественную войну, был трижды ранен и потерял руку. Получил несколько боевых наград. Медалью за оборону какого города был награжден Козлов?.",
    answer: "Дмитрий Колов в 1943 году был награжден медалью «За оборону Ленинграда».",
    words: ["Ленинград"],
    questionVideo:"https://rutube.ru/play/embed/10747f4a38b424878d74ca6c40e50cb9/?p=mXBW9Q6j6ale5iuxUuQq2Q",
    answerVideo:"https://rutube.ru/play/embed/3cfb95cec6acd5f8f648f726ff898001/?p=eSynpkxz8xfNuN_U7SFG1Q",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Titov._id,
    name: "Счёт на секунды",
    question: "Назовите фамилию руководителя стартовой команды корабля «Союз-Т-10-1» – Героя Социалистического Труда, заместителя генерального конструктора «ЦСКБ-Прогресс»",
    answer: "Александр Михайлович Солдатенков – выпускник Куйбышевского авиационного института главный конструктора ракет-носителей типа Р-7А и «Союз-2», руководитель многих международных проектов космических программ.",
    words: ["Солдатенков"],
    questionVideo:"https://rutube.ru/play/embed/85c8554b9bbf07c0b4b4d72fd2ab3e72/?p=Is0RAfHEsEaow83SX7X76w",
    answerVideo:"https://rutube.ru/play/embed/1ee6f21021240a955ba68e2c0f094ec5/?p=HbzESkqLkslZq_6o9sQl0g",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Soifer._id,
    name: "Вечный двигатель",
    question: "Сколько маршевых двигателей у ракеты-носителя Союз-2, предназначенных для вывода кораблей Союз-МС?",
    answer: "Ракета-носитель Союз-2 имеет 6 маршевых двигателей: 4 двигателя на первой ступени и по одному на второй и третьей ступени.\n" +
        "Кроме этого, самым существенным отличием «Союзов» для пилотируемых полётов от грузовых, стала разработанная под руководством Сергея Павловича Королёва система аварийного спасения (САС). Она предназначена для спасения экипажа при авариях ракеты-носителя с момента активации САС (за 15 минут до старта ракеты-носителя) и на любом участке полёта.\n" +
        "К счастью, за 60-летнюю историю использования «Союзов», САС приходилось использовать лишь трижды. И все эти случаи заканчивались успешным приземлением космонавтов на землю.",
    words: ["6"],
    questionVideo:"https://rutube.ru/play/embed/b8fa0f1407c97c4c1b0a434bf94a2d9c/?p=cqBTftQCPxoOW9gHZCZmTg",
    answerVideo:"https://rutube.ru/play/embed/6398e6e46073ceb0770061dcd32cac4b/?p=O2WVUamSGVhNxOShchWxtA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Koroleva._id,
    name: "Разведка",
    question: "Когда и каким космическим аппаратом была сфотографирована обратная сторона Луны?",
    answer: "Обратная сторона Луны была сфотографирована 4 октября 1959 года аппаратом Луна-3",
    words: ["04.10.1959", "Луна-3"],
    questionVideo:"https://rutube.ru/play/embed/09ca8fa4c860094ce095bcb52d79850d/?p=2DI-7ZtBW7kNbVKk8_ny9Q",
    answerVideo:"https://rutube.ru/play/embed/20b585dd4cdb1dca39cc93032d8c6457/?p=vORNZ_B3YtVm36SPT-kG-A",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Lazutkin._id,
    name: "Кузница кадров",
    question: "Заведующим кафедрой динамики полета и систем управления, а также кафедрой летательных аппаратов в КуАИ и СГАУ более 20 лет был последователь С.П. Королева, прошедший ВОВ, ведущий конструктор знаменитой «семёрки». Назовите его фамилию.",
    answer: "Козлов Дмитрий Ильич. В 1961 году за выдающиеся заслуги в создании образцов ракетной техники и обеспечение первого в мире полёта человека в космическое пространство Дмитрию Ильичу было присвоено звание Героя Социалистического Труда.",
    words: ["Козлов"],
    questionVideo:"https://rutube.ru/play/embed/2bc670ed90c4c1d9b9f088e60c52c9ad/?p=8fhKwCoZ4xAXRbpTx7j-Iw",
    answerVideo:"https://rutube.ru/play/embed/b28ec7efec4d074ebb7149d1c596777a/?p=2x4wVCKqudKjtL93mqVLqA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Fedyaev._id,
    name: "Путь из космоса",
    question: "Улица Гагарина – одна из основных транспортных магистралей города Самары. Она получила свое название 15 апреля 1961 года решением Горисполкома Куйбышева. По этой дороге, сразу после возвращения из космоса, проехал Юрий Гагарин, следуя с заводского аэродрома на Безымянке на обкомовскую дачу на берегу Волги. Назовите название улицы, которое она носила до апреля 1961 года.",
    answer: "Черновское шоссе",
    words: ["Черновское", "Шоссе"],
    questionVideo:"https://rutube.ru/play/embed/f9a4b712e58188f936eb158cac063e66/?p=STSIjG8N6EL03mY53FbJgw",
    answerVideo:"https://rutube.ru/play/embed/30c824ace1d32a19c42a82c6c9c683ff/?p=WZgcGrBCrnh59eUF9MGVtA",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Shkaplerov._id,
    name: "К звёздам",
    question: "Сегодня самарский РКЦ «Прогресс» - единственное в мире предприятие, осуществляющее пуски ракет-носителей с четырех площадок. Перечислите названия этих космодромов",
    answer: "Космодром Байконур — первый, а также крупнейший в мире космодром, на сегодняшний день это единственный космодром для пилотируемых стартов. \n" +
        "В центральной части Архангельской области расположен космодром Плесецк. Был основан в 1957 году. С него осуществляется часть российских космических программ, связанных с оборонными, а также прикладными, научными и коммерческими пусками непилотируемых космических аппаратов.\n" +
        "Космодром Восточный - первый российский гражданский космодром, первый пуск с него состоялся 28 апреля 2016 года. Имеет уникальную мобильную башню обслуживания.\n" +
        "Куру – Гвианский космический центр – космодром, расположенный во французском департаменте Гвиана в северо-восточной части Южной Америки. Эксплуатируется Европейским космическим агентством и французским Национальным центром космических исследований. «Союз» на Куру – программа по развитию сотрудничества между «Роскосмосом» и ЕКА, была начата в 2003 году. \n" +
        "В 2011 году РКЦ «Прогресс» осуществил первый пуск с этого космодрома.",
    words: ["Байконур", "Плесецк", "Восточный", "Куру"],
    questionVideo:"https://rutube.ru/play/embed/a3bfd4c18774e3be3f8ae5cf7f51e111/?p=YcRaBqiUPWU7uPxkRy3WkA",
    answerVideo:"https://rutube.ru/play/embed/3f5879caf6def8735b43806ee0efa69a/?p=FPIukQhXk5fr95dnmtRBBg",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Babkin._id,
    name: "Железный конь",
    question: "История РКЦ «Прогресс» началась в Москве в 1894 году, когда обрусевший немец Ю. Меллер основал небольшую мастерскую по ремонту популярного в то время вида транспорта. О каком транспорте идет речь?",
    answer: "Велосипед. Впоследствии Меллер преобразовал мастерскую в завод «Дукс» по производству велосипедов, мотоциклов, дрезин, автомобилей, аэросаней, дирижаблей, самолётов",
    words: ["Велосипед"],
    questionVideo:"https://rutube.ru/play/embed/9b8bb46cc2a2a2e5b14918886dedc569/?p=flgRhHwU-6kGElWuEALssw",
    answerVideo:"https://rutube.ru/play/embed/1658a37049568e86acbaf341cc49988f/?p=y12b8SqepBK2H0w5FVLDlQ",
  });
  await question.save();
  topic.questions.push(question._id);

  question = new Question({
    author: Tihonov._id,
    name: "Летающий танк",
    question: "Ил-2 изначально разрабатывался как двухместный самолет. Но в ходе испытаний были выявлены некоторые серьезные недостатки. Самолет имел недостаточную скорость и дальность полета. Ильюшин решил пойти на хитрость, сделав Ил-2 одноместным. Вместо кабины штурмана был установлен еще один бензобак. Бронекорпус был уменьшен. Это позволило сделать штурмовик легче. Ил-2 называли БШ-2 «Бронированным штурмовиком». Для улучшения обзора кабину пилота приподняли, после чего Ил-2 приобрёл другое прозвище. Какое новое прозвище получил Ил-2?",
    answer: "«Горбатый»",
    words: ["Горбатый"],
    questionVideo:"https://rutube.ru/play/embed/8feacb04c3c1981e453dedb89024915a/?p=Fi_8UPLmpGMXQweVMa0uQQ",
    answerVideo:"https://rutube.ru/play/embed/9ed65e0a37bf966f0a93f93a569abaea/?p=G8QjyVXq9VjXqZKQdZMTMA",
  });
  await question.save();
  topic.questions.push(question._id);

  await topic.save();

  console.log("Database initialized");
}
