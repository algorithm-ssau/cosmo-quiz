import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../store/slices/authSlice";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";

export default function Prizes() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.topic.isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>Памятные призы</title>
      </Helmet>
      <div className="">
        <button
          className="absolute ml-4 transition-transform duration-100 h-min hover:scale-110"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-white" size={"35px"} />
        </button>
        <h1 className="mb-10 text-3xl font-bold text-center text-white">
          Памятные призы
        </h1>
        <div className="flex flex-col items-center text-center text-white">
          <h2 className="mb-6 text-2xl">ЗА ПРОХОЖДЕНИЕ ТЕМ</h2>
          <p className="mb-4 text-xl">
            Фотографии Героя РФ, лётчика-космонавта Артемьева Олега Германовича
          </p>
          <img
            src="https://downloader.disk.yandex.ru/preview/f79542134b85a3fa0bec266ad0ec4d351e517fa55a2a7272f2098a02af4a45b9/67fe6580/xmJrPA7HP2Yk7zdUNYDfCiRj0E7u-AoOPGosn5hyI81hpegq7hDrXCMSTeEMRHT5e_fOkpQCB-HCYKFwoxZNFA%3D%3D?uid=0&filename=balhash.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/8a4d5a9159b2abff9d343d7a464245111f99c4bf6cca0a7f46aed6919d672eeb/67fe6580/jKpkA1emCXbP5iZXprouj6DTWsUib8l0U0FaH52iq7cu3P3NzBSY_9qTIqf7h-tI15zHZwOt6K8HpiLzwPFpaw%3D%3D?uid=0&filename=deserteye.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            className="mb-3 rounded w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/ef9ed18df1356586c61631624d48461c61cb88e8a270952364e5edd4b8a115d3/67fe6697/YCE67FbA4Uz0SKd0-0R0QyRj0E7u-AoOPGosn5hyI82kmGrwKPknnXe68MZW8aTy45ext62Foc27TTfbTu7jCg%3D%3D?uid=0&filename=clouds.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/aaee14fe81d728f3e379f510fb7727475912c2e0e6dd2d3f34b3d67e5d9e0b65/67fe6697/xROv4Rjy_yTPBvOX6T9LF24VKBPU7--yUJZzxHp9Wx4AV4G0TU99QKD-KR0qTQAV3zSEMEv5v4v0wzyN__DOvQ%3D%3D?uid=0&filename=river.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/dea36a9c07256c042697b3ec4af181896bd6f7c9dc4a33a08caced81633b5cf7/67fe682d/Ugzrr7asRz0XjpfpQFu34Mf6lpXCF2wgoV2mxQGSYc-iKM8c_7-Xium1zNXFdWBQ-K11EKXkRGMzKUcJB1wujg%3D%3D?uid=0&filename=islands.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/5259e3eaa9400b94a199d2feebc9d0e37c734b80355c30a7ff25fadf20a83be2/67fe682d/-PHGyjfhoM7MMK5XGKhOam4VKBPU7--yUJZzxHp9Wx4mLAs8cinGcecCyn23SHfoEHHbRK7bXNo-BIi8ZqvP3w%3D%3D?uid=0&filename=soyuz.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/ff821c7b3dc012897e9c03470bb344061ce16530d74a945a6af0a05da8a3a045/67fe6871/FM9TnUnrH95j2YgGQgBCACRj0E7u-AoOPGosn5hyI80ehW3IJuwml53mxGF9Ng-G-BiA7byFO8IA236n3QdTHg%3D%3D?uid=0&filename=moon.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <img
            src="https://downloader.disk.yandex.ru/preview/2e8fd5c4f61a9ddfa4ad0c7c77cfa2aeae7de750b49ce3c9c257db3e1130e37a/67fe6871/dHH_8xEpZ2ldX4_FCDAZqKDTWsUib8l0U0FaH52iq7e33C9qGNuBH1Ck-wRGRxn3IhFYUB4xl4OWUCee9mwaIw%3D%3D?uid=0&filename=sunrise.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className="mb-3 rounded  w-96 md:w-[500px]"
          />
          <div className=" bg-white w-96 md:w-[600px] my-5 rounded h-[1px]" />
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <div className="flex">
            <h2 className="mb-6 text-2xl">ЗА ПОЛУЧЕНИЕ 30, 60, 90 И 120 </h2>
            <IoStar className=" text-gold" size={"30px"} />
          </div>
          <p className="mb-4 text-xl">
            Картина космического художника Просочкиной Анастасии
          </p>
          <img
            src="https://downloader.disk.yandex.ru/preview/1e9734948b26e1491021883ee3d38b5884938795ddd96f37ee2699ad644b602c/67feb0c0/NG39hUXCHU6ONuLdvBmKPpYWA3uUCINF_NtJ1KSFb2w9xvhf1o4haHRV8d9LVXcZnfJSgvF_smkSj0RKL-dKWQ%3D%3D?uid=0&filename=tsiolkovsky_2560х1440.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Циолковский&raquo;</p>
          <img
            src="https://downloader.disk.yandex.ru/preview/1d428e2cae03786fea0b94d7274b47653878fd1437bd73421b67bc71cc240e5d/67feb0e2/NG39hUXCHU6ONuLdvBmKPmwbjPd5HtlJn1XSbcbG8u5gmQVv5booI7i0LEDaqm1QVl0qy3DkV9B-NzbAD7gVnQ%3D%3D?uid=0&filename=Leonov_2560х1440.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            className="rounded w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Леонов&raquo;</p>
          <img
            src="https://downloader.disk.yandex.ru/preview/3c83201569b655f21e8d87ab07abdb36443ad645876200046b852c3279891fb7/67feb0f5/VSnXtZG6FSl2ZlvhzAYOHweNnNqvS4-HuI4iTesBGzz6O-GXTjoLM0iXeujX_cGjm4tCAMsr4UR484B2kQX-Rg%3D%3D?uid=0&filename=horzions_5120%20×%202880.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Горизонты&raquo;</p>
          <img
            src="https://downloader.disk.yandex.ru/preview/c3b8dbcc65ba0e940c231cf354966c9a912ad5dc53308a9104ed949d2cec593c/67feb103/OqLegerhAIb5ssehuZ8rr6C9SaFXjntAIqRmEv9DbeKObFKZrr4UO27YXxOzxnKVvo4VpZDqwvyLjWjb_4mvGA%3D%3D?uid=0&filename=shuttle_1920х1200.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x935"
            alt=""
            width={500}
            className=" rounded  w-96 md:w-[500px]"
          />
          <p className="mb-3">&laquo;Шаттл&raquo;</p>
        </div>
      </div>
    </>
  );
}
