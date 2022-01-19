import React from 'react';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-overlay'>
        <h1>Meet The Team</h1>
        <div className='developers-container'>
          <div className='developer'>
            <img alt="Katherine Wu. Photograph" src="https://media-exp1.licdn.com/dms/image/C5603AQFNPM_zTRaQXQ/profile-displayphoto-shrink_400_400/0/1539660777364?e=1645056000&v=beta&t=sj2tGDk2QS6_4aTHEqp9606cPW_YNtKl2TrDrxG-Q0A"></img>
            <p className='developer-name'>Katherine Wu</p>
            <p className='developer-title'>Project Manager</p>
            <div className='developer-links'>
              <a target="_blank" rel="noopener noreferrer"
              className='linkedin' href="https://www.linkedin.com/in/katherine-wu-ca">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer"
              className='github' href="https://github.com/kw-8">Github</a>
            </div>
          </div>
          <div className='developer'>
            <img alt="David Chan. Photograph" src="https://media-exp1.licdn.com/dms/image/C4E03AQEmVkzG1lyNNA/profile-displayphoto-shrink_400_400/0/1564852713465?e=1645056000&v=beta&t=hdUDR0xZGGptoEbRj6t6qfPvzjGCUi4SzlS2JnxCA1E"></img>
            <p className='developer-name'>David Chan</p>
            <p className='developer-title'>Lead Backend Engineer</p>
            <div className='developer-links'>
              <a target="_blank" rel="noopener noreferrer"
              className='linkedin' href="https://www.linkedin.com/in/david-chan-4b1929185/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer"
              className='github' href="https://github.com/dchaan">Github</a>
            </div>
          </div>
          <div className='developer'>
            <img alt="Malachi Coberley. Photograph" src="https://media-exp1.licdn.com/dms/image/C5603AQEwsyZPrfX5ow/profile-displayphoto-shrink_400_400/0/1604175245854?e=1645056000&v=beta&t=ZU6Hu4fi0LHlvzP7lD_XNVNrKJ5ODnyFNa75niC4xVs"></img>
            <p className='developer-name'>Malachi Coberley</p>
            <p className='developer-title'>Lead Frontend Engineer</p>
            <div className='developer-links'>
              <a target="_blank" rel="noopener noreferrer"
              className='linkedin' href="https://www.linkedin.com/in/malachi-coberley">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer"
              className='github' href="https://github.com/MalachiCoberley">Github</a>
            </div>
          </div>
        </div>
        <div className='info-container'>
          <h1>What is NextGlass?</h1>
          <p>NextGLass is a wine discovery application that takes the guesswork out of finding your new favorite wine.
            <br/> Create collections of your favorite wines, and we'll use those to recommend other wines we think you will like.</p>
          <h2>NextGlass is built using:</h2>
          <strong>
          <ul>
            <li>Mongo</li>
            <li>Express</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
          </ul>
          </strong>

          <h1>Testimonials</h1>
          <blockquote>"NextGlass is the next killer app. Wow what great service, I love it! I can't say enough about NextGlass." <span>- Alexa P.</span> testimonial-generator.com </blockquote>
          <br/>
          <blockquote>"Just what I was looking for. I love your system. We can't understand how we've been living without NextGlass."<span> - Jackquelin O.</span> testimonial-generator.com</blockquote>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;