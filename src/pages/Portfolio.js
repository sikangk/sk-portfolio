import React, { useState, useEffect, useRef } from 'react';
import '../design/css/portfolio.css';
import '../design/css/portfolio.device.css';
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
import 'swiper/css/navigation';
import ModalComponent from '../components/Modal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


SwiperCore.use([Autoplay, Pagination, Navigation]);

const portfolioArr = [
    {
        title: '애기야가자',
        skill: 'TypeScript,JavaScript,React-Native,Context-Api,Recoil,Redux,Firebase',
        content: '위치기반을 이용한 장소 제공과 같은 앱 메인 기능 개발 유지보수 및 각종 SDK 연동 하였고 현재 PL 및 프론트엔드 개발을 담당하고 있습니다 , 코드푸쉬 및 Fastlane을 더욱더 활용을 잘하기위해 도입을 추진할 계획이고, 개발에 있어 필요한 부분이 있다면 도입을 위해 끝없이 공부하고있습니다.',
        image: require('../design/img/babygo.png'),
        link: 'https://babygo.page.link/Go1D'
    },
    {
        title: '애기야가자 스토어',
        skill: 'TypeScript,JavaScript,React,Suneditor',
        content: '앱내 스토어 및 네이버 판매자 스토어의 개념으로 관리자 스토어 페이지를 현재 프로토타입 개발을 완성하였고, 현재 오픈 예정에 있습니다. 프론트엔드를 담당하였습니다.',
        image: require('../design/img/babygo-store.png'),
        link: 'http://ec2-13-209-73-157.ap-northeast-2.compute.amazonaws.com/mall/admin'
    },
    {
        title: '셀링하니',
        skill: 'JavaScript,React,Redux',
        content: 'React로 개발된 판매자들을 위한 네이버 스토어 키워드조사 플랫폼인 셀링하니 개발 초기 멤버였습니다. 프론트엔드를 담당했으며, 키워드 검색부분을 전반적으로 담당하였습니다.',
        image: require('../design/img/selling.png'),
        link: 'https://babygo.page.link/Go1D'
    },
    {
        title: '한국투자신탁운용 ESG',
        skill: 'JavaScript,React-Native,Redux',
        content: 'React-Native 로 개발된 한국투자신탁운용 ESG 캠페인 어플 입니다. 사내에서 사용하는 어플이며, 환경보호를 위해 QR코드를 사용해 환경보호할때마다 포인트 적립하여 상품으로 교환하는 식의 어플입니다 프론트엔드를 담당했습니다.',
        image: require('../design/img/korea-investment.png'),
        link: 'https://play.google.com/store/apps/details?id=com.koreainvestment'
    },
    {
        title: '픽업 라이더스 클론',
        skill: 'TypeScript,JavaScript,React-Native,Redux-toolkit',
        content: 'React-Native 로 개발한 전반적인 앱구조와 개발 과정 , 앱 배포 그리고 코드푸쉬에 fastlane을 이용한 ci/cd 구축까지의 프로세스에 대한 개념을 이해할수있엇던 클론 코딩 프로젝트 입니다.',
        image: require('../design/img/pickup.png'),
        link: null
    },
    {
        title: '여행버스 웹',
        skill: 'TypeScript,JavaScript,React,Next-js,Redux',
        content: 'Next-js 를 이용해 제작한 여행버스 웹사이트 입니다. 프론트엔드르 담당하였으며, 서버사이드렌더링의 장점을 알게된 프로젝트 입니다.',
        image: require('../design/img/travel-bus.png'),
        link: 'https://www.travelbustv.com/main'
    }
]

const Portfolio = ({ setBlockScroll }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projectItemInfo, setProjectItemInfo] = useState({});

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (modalIsOpen) {
            setBlockScroll(true);
        } else {
            setBlockScroll(false);
        }
    }, [modalIsOpen])

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
                <h1 className='main-text'>PROJECTS</h1>
                <div ref={prevRef}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: 100,
                        zIndex: 100,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        // textShadow: '-1px 0 #000, 0 2px #000, 1px 0 #000, 0 -1px #000',
                    }}><ArrowBackIosNewIcon fontSize='large'/></div>
                <div ref={nextRef}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        width: 100,
                        zIndex: 100,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        // textShadow: '-1px 0 #000, 0 2px #000, 1px 0 #000, 0 -1px #000',
                    }}><ArrowForwardIosIcon fontSize='large'/></div>
                <div style={{ width: '80%', }}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        // centeredSlidesBounds
                        allowTouchMove={false}
                        // grabCursor={true}
                        draggable={false}
                        pagination={{
                            clickable: true,
                        }}

                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}

                        // navigation={true}
                        modules={[Pagination, Navigation]}
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
                                slidesPerView: 3,
                                spaceBetween: 30,
                                centeredSlides: true,
                            }


                        }}
                    >



                        {
                            portfolioArr.map((item, index) => {

                                const contentSplit = item.skill.split(',');



                                if (contentSplit.length % 2 === 1) {
                                    contentSplit.push(['']);
                                }

                                return (
                                    <SwiperSlide
                                        onClick={() => {
                                            setProjectItemInfo(item);
                                            openModal();
                                        }}
                                        key={index}
                                        style={{ display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div style={{ height: 30 }} />
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5%' }}>
                                            <h5 >클릭해서 자세히보기</h5>
                                        </div>
                                        <div className='content-wrap'>
                                            <section className='img-wrap'>
                                                <img style={{ width: '80%', height: 250 }} src={item.image} />
                                            </section>
                                            <div className='seprator' />
                                            <section classNmae='title-wrap'>
                                                <h3>[{item.title}]</h3>
                                            </section>
                                            <section className='skill-wrap'>
                                                <div style={{ height: 10 }} />
                                                <h5>Skills</h5>
                                                <div className='seprator' />
                                                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', borderTop: '1px solid #bdbdbd' }}>
                                                    {contentSplit.map((item, index) => {
                                                        return <div style={{ width: '45%', marginTop: 5 }} key={index}>{item}</div>
                                                    })}
                                                </div>
                                            </section>
                                            <div style={{ height: 50 }} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>

            </div>
            <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} projectItemInfo={projectItemInfo} />
        </section>
    )
}

export default Portfolio;