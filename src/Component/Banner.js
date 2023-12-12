import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade , Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../css/banner.module.scss';

export default () => {
    return (
        <Swiper
          modules = {[EffectFade, Autoplay]} effect = "fade"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay = {{delay: 2000, disableOnInteraction: false}}>
          <SwiperSlide style={{backgroundColor: "yellow", height: "300px",textAlign: "center",lineHeight: "300px"}}>Slide 1</SwiperSlide>
          <SwiperSlide style={{backgroundColor: "gray", height: "300px",textAlign: "center",lineHeight: "300px"}}>Slide 2</SwiperSlide>
          <SwiperSlide style={{backgroundColor: "red", height: "300px",textAlign: "center",lineHeight: "300px"}}>Slide 3</SwiperSlide>
          <SwiperSlide style={{backgroundColor: "blue", height: "300px",textAlign: "center",lineHeight: "300px"}}>Slide 4</SwiperSlide>
        </Swiper>
      );
}
