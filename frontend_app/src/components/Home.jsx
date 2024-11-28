// import React from 'react'
// import logo from '../assets/images/python.png'
// import logo1 from '../assets/images/aws png.png'
// import logo2 from '../assets/images/dot net.png'
// import logo3 from '../assets/images/java_img.png'

// function Home() {

//   return (

//     <div className="container mt-4">
//     <h3>Latest courses</h3>
//       <div className="row">
//         <div className="col-md-3">
//           <div className="card" style={{ width: '18rem', height: '300px' }}>
//             <img src={logo} className="card-img-top" alt="Logo" />
//             <div className="card-body">
//               <h5 className="card-title">python</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </p>
//               <button className="btn btn-primary">Go somewhere</button>

//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card" style={{ width: '18rem', height: '300px' }}>
//             <img src={logo1} className="card-img-top" alt="logo1" />
//             <div className="card-body">
//               <h5 className="card-title">AWS</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </p>
//               <button className="btn btn-primary">Go somewhere</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card" style={{ width: '18rem', height: '300px' }}>
//             <img src={logo2} className="card-img-top" alt="logo2" />
//             <div className="card-body">
//               <h5 className="card-title">Recently added</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </p>
//               <button className="btn btn-primary">Go somewhere</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card" style={{ width: '18rem', height: '300px' }}>
//             <img src={logo3} className="card-img-top" alt="Logo3" />
//             <div className="card-body">
//               <h5 className="card-title">Java</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </p>
//               <button className="btn btn-primary">Go somewhere</button>

//             </div>
//           </div>
//         </div>





//       </div>

//     </div>






//   );
// }
// export default Home;




import React from 'react';
import logo from '../assets/images/python.png';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
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
export default Home;
