import { testimonials } from "../constants"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonials() {
    return (
        <div className="mt-10 py-8 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 lg:my-10">
                What people are saying
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="mb-12">
                        <div className="bg-neutral rounded-md p-4 text-md border border-neutral-800 font-thin h-72 md:h-96 xl:h-80">
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                    className="w-12 h-12 mr-4 rounded-full border border-neutral-300"
                                />
                                <div>
                                    <h6>
                                        {testimonial.user}
                                    </h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                            <p className="mt-4">
                                {testimonial.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
