import { useCallback } from 'react';

const UseNavigationSwiper = (SwiperRef) => {
    const handlePrev = useCallback(() => {
        if (!SwiperRef.current) return;
        SwiperRef.current.swiper.slidePrev();
    }, [SwiperRef]);

    const handleNext = useCallback(() => {
        if (!SwiperRef.current) return;
        SwiperRef.current.swiper.slideNext();
    }, [SwiperRef]);

    return [ handlePrev, handleNext ]
};

export default UseNavigationSwiper;