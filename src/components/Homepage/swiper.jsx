import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const storedData = localStorage.getItem("adminData");
  const welcomeData = storedData ? JSON.parse(storedData).Welcome : {};

  const sliderImg1 = welcomeData?.sliderImg1 || "https://shorturl.at/jKWXZ";
  const sliderImg2 = welcomeData?.sliderImg2 || "https://shorturl.at/ijJT7";
  const sliderImg3 = welcomeData?.sliderImg3 || "https://shorturl.at/kloqz";
  
  // const sliderImg1 = storedData ? JSON.parse(storedData).sliderImg1 ? JSON.parse(storedData).sliderImg1: "https://shorturl.at/jKWXZ" : "https://shorturl.at/jKWXZ";
  // const sliderImg2 = storedData ? JSON.parse(storedData).sliderImg2 ? JSON.parse(storedData).sliderImg2 : "https://shorturl.at/ijJT7" : "https://shorturl.at/ijJT7";
  // const sliderImg3 = storedData ? JSON.parse(storedData).sliderImg3 ? JSON.parse(storedData).sliderImg3 : "https://shorturl.at/kloqz" : "https://shorturl.at/kloqz";
  
  const slides = [
    {
      title: "Technology and Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ",
      img: sliderImg1,
    },
    {
      title: "Products | Delivery | Services",
      text: "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Integer nec odio. Integer nec odio.",
      img: sliderImg2,
    },
    {
      title: "History | Mission | Vision",
      text: "Fusce nec tellus sed augue semper porta. uis sem at nibh elementum . Mauris massa.",
      img:  sliderImg3,
    },
  ];

  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      allowSlidePrev={true}
      onSlideChange={() => console.log("slide change")}
      // autoplay={{ delay: 300, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.img}>
          <div className="md:flex lg:flex-row justify-between">
            <div className="flex-1">
              <h1 className=" text-5xl text-green-400 font-bold tracking-tighter mb-2">
                {slide.title}
              </h1>
              <p className="text-2xl tracking-tight">{slide.text}</p>
            </div>
            <div>
              <img
                className="rounded-lg"
                src={slide.img}
                width={500}
                alt="slide"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
