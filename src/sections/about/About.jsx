import AboutImage from '../../assets/Abaaa.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Profile" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects my clients love have always been my passion. seeking to leverage skills to
contribute to the development of visually appealing and
user-friendly web applications, I'm always motivated to do more!
                </p>
                <p>
                Hello, my name is Myka Vargas, and I am a junior full stack developer. With a passion for creating innovative and interactive web applications, I specialize in both front-end and back-end development, utilizing my skills in a range of programming languages and development tools.
                </p>

                <p>Thank you for taking the time to visit my website. I am excited about the prospect of working with you on your next project and look forward to the opportunity to showcase my skills as a junior full stack developer.</p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About