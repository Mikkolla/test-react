import { useState } from "react";
import Img1 from "../assets/img/1.png";
import Img2 from "../assets/img/2.png";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.png";
import Img6 from "../assets/img/6.png";
import Img7 from "../assets/img/7.png";
import Img8 from "../assets/img/8.png";
import Img9 from "../assets/img/9.png";

export const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  function navToggle(buttonId) {
    setCurrentCategory(buttonId);
  }

  const filteredImages = [
    { id: 1, src: Img1, category: "all" },
    { id: 2, src: Img2, category: "ui" },
    { id: 3, src: Img3, category: "web" },
    { id: 4, src: Img4, category: "logo" },
    { id: 5, src: Img5, category: "brand" },
    { id: 6, src: Img6, category: "ui" },
    { id: 7, src: Img7, category: "web" },
    { id: 8, src: Img8, category: "logo" },
    { id: 9, src: Img9, category: "brand" },
  ];

  const filteredImagesByCategory =
    currentCategory === "all"
      ? filteredImages
      : filteredImages.filter((img) => img.category === currentCategory);

  const imageElements = filteredImagesByCategory.map((img) => (
    <img
      key={img.id}
      className="portfolio__img"
      width="310px"
      height="300"
      src={img.src}
      alt={`img${img.id}`}
    />
  ));

  return (
    <>
      <section className="portfolio">
        <div className="portfolio__header">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <ul className="portfolio__ul">
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("all")}
              id="all"
              className={`portfolio__a ${
                currentCategory === "all" ? "a__active" : ""
              }`}
            >
              All categories
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("ui")}
              id="ui"
              className={`portfolio__a ${
                currentCategory === "ui" ? "a__active" : ""
              }`}
            >
              UI Design
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("web")}
              id="web"
              className={`portfolio__a ${
                currentCategory === "web" ? "a__active" : ""
              }`}
            >
              Web Templates
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("logo")}
              id="logo"
              className={`portfolio__a ${
                currentCategory === "logo" ? "a__active" : ""
              }`}
            >
              Logo
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("brand")}
              id="brand"
              className={`portfolio__a ${
                currentCategory === "brand" ? "a__active" : ""
              }`}
            >
              Branding
            </button>
          </li>
        </ul>
        <div className="portfolio__container">{imageElements}</div>
      </section>
    </>
  );
};
