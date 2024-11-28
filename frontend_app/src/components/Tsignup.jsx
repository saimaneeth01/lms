import React from "react";


function Tsignup() {
return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div className="container" style={{ maxWidth: '800px', width: '100%' }}>
        <br /><br />
        <div className="mb-3 bg-warning">
          <h3>
            <label htmlFor="exampleUsername" className="form-label ">Teacher Registration</label>
          </h3>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
            //   onChange={handleChange}
              name="first_name"
              className="form-control"
              id="firstname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
            //   onChange={handleChange}
              name="last_name"
              className="form-control"
              id="lastname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleEmail" className="form-label">Email</label>
            <input
              type="email"
            //   onChange={handleChange}
              name="email"
              className="form-control"
              id="exampleEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="examplePassword" className="form-label">Password</label>
            <input
              type="password"
            //   onChange={handleChange}
              name="password"
              className="form-control"
              id="examplePassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleConfirmpassword" className="form-label">Confirm Password</label>
            <input
              type="password"
            //   onChange={handleChange}
              name="confirm_password"
              className="form-control"
              id="exampleConfirmpassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleQualification" className="form-label">Qualification</label>
            <input
              type="text"
            //   onChange={handleChange}
              name="qulfication"
              className="form-control"
              id="exampleQualification"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleMobilenumber" className="form-label">Mobile Number</label>
            <input
              type="number"
            //   onChange={handleChange}
              name="mobile_number"
              className="form-control"
              id="exampleMobilenumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleSkills" className="form-label">Skills</label>
            <input
              type="text"
            //   onChange={handleChange}  onClick={submitForm}
              name="skills"
              className="form-control"
              id="exampleSkills"
            />
          </div>
          <button type="submit"  className="btn btn-primary bg-info">Register</button>  
        </form>
      </div>
    </div>
  );
}

export default Tsignup;