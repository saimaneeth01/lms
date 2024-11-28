import React from 'react';
import logo from '../assets/images/python.png';
import { useNavigate, Link } from 'react-router-dom';

function Courses() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/PythonC')
  }
  const handleDsClick = () => {
    navigate('/pyfullstack')
  }
  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-4">Latest Courses</h3>
      {/* First Row */}
      <div className="row g-4 mb-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }} onClick={() => handleCardClick('/python-full-stack')}
          >
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div 
className="position-absolute bottom-0 start-50 translate-middle-x" 
style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)',  width: '100%', textAlign: 'center' }} 
> */}
            <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{ textDecoration: "None" }}>PYTHON FULL STACK</Link></h5>
            {/* </div> */}
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }} onClick={() => handleDsClick('/python-full-stack')}>
            <img src="dot net.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div 
className="position-absolute bottom-0 start-50 translate-middle-x" 
style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)',  width: '100%', textAlign: 'center' }} 
> */}
            <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{ textDecoration: "None" }}>Dot Net</Link></h5>
            {/* </div> */}
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }} onClick={() => handleCardClick('/python-full-stack')} >
            <img src="java_img.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div 
className="position-absolute bottom-0 start-50 translate-middle-x" 
style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)',  width: '100%', textAlign: 'center' }}
> */}
            <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{ textDecoration: "None" }}>JAVA FULL STACK</Link></h5>
            {/* </div> */}
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }} onClick={() => handleCardClick('/python-full-stack')} >
            <img src="aws png.png" className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            {/* <div 
className="position-absolute bottom-0 start-50 translate-middle-x" 
style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)',  width: '100%', textAlign: 'center' }} 
> */}
            <h5 className="card-title m-0 p-2 text-center"><Link href="#" style={{ textDecoration: "None" }}>AWS </Link></h5>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* Additional Row */}
      <br /><br /><br />
      <h2 className="pb-1 mb-4">Latest Courses</h2>
      <div className="row g-4 mb-4">
        {/* Card 5 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Add more rows as needed */}
      {/* Additional Row */}
      <br /><br /><br />
      <h2 className="pb-1 mb-4">Latest Courses</h2>
      <div className="row g-4 mb-4">
        {/* Card 5 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Row */}
      <br /><br /><br />
      <div className="row g-4 mb-4">
        {/* Card 5 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="col-md-3">
          <div className="position-relative" style={{ width: '18rem', height: '300px', margin: '0 auto' }}>
            <img src={logo} className="card-img-top" alt="Logo" style={{ height: '100%', objectFit: 'cover' }} />
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ color: 'white', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', textAlign: 'center' }}
            >
              <h5 className="card-title m-0 p-2">PYTHON FULL STACK</h5>
            </div>
          </div>
        </div>
      </div>
      {/* You can repeat the above pattern for additional rows */}
    </div>
  );
}
export default Courses;