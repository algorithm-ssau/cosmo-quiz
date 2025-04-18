import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthors } from "../store/slices/topicSlice";
import { fetchUserData } from "../store/slices/authSlice";
import { IoIosArrowBack } from "react-icons/io";

export default function Heroes() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.topic.isLoading);
  const authors = useSelector((state) => state.topic.authors);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAuthors());
    dispatch(fetchUserData());
    console.log("dispatching getAuthors");
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>Наши герои</title>
      </Helmet>
      <div className="">
        <button
          className="absolute ml-4 transition-transform duration-100 h-min hover:scale-110"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-white" size={"35px"} />
        </button>
        <h1 className="mb-4 text-3xl font-bold text-center text-white">
          Наши герои
        </h1>
        {authors.map((author, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-5 py-6 text-white border-b md:px-96"
          >
            <h1 className="mb-4 text-2xl font-semibold text-center">
              {author.name}
            </h1>
            <img src={`${author.avatar}`} alt="" width={"200px"} />
            <p className="mt-4 font-medium text-center">
              {author.desc.split(/(?<=, )(?=[А-ЯA-Z])/).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
