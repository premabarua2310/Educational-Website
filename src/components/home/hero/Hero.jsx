import React from 'react';
import Title from '../../common/title/Title';
import "./hero.css";

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACADEMIC' title="Best Online Education" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div className="button">
                <button className='primary-btn'>
                    GET STARTED NOW <i class="fa-solid fa-right-long"></i>
                </button>
                <button>
                   VIEW COURSES <i class="fa-solid fa-right-long"></i>
                </button>
            </div>
            </div>
        </div>
    </section>
    <div className="margin"></div>
    </>
  );
}

export default Hero;
