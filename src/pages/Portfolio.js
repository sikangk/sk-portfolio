import React, { useState } from 'react';
import '../design/css/portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/swiper.min.css";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"//스와이퍼용 css
import "swiper/css";
import "swiper/css/pagination";
import ModalComponent from '../components/Modal';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const portfolioArr = [
    { title: '애기야가자', content: '', image: '' },
    { title: '애기야가자 스토어', content: '', image: '' },
    { title: '셀링하니', content: '', image: '' },
    { title: '한국투자QR', content: '', image: '' },
    { title: '여행버스 웹', content: '', image: '' }
]

const Portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <section
            className='portfolio-wrapper'>

            <div className='portfolio-wrapper-content'>
                <h1>PROJECTS</h1>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    // grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                            centeredSlides: true,
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                            centeredSlides: true,
                        }


                    }}
                >
                    {
                        portfolioArr.map((item) => {
                            return (
                                <SwiperSlide onClick={openModal}>
                                    {/* <div style={{ border: '1px solid black', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
                                    <div >
                                        {item.title}
                                    </div>
                                    {/* </div> */}
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
            <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
        </section>
    )
}

export default Portfolio;