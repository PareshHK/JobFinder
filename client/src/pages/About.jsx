import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-500 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to Tresbien La Technologies, a pioneering force in the realm of talent acquisition and IT solutions. Established with a vision to redefine recruitment, we specialize in connecting exceptional talent with top-tier opportunities in the ever-evolving landscape of Information Technology.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Our Mission</h1>
Driven by innovation and dedication, our mission is to empower individuals and businesses alike by facilitating the perfect synergy between talent and organizations. We strive to be the catalysts of growth, enabling professionals to achieve their career aspirations while helping companies thrive through strategic staffing solutions.
        </p>
        <p>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>What sets us Apart</h1>
At Tresbien La Technologies, our approach is founded on precision, reliability, and a commitment to excellence. We leverage cutting-edge technology and industry insights to curate tailor-made solutions that precisely meet the diverse needs of our clients across various sectors.
</p>
<p>
<h1 className='text-3xl text-blue-600 font-bold mb-5'>Join us</h1>
We invite you to join the Tresbien La Technologies family to unlock the door to unparalleled career advancement. Let’s embark on this journey together and carve out a path towards a prosperous future filled with endless possibilities.

Thank you for considering Tresbien La Technologies as your partner in success. We look forward to being a part of your career journey!
</p>




      </div>
    </div>
  );
};

export default About;