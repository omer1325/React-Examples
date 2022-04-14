import './App.css';
import { useFormik } from 'formik';

function App() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Ömer',
      lastName: 'İngeç',
      email: 'omer.ingec@gmail.com',
      gender: 'male',
      hobies: [],
      country: "Turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input value={values.firstName} id="firstName" name="firstName" placeholder="Jane" onChange={handleChange} />
              <br /><br />

              <label htmlFor="lastName">Last Name</label>
              <input value={values.lastName} id="lastName" name="lastName" placeholder="Doe" onChange={handleChange} />
              <br /><br />
              
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={handleChange}
              />
              <br /><br />
              
              <span>Male</span>
              <input type="radio" value="male" name="gender"  onChange={handleChange} checked={values.gender === "male"} />
              <span>Female</span>
              <input type="radio" value="female" name="gender"  onChange={handleChange}  checked={values.gender === "female"}/>
              <br /><br />

              <div>
                <input type="checkbox" name="hobies" value="Football" onChange={handleChange}/>
                Football
              </div>
              <div>
                <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/>
                Cinema
              </div>
              <div>
                <input type="checkbox" name="hobies" value="Photography" onChange={handleChange}/>
                Photography
              </div>                            
              <br /><br />

              <select value={values.country} name="country" onChange={handleChange}>
                <option value="turkey">Turkey</option>;
                <option value="england">England</option>;
                <option value="usa">USA</option>;
              </select>
              <br /><br />

              <button type="submit">Submit</button>

              <br /><br />

              {JSON.stringify(values)}
            </form>
    </div>
  );
}

export default App;
