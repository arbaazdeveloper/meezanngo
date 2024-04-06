import React from 'react'
import aboutBg from '../../assets/images/about-bg.webp'
import rd1 from '../../assets/images/rd-1.jpg'
import rd2 from '../../assets/images/rd-2.jpg'
import rd3 from '../../assets/images/rd-3.jpg'
import Breaker from '../../components/Breaker/Breaker'
import hand from '../../assets/images/hand.svg'
import Button1 from '../../components/Buttons/Button1'
import edu from '../../assets/images/edu1.jpg'
import aware from '../../assets/images/aware.jpg'
import collage from '../../assets/images/collage.jpg'
import connect from '../../assets/images/connect.svg'
import heart from '../../assets/images/heart.svg'
import { useNavigate } from 'react-router-dom'
export const About = () => {
  const navigate=useNavigate()
  const navigateToProjects=()=>{navigate('/projects')}
  const IntroCard = ({ name, description, image }) => {
    return (
      <div className='p-10 w-[90%] lg:w-[350px] flex flex-col gap-10 shadow-lg hover:bg-[#469620] transition-all duration-200 hover:text-white group'>
        <div>
          <img src={image} className='h-20' />
        </div>
        <h1 className='text-2xl font-bold '>{name}</h1>
        <p className='text-xl'>{description.slice(0,300)}...</p>
        <button onClick={navigateToProjects} className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white group-hover:bg-[#fdd65b]' style={{
          '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
        }}>Learn More</button>
      </div>
    )
  }

  const ContentCard = ({ title, text, even, image }) => {
    return (
      <div className={`bg-[#469620] flex flex-col lg:${even ? 'flex-row' : 'flex-row-reverse'} lg:h-[80vh]`}>
        <div className='w-full lg:w-[50%]'>

          <img className='w-full h-full' src={image} />
        </div>
        <div className='p-10  bg-white lg:w-[50%] lg:flex items-center'>
          <div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{text}...</p>
            <div className='w-[150px] m-auto mt-10'>
              <Button1 onClick={navigateToProjects} text={'Learn More'}></Button1>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
    
      <div className='w-full h-[80vh] flex' style={{ background: `url(${aboutBg})` }} >

        <div className='w-full h-full flex flex-col  justify-center px-10'>
          <div className='bg-[#469620] p-5 w-[150px] text-center'>
            <h1 className='font-semibold text-white'>About Us</h1>
          </div>
          <h1 className='font-semibold text-2xl lg:text-5xl mt-10'>Join Us & Contact Us To Know Us Better</h1>
        </div>

        <div className='w-[50%] relative'>
          <img className='h-20 lg:h-64 absolute top-64' src={rd1} alt='RD1' />
          <img className='h-20 lg:h-64 absolute right-64 top-10' src={rd3} alt='RD1' />
          <img className='h-20 lg:h-64 absolute top-20 right-10' src={rd2} alt='RD1' />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-5xl font-bold mt-[30px] mb-[30px]  text-center'>What we do</h1>
        <Breaker />
        <div className='flex items-center flex-col lg:flex-row gap-5 my-10'>
          <IntroCard
            image={hand}
            name={'We Help'}
            description={`Our mission is simple yet profound: we help. Through our dedicated efforts and unwavering commitment, we strive to empower communities, uplift the underprivileged, and create a brighter, more equitable future for all. We envision a world where every individual has the opportunity to thrive, irrespective of their background or circumstances. With this vision as our guiding principle,`} />
          <IntroCard
            image={connect}
            name={'We Conncet'}
            description={'our commitment to connecting people and resources lies at the heart of everything we do. Through our various initiatives and programs, we strive to bridge divides, foster understanding, and build stronger, more inclusive communities. By empowering individuals to connect with one another, we believe we can create a world where everyone has the opportunity to thrive. '}


          />
          <IntroCard
          image={heart}
          name={'We Spread Happiness'}
          description={'our core mission is to spread happiness to those who need it most. Through our diverse range of programs and initiatives, we aim to uplift spirits, bring smiles to faces, and make a positive impact in the lives of individuals and communities. Whether through providing access to basic necessities, organizing joyful events and celebrations, '}

          />

        </div>

      </div>
      <div className='bg-[#469620] py-10'>
        <div className='w-[90%] m-auto flex flex-col justify-center items-center gap-5'>
          <h1 className='text-5xl font-bold mt-[30px] mb-[30px] text-white text-center'>Who Are We</h1>
          <Breaker />

          <ContentCard
            title={'We Educate'}
            image={edu}
            text={'Our NGO is dedicated to providing education to underprivileged children in our community. Through our programs and initiatives, we strive to offer quality education and educational resources to those who need it the most. By focusing on the education of needy children, we aim to empower them with the knowledge and skills necessary to build a brighter future for themselves and their communities. Through our efforts, we believe in creating lasting positive change and breaking the cycle of poverty through education.'} />
          <ContentCard even={true}
            title={'We Make Aware'}
            image={aware}
            text={'Our NGO is committed to making a tangible difference in the lives of individuals affected by war. Through our initiatives, we provide essential support and resources to communities impacted by conflict. From providing humanitarian aid and essential supplies to offering psychosocial support and rehabilitation services, we work tirelessly to alleviate the suffering caused by war. Our mission is to restore hope, rebuild lives, and foster resilience in war-torn regions, ultimately contributing to the long-term peace and stability of affected communities.'}
          />
          <ContentCard
            title={'We Innovate'}
            image={collage}
            text={'At our organization, innovation is at the heart of everything we do. We are dedicated to fostering a culture of creativity and ingenuity among students, empowering them to explore and excel in various disciplines. Through our educational programs, we teach students the art of innovation in subjects such as crafting, stitching clothes, painting, and designing. By providing hands-on learning experiences and encouraging out-of-the-box thinking, we aim to equip students with the skills and confidence to innovate and create. Our goal is to inspire the next generation of innovators and problem-solvers who will make a positive impact in their communities and beyond.'}
          />
        </div>

      </div>

    </div>
  )
}
