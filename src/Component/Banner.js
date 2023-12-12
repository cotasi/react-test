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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      );
}
