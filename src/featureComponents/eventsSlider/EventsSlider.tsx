import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import RoundContainer from '@/uiComponents/roundContainer/RoundContainer';
import EventCard from '@/uiComponents/eventCard/EventCard';
import ArrowIcon from '@/assets/icons/arrow.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './eventsSlider.scss';

const EventsSlider = () => {
    return (
        <div className='events-slider__wrapper'>
            <RoundContainer containerClassName="events-slider__prev">
                <ArrowIcon className="events-slider__navigation-icon" />
            </RoundContainer>
            <RoundContainer containerClassName="events-slider__next">
                <ArrowIcon className="events-slider__navigation-icon" />
            </RoundContainer>
            <Swiper
                className='events-slider'
                navigation={{
                    prevEl: '.events-slider__prev',
                    nextEl: '.events-slider__next',
                }}
                pagination={{
                    el: '.events-slider__pagination',
                    clickable: true,
                }}
                freeMode={true}
                breakpoints={{
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        pagination: false,
                    },
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        navigation: false,
                        freeMode: false,
                    },
                }}
                modules={[Navigation, FreeMode, Pagination]}
            >
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <SwiperSlide><EventCard eventYear={2015} eventDescription='13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' /></SwiperSlide>
                <div className="events-slider__pagination" />
            </Swiper>
        </div>
    );
}

export default EventsSlider;
