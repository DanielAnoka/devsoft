import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { name: "Alice Johnson", image: "/assets/main.png", rating: 5, review: "This service is absolutely amazing. It exceeded my expectations!" },
  { name: "John Smith", image: "/assets/main.png", rating: 4, review: "Great experience overall. Would highly recommend to others." },
  { name: "Emily Davis", image: "/assets/main.png", rating: 5, review: "A truly exceptional experience from start to finish." },
  { name: "John Smith", image: "/assets/main.png", rating: 4, review: "Great experience overall. Would highly recommend to others." },
  { name: "Emily Davis", image: "/assets/main.png", rating: 5, review: "A truly exceptional experience from start to finish." },
  { name: "Emily Davis", image: "/assets/main.png", rating: 5, review: "A truly exceptional experience from start to finish." },
];

const TestimonialCarousel = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">What Our Clients Say</h2>


        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-xl p-6 text-center space-y-4 mx-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 transform transition-all hover:scale-110"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
                <div className="flex justify-center space-x-1 text-yellow-400 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
                <p className="text-sm sm:text-lg text-gray-600 italic mt-4">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
