import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { imageUrl } from "../../config/apiUrl";
import classes from "./SideThumbCarousel.module.css";

export default function CustomCarousel({
  dataArray,
  thumbsPosition = "horizontal",
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageOpen, setImageOpen] = useState({
    isOpen: false,
    photoIndex: 0,
  });
  return (
    <>
      <div
        className={[
          classes.SwiperWrapper,
          thumbsPosition === "vertical" ? classes.vertical : classes.horizontal,
        ].join(" ")}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className={classes.mainSwiper}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {dataArray?.length > 0 &&
            dataArray?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={classes.content}
                    onClick={() => {
                      setImageOpen({
                        isOpen: true,
                        photoIndex: index,
                      });
                    }}
                  >
                    <img src={imageUrl(item)} alt="..." />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={thumbsPosition === "vertical" ? 4 : 4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          direction={thumbsPosition}
          className={classes.swiperThumbs}
          breakpoints={{
            320: {
              slidesPerView: thumbsPosition === "vertical" ? 3 : 2,
              spaceBetween: 5,
              direction: "horizontal",
            },

            768: {
              slidesPerView: thumbsPosition === "vertical" ? 4 : 3,
              spaceBetween: 10,
              direction: thumbsPosition,
            },

            1024: {
              slidesPerView: thumbsPosition === "vertical" ? 6 : 4,
              spaceBetween: 10,
              direction: thumbsPosition,
            },
          }}
        >
          {dataArray?.length > 0 &&
            dataArray?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={classes.content}>
                    <img src={imageUrl(item)} alt="..." />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {imageOpen?.isOpen && (
        <Lightbox
          mainSrc={imageUrl(dataArray?.[imageOpen?.photoIndex])}
          nextSrc={imageUrl(
            dataArray?.[(imageOpen?.photoIndex + 1) % dataArray?.length]
          )}
          prevSrc={imageUrl(
            dataArray[
              (imageOpen?.photoIndex + dataArray?.length - 1) %
                dataArray?.length
            ]
          )}
          onCloseRequest={() => setImageOpen({ isOpen: false, photoIndex: 0 })}
          onMovePrevRequest={() =>
            setImageOpen({
              isOpen: true,
              photoIndex:
                (imageOpen?.photoIndex + dataArray?.length - 1) %
                dataArray?.length,
            })
          }
          onMoveNextRequest={() =>
            setImageOpen({
              isOpen: true,
              photoIndex: (imageOpen?.photoIndex + 1) % dataArray?.length,
            })
          }
        />
      )}
    </>
  );
}
