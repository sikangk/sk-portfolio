import React from 'react';
import '../design/css/about.css';

const About = () => {
    return (
        <section
            className='about-wrapper'>
            <div className='about-wrapper-content'>
                <div className='content-photo-wrap'>
                    <img className='content-photo' src={require('../design/img/sikang-photo.jpeg')} />
                </div>
                <div style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textShadow: '-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000'
                }}>
                    <span>현재 (주)애기야가자 에서 프론트엔드 개발을 담당하고 있습니다.</span>
                    <br />
                    <br />
                    <span># 필요한 기술이 있으면 항상 습득하려 노력합니다.</span>
                    <br />
                    <span># 끝없이 나아가는 개발자 입니다.</span>
                    <br />
                    <span># 자기계발에 충실합니다.</span>
                    <br />
                </div>
            </div>
        </section>
    );
}

export default About;