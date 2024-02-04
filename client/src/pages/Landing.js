import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
        <span className='handleLogo'>

          <Logo  />
        </span>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Welcome to <span>CourseMate</span> !
            </h1>
            <p>
              the open-source hub for academic success! Access to the any online course notes, previous year questions papers, detailed notes, and more. Contribute and collaborate with a community passionate about learning. Join CourseMate today at CourseMate. Unlock knowledge, ace exams! #OpenSourceEdTech
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
