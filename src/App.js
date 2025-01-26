import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide2 from "./components/LogoSlide2";

function App() {
  useGSAP(() => {
    var tl = gsap.timeline();
    var container = document.querySelector(".container .navbar");
    tl.to(container, {
      left: 0,
      duration: 0.5,
    });
    var menu = document.querySelector(".head i");
    var cross = document.querySelector(".navbar i");
    tl.from(".navbar p ", {
      x: "-150",
      stagger: 0.3,
      opacity: 0,
    });
    // tl.from(".navbar ", {
    //   x: "40%",
    //   stagger: 0.3,
    // });
    tl.from(".navbar h3", {
      x: "-150",
      stagger: 0.3,
      opacity: 0,
    });
    tl.from(".navbar h4 ", {
      x: "-150",
      stagger: 0.3,
      opacity: 0,
    });
    tl.from(".navbar i ", {
      stagger: 0.3,
      opacity: 0,
      rotate: 360,
    });

    tl.pause();
    menu.addEventListener("click", function () {
      tl.play();
    });
    cross.addEventListener("click", function () {
      tl.reverse(2);
    });

    var arrow = document.querySelector(".pays .arrow i");
    arrow.addEventListener("click", function () {
      gsap.from(".pays .arrow  ", {
        rotate: 180,
        duration: 0.25,
      });
      gsap.to(".pays .row .contact a", {
        x: 260,
      });
    });
    arrow.addEventListener("contextmenu", function () {
      gsap.to(".pays .arrow i", {
        rotate: 0,
        duration: 0.25,
      });
      gsap.to(".pays .row .contact a ", {
        x: 0,
      });
    });
  });
  return (
    <div>
      <div className="nav ">
        <marquee>
          We Ship Worldwide | Free Shipping Across India. For further details,
          Please call:<a href="tel:919884039111">+91 9884039111 </a> | We
          design, manufacture & retail jewellery using NATURAL DIAMONDS only |
          All our Jewels are BIS Hallmarked & Diamonds are ethically sourced &
          certified by world-renowned Gemological Institutes.{" "}
        </marquee>
        <div className="head">
          <i className="ri-menu-2-fill"></i>
          <h1 className="flex">
            {" "}
            <img src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Golden-Logo.svg"></img>{" "}
            <p> | QUEEN OF HEARTS</p>
          </h1>
          <i className="ri-search-2-line"></i>
          <a href="https://www.google.com/maps?q=khwaahish+diamond+jewellery&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi-0JyFxK71AhXBRmwGHXqoAxMQ_AUoAHoECAIQCg">
            <i className="ri-map-pin-2-line"></i>
          </a>
        </div>
      </div>
      <div className="container max-w-screen-2xl mx-3 px-6">
        <img
          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-New-Hero-Banner-Desktop.jpg?lossy=0&webp=90&avif=90ssl=1"
          alt=""
        />
        <div className="navbar">
          <p>
            Queen of Hearts - Chennai's crown jewel of partywear, where
            lightweight doesn't mean low on drama. Our sub-brands are curated
            In-house, designed to excite & appeal to the lifestyle of those who
            appreciate craft & all things precious.
          </p>
          <h3>Curated Brands</h3>
          <h4>Gulz - Trendy & Chic Diamonds</h4>
          <h4>Fazza - Gorgeous Polki</h4>
          <h4>Festara - Romancing Gemstones</h4>
          <h4>Pache - Precious Jewellery for Men</h4>
          <h4>Visit Brand Website</h4>
          <i className="ri-close-line"></i>
        </div>
        <div className="logo">
          <img
            src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Golden-Logo.svg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="body max-w-screen-2xl mx-3 px-6">
        <div className="shop"></div>
        <p className="text-4xl font-thin indent text-center">
          Every item of Fazza jewellery is more than just an accessory; it is a
          timeless treasure that adds long-term value to any woman's collection.
          Fazza designs with the goal of making traditional Polki jewellery more
          accessible, combining the charm of heritage with modern elegance in
          each piece.
          <h1 className="text-3xl text-center"> Jewels at a Glance </h1>A
          tribute to timeless elegance with pure, uncut diamonds that exude
          boldness, capturing your unique essence in every sparkle. All designs
          can be customized as per your requirements.
        </p>

        <div className="swiper ">
          <section className="py-16 m-2">
            <div className="max-w-screen-2xl mx-3 px-6 ">
              <div className="relative">
                {/* For larger screens */}
                <div className="hidden md:block">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="relative"
                    onSlideChange={(swiper) => {
                      // Update active dot
                      const dots = document.querySelectorAll(".slide-dot");
                      dots.forEach((dot, index) => {
                        if (index === swiper.realIndex) {
                          dot.classList.add("w-7", "bg-black");
                          dot.classList.remove("w-2", "bg-gray-400");
                        } else {
                          dot.classList.remove("w-7", "bg-black");
                          dot.classList.add("w-2", "bg-gray-400");
                        }
                      });
                    }}
                  >
                    <SwiperSlide className="cursor-grab active:cursor-grabbing ">
                      <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 3"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 2"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 1"
                          className="w-full md:w-[30rem] h-[500px] object-fill"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="cursor-grab active:cursor-grabbing">
                      <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 3"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 2"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 1"
                          className="w-full md:w-[30rem] h-[500px] object-fill"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="cursor-grab active:cursor-grabbing">
                      <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 1"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 3"
                          className="w-full md:w-[30rem] h-[500px] object-cover"
                        />
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                          alt="Slide 2"
                          className="w-full md:w-[30rem] h-[500px] object-fill"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                    <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                    {[...Array(3)].map((_, index) => (
                      <span
                        key={index}
                        className={`slide-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          index === 0 ? "w-8 bg-black" : "w-2 bg-gray-400"
                        }`}
                        onClick={() => {
                          const swiper =
                            document.querySelector(".swiper").swiper;
                          swiper.slideTo(index);
                        }}
                      ></span>
                    ))}
                    <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                  </div>
                </div>

                {/* For mobile screens */}
                <div className="md:hidden space-y-8">
                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 3"
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                    />
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 2"
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                    />
                    <img
                      className="w-full md:w-[30rem] h-[500px] object-fill"
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 1"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 2"
                    />
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 1"
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                    />
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 3"
                      className="w-full md:w-[30rem] h-[500px] object-fill"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-9.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 1"
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                    />
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-2.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 3"
                      className="w-full md:w-[30rem] h-[500px] object-cover"
                    />
                    <img
                      src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Fazza-Carousel-Imgs-3.jpg?lossy=0&webp=90&avif=90&ssl=1"
                      alt="Slide 2"
                      className="w-full md:w-[30rem] h-[500px] object-fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="add max-w-screen-2xl mx-3 px-6">
        <h2 className="text-4xl font-thin indent text-center">
          Our add campaign
        </h2>
        <video src="https://youtube.com/shorts/aacJ6HGCytc?si=njSTxcZt3Tui1Y6s"></video>
        <h3 className="text-2xl  indent text-center">
          Queen Of Hearts- Chennai’s crown jewel of partywear, where lightweight
          doesn’t mean low on drama.{" "}
        </h3>
        <p className="text-xl font-thin indent text-center">
          With 20 years of expertise, Khwaahish now introduces Queen of Hearts -
          a curated galleria of lightweight fine jewellery crafted for the
          modern lifestyle. We believe in jewellery that speaks for itself—bold,
          beautiful, and effortless. Our handpicked collections are designed to
          make you shine, without weighing you down. At Queen Of Hearts, every
          piece tells a story—and that story is yours.
        </p>
      </div>
      <div className="marq  bg-gray-50 ">
        <p className=" text-center  ">
          All our jewels are BIS Hallmarked and studded with natural diamonds
          certified by International Gemmological Institutes.
        </p>
        <marquee behavior="" className="h-[100px] text-center  bg-gray-50 ">
          <Slide2 />
        </marquee>
      </div>

      <div className="swiper">
        <section className="py-16">
          <div className="max-w-screen-2xl mx-3 px-6">
            <div className="relative">
              {/* For larger screens */}
              <div className="hidden md:block">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="relative"
                  onSlideChange={(swiper) => {
                    // Update active dot
                    const dots = document.querySelectorAll(".slide-dot");
                    dots.forEach((dot, index) => {
                      if (index === swiper.realIndex) {
                        dot.classList.add("w-7", "bg-black");
                        dot.classList.remove("w-2", "bg-gray-400");
                      } else {
                        dot.classList.remove("w-7", "bg-black");
                        dot.classList.add("w-2", "bg-gray-400");
                      }
                    });
                  }}
                >
                  <SwiperSlide className="cursor-grab active:cursor-grabbing">
                    <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                      <img
                        src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Khwaahish-Store-img.jpg?lossy=0&webp=90&avif=90&ssl=1"
                        alt="Slide 1"
                        className="w-full md:w-[90rem] h-[600px] object-cover"
                      />
                      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center">
                        <h3
                          className="text-5xl mb-4 font-medium text-center px-20 tracking-wider leading-tight"
                          id="bigfont"
                        >
                          Legacy of Khwaahish
                        </h3>
                        <p className="text-gray-500 px-14 text-sm tracking-wider leading-5">
                          20+ Years of Crafting Unforgettable Jewellery—Blending
                          Tradition with Modern Flair
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="cursor-grab active:cursor-grabbing">
                    <div className="flex flex-col md:flex-row items-center bg-neutral-100">
                      <img
                        src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Curators-Tale-with-watermark-img.jpg?lossy=0&webp=90&avif=90&ssl=1"
                        alt="Slide 2"
                        className="w-full md:w-[90rem] h-[600px] object-cover"
                      />
                      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 text-center">
                        <h3
                          className="text-5xl mb-2 tracking-wider"
                          id="bigfont"
                        >
                          Curator&apos;s Tale
                        </h3>
                        <p className="text-gray-500 px-14 text-sm tracking-wider leading-6">
                          Our brand represents our desire to create exquisite,
                          beautiful and high-quality diamond jewellery that is
                          as special as you.<br></br>Explore our collection at
                          the Queen of Hearts Galleria and experience a world of
                          Diamond Jewellery, truly Different by Design.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className=" swipe cursor-grab active:cursor-grabbing">
                    <div className="tabl flex flex-col md:flex-row items-center bg-neutral-100 h-[600px]">
                      <table className=" text-xs w-full  bg-gray-50 m-20 h-[500px] ">
                        <tr className=" border border-solid items-center   ">
                          <td>
                            {" "}
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-1.svg"
                              alt=""
                            />
                            BIS Hallmarked
                          </td>
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-2.svg"
                              alt=""
                            />
                            Assured time maintanance
                          </td>
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-3.svg"
                              alt=""
                            />
                            Life time Exchange
                          </td>
                        </tr>
                        <tr className=" border border-solid">
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-4.svg"
                              alt=""
                            />
                            free 1 year warranty
                          </td>
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-5.svg"
                              alt=""
                            />
                            Different by Design Unique designs with a World
                          </td>
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-6.svg"
                              alt=""
                            />
                            0% Deduction old Gold exchange
                          </td>
                        </tr>
                        <tr className=" border border-solid">
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-7.svg"
                              alt=""
                            />
                            Free and insured shipping across India
                          </td>
                          <td>
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-8.svg"
                              alt=""
                            />
                            Personalized Shopping Experience
                          </td>
                          <td className="w-40 ">
                            <img
                              src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-9.png?lossy=0&webp=90&avif=90&ssl=1"
                              alt=""
                            />
                            “Natural Diamonds” Certification by International
                            Gemological Laboratories
                          </td>
                        </tr>
                      </table>

                      <div className="md:w-1/2 md:pl-2 mt-4 md:mt-0 text-center">
                        <h3
                          className="text-5xl mb-2 tracking-wider px-5"
                          id="bigfont"
                        >
                          The Brand Promise
                        </h3>
                        <p className="text-gray-500 px-14 text-sm tracking-wider leading-6">
                          Pure, Natural Diamonds. Designed to Reflect the Real
                          You.{" "}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
                  <div className="swiper-button-prev !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                  {[...Array(3)].map((_, index) => (
                    <span
                      key={index}
                      className={`slide-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === 0 ? "w-8 bg-black" : "w-2 bg-gray-400"
                      }`}
                      onClick={() => {
                        const swiper = document.querySelector(".swiper").swiper;
                        swiper.slideTo(index);
                      }}
                    ></span>
                  ))}
                  <div className="swiper-button-next !text-black !font-extrabold transition-transform !static !w-8 !h-8 !mt-0 after:!text-xl cursor-pointer"></div>
                </div>
              </div>

              {/* For mobile screens */}
              <div className="md:hidden space-y-8">
                <div className="flex flex-col items-center bg-neutral-100">
                  <img
                    src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Khwaahish-Store-img.jpg?lossy=0&webp=90&avif=90&ssl=1"
                    alt="Legacy of Khwaahish"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="w-full p-6 text-center">
                    <h3
                      className="text-3xl mb-4 font-medium tracking-wider leading-tight"
                      id="bigfont"
                    >
                      Legacy of Khwaahish
                    </h3>
                    <p className="text-gray-500 text-sm tracking-wider leading-5">
                      20+ Years of Crafting Unforgettable Jewellery—Blending
                      Tradition with Modern Flair
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center bg-neutral-100">
                  <img
                    src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Curators-Tale-with-watermark-img.jpg?lossy=0&webp=90&avif=90&ssl=1"
                    alt="Curator's Tale"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="w-full p-6 text-center">
                    <h3 className="text-3xl mb-2 tracking-wider" id="bigfont">
                      Curator&apos;s Tale
                    </h3>
                    <p className="text-gray-500 text-sm tracking-wider leading-6">
                      Our brand represents our desire to create exquisite,
                      beautiful and high-quality diamond jewellery that is as
                      special as you. Explore our collection at the Queen of
                      Hearts Galleria and experience a world of Diamond
                      Jewellery, truly Different by Design.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center bg-neutral-100">
                  <table className=" text-xs w-full  bg-gray-50 m-20 h-[500px] ">
                    <tr className=" border border-solid items-center   ">
                      <td>
                        {" "}
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-1.svg"
                          alt=""
                        />
                        BIS Hallmarked
                      </td>
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-2.svg"
                          alt=""
                        />
                        Assured time maintanance
                      </td>
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-3.svg"
                          alt=""
                        />
                        Life time Exchange
                      </td>
                    </tr>
                    <tr className=" border border-solid">
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-4.svg"
                          alt=""
                        />
                        free 1 year warranty
                      </td>
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-5.svg"
                          alt=""
                        />
                        Different by Design Unique designs with a World
                      </td>
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-6.svg"
                          alt=""
                        />
                        0% Deduction old Gold exchange
                      </td>
                    </tr>
                    <tr className=" border border-solid">
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-7.svg"
                          alt=""
                        />
                        Free and insured shipping across India
                      </td>
                      <td>
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-8.svg"
                          alt=""
                        />
                        Personalized Shopping Experience
                      </td>
                      <td className="w-40 ">
                        <img
                          src="https://emcgtdx36wv.exactdn.com/storage/2024/10/Promise-Sec-Icons-9.png?lossy=0&webp=90&avif=90&ssl=1"
                          alt=""
                        />
                        “Natural Diamonds” Certification by International
                        Gemological Laboratories
                      </td>
                    </tr>
                  </table>

                  <div className="w-full p-6 text-center">
                    <h3 className="text-3xl mb-2 tracking-wider" id="bigfont">
                      The Brand Promise
                    </h3>
                    <p className="text-gray-500 text-sm tracking-wider leading-6">
                      Pure, Natural Diamonds. Designed to Reflect the Real You.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="location max-w-screen-2xl mx-3 px-6">
        <img
          src="https://www.khwaahish.com/storage/2023/07/khwaahish-inner-view.jpg"
          alt=""
        />
        <div className="map">
          Visit our store now to view this collection <br />
          <a
            href="https://www.google.com/maps?q=khwaahish+diamond+jewellery&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi-0JyFxK71AhXBRmwGHXqoAxMQ_AUoAHoECAIQCg"
            target="blank"
          >
            <i className="ri-map-pin-2-line"></i>
          </a>
          <a href="tel:919884039111">
            <i className="ri-phone-fill"></i>
          </a>
        </div>
      </div>

      <footer>
        <div className="footer max-w-screen-2xl mx-3 px-6">
          <div className="footer-left text-center text-lg	">
            <h1
              className="flex justify-center
"
            >
              {" "}
              <img
                src="https://emcgtdx36wv.exactdn.com/storage/2024/09/Fazza.svg"
                alt=""
              ></img>{" "}
              <p className=" justify-center pt-3 text-2xl ">
                | QUEEN OF HEARTS{" "}
              </p>{" "}
            </h1>
          </div>
          <div className="footer-right">
            <h2 className="font-bold	"> Contact Us</h2>
            <p>
              {" "}
              <i className="ri-phone-fill"></i> Phone:{" "}
              <a href="tel:+91 9884039111">+91 9884039111</a>{" "}
            </p>
            <p>
              <i className="ri-mail-fill"></i>{" "}
              <a href="mailto:admin@khwaahish.com">admin@khwaahish.com</a>{" "}
            </p>
            <div className="contact">
              <a href="https://www.instagram.com/fazzaofficial/" target="blank">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.facebook.com/fazzaofficial/" target="blank">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.twitter.com/fazzaofficial/" target="blank">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://api.whatsapp.com" target="blank">
                {" "}
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <div className="address">
            <p>
              <h2 className="font-bold	">Address</h2>
              <br></br>{" "}
              <a href="https://www.google.com/search?q=khwaahishdiamonds">
                No: 53/2, C.P. Ramaswamy Road, Abiramapuram,Chennai, Tamil Nadu
                600018
              </a>
            </p>
          </div>
          <div className="links">
            <h2 className="font-bold	">Quick Links</h2>
            <a href="">Blog</a>
            <a href="">Our Story</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact Us</a>
            <a href="">Terms and Conditions</a>
          </div>
        </div>
        <div
          className="pays flex max-w-screen-2xl mx-3 px-6 justify-between
"
        >
          <div className="first">
            {" "}
            <img
              src="https://emcgtdx36wv.exactdn.com/storage/2022/02/payment-gateway-logos.png?lossy=0&webp=90&avif=90&ssl=1"
              alt=""
            ></img>
            <p>
              © 2025 |<span> HTML Sitemap </span>
              Designed for Khwaahish, All Rights Reserved{" "}
            </p>
          </div>
          <div className="row flex justify-between ">
            <div className="contact">
              <a href="https://www.instagram.com/fazzaofficial/" target="blank">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.facebook.com/fazzaofficial/" target="blank">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.twitter.com/fazzaofficial/" target="blank">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://api.whatsapp.com" target="blank">
                {" "}
                <i className="ri-whatsapp-line"></i>
              </a>
              <div className="arrow">
                {" "}
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
