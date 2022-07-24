import React,{useMemo} from 'react';
import '../design/css/about.css';
import '../design/css/about.device.css';
import AnimatedText from 'react-animated-text-content';


const About = () => {

    return (
        <section
            className='about-wrapper'>
            <div className='about-wrapper-content'>
                <div className='content-photo-wrap'>
                    <img className='content-photo' src={require('../design/img/sikang-photo.jpeg')} />
                </div>
                <div style={{
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    padding: 20,
                    color: 'white',
                    fontWeight: 'bold',
                    textShadow: '-2px 0 #255,0 2px #255,2px 0 #255,0 -2px #255',
                    borderRadius: 20
                }}>

                    <span>
                        현재 (주)애기야가자 에서 프론트엔드 개발 및 PL 을 담당하고 곽시강 이라고 합니다. 반갑습니다 :)
                    </span>
                    <br />
                    <br />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        // interval={0.06}
                        duration={0.8}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        # 승부욕이 강합니다.
                    </AnimatedText>
                    <br />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        // interval={0.06}
                        duration={0.8}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >


                        # 주인의식이 강합니다.

                    </AnimatedText>
                    <br />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        // interval={0.06}
                        duration={0.8}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >


                        # 필요한 기술이 있으면 항상 습득하려 노력합니다.

                    </AnimatedText>
                    <br />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        // interval={0.06}
                        duration={0.8}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >


                        # 끝없이 나아가는 개발자 입니다.

                    </AnimatedText>
                    <br />
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        // interval={0.06}
                        duration={0.8}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >


                        # 자기계발에 충실합니다.

                    </AnimatedText>

                </div>
            </div>
        </section>
    );
}

export default React.memo(About);