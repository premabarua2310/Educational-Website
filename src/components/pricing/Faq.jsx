import React from 'react';
import { faq } from '../../dummydata';
import Title from '../common/title/Title';
import { useState } from 'react';

const Faq = () => {

    const [click, setClick] = useState(false)
    const toggle = (index) => {
        if (click === index) {
            return setClick(null)
        }
        setClick(index)
    }

    return (
        <>
            <Title subtitle="FAQS" title="Frequently Ask Any Questions" />
            <section className='faq'>
                <div className="container">
                    {faq.map((val, index) => (
                        <div className="box">
                            <button className='accordion' onClick={() => toggle(index)} key={index}>
                                <h2> {val.title} </h2>
                                <span> {click === index ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-right"></i>} </span>
                            </button>
                            {click === index ? (
                                <div className="text">
                                    <p> {val.desc} </p>
                                </div>
                            ) : null}

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Faq;
