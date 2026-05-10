import React from 'react'
import './Plans.css'
import fitnessAndWellnessImage from '../../assets/fitnessAndWellness.jpg'
import womenHealthImage from '../../assets/womenHealth.jpg'
import workWithUsImage from '../../assets/workWithUs.jpg'
import contact from '../../assets/address.png'
import phone from '../../assets/phone.png'

const Plans = () => {

const scrollToContactSection= () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="plans-container" id='plans'>
      <div className="fitnessAndWellness">
        <div className="details">
          <h1>FITNESS AND WELLNESS</h1>
          <p>Our goal is to increase your body’s durability, improve your functional fitness,
            and elevate your overall quality of life. We achieve this through personalized programming,
            expert instruction, and science-based coaching.
            <br />
            Whether you’re recovering from an injury or simply looking to feel better and move more
            efficiently, we guide you with fitness and wellness training designed to fit seamlessly
            into your lifestyle. You’ll work with a trainer 1 to 2 times a week, ensuring you feel
            supported every step of your journey.
          </p>
        </div>
        <div className="fitnessAndWellnessImage">
          <img src={fitnessAndWellnessImage} alt="" />
        </div>
      </div>

      <div className="womenHealth">
        <div className="womenHealthImage">
          <img src={womenHealthImage} alt="" />
        </div>
        <div className="details">
          <h1>WOMEN’S HEALTH</h1>
          <p>Women need a completely different approach to fitness and longevity.
            Training and  eating like a man does not balance and support your hormones.
            <br />
            We specialize in women’s health: guiding clients through the many hormonal changes that occur
            throughout life—from perimenopause to post-menopause, as well as postnatal and post-hysterectomy
            recovery. We work with you 1 to 2 times a week, providing consistent support and accountability
            while creating personalized fitness and nutrition plans designed specifically for your body,
            lifestyle, and goals.
          </p>
        </div>
      </div>

      <div className="workWithUs">
        <div className="details">
          <h1>Work with Us</h1>
          <p>Fitness should fit your life — not take it over. Our training is approachable,
            efficient, and built for busy schedules. Train smarter so you can keep playing,
            keep competing, and keep doing what you love. Love long. Live well.</p>

          <button className='contactBtn' onClick={scrollToContactSection}> Contact Us </button>
        </div>

        <div className="workWithUsImage">
          <img src={workWithUsImage} alt="" />
        </div>
      </div>

      <div className="membership" id='contact'>
        <div className="card">
          <h1>contact</h1>
          <div className="membershipDetails">
          <div className='address'>
          <img src={contact} alt="" />
          <span> Wadi El Zayni-Saida</span>
          </div>
          <div className="phone">
            <img src={phone} alt="" />
          <span>+961 71-342-627</span>
          </div>
          <h3><span>Waiting your Visit</span></h3>
          </div>
        </div>
        <div className="card">
          <h1>Man</h1>
          <div className="membershipDetails">
            <span><h1>$30</h1>per month</span>
            <span>AUTO RENEWS</span>
            <span>Use of All Strength and Cardio Equipment</span>
            <hr className='horizontalRow' />
            <span>MONDAY - SATURDAY</span>
            <span>2:00 Pm - 12:00 AM</span>
          </div>
        </div>
        <div className="card">
          <h1>Lady</h1>
          <div className="membershipDetails">
            <span><h1>$20</h1>per month</span>
            <span>AUTO RENEWS</span>
            <span>Use of All Strength and Cardio Equipment</span>
            <hr className='horizontalRow' />
            <span>MONDAY - FRIDAY</span>
            <span>8:00 AM - 1:00 PM</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Plans