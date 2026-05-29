import './App.css';

import Login from './components/Login';
import Home from './components/Home';

function App() {

  const isLoggedIn = true;

  const employees = [

    {
      name: "Saravanan",
      age: 22,
      role: "Frontend Developer",
      location: "Chennai",
      skills: "HTML, CSS, JavaScript, React"
    },

    {
      name: "Harini",
      age: 27,
      role: "UI Designer",
      location: "Coimbatore",
      skills: "Figma, Bootstrap, CSS"
    },

    {
      name: "Arun",
      age: 24,
      role: "Backend Developer",
      location: "Madurai",
      skills: "Node.js, Express.js, MongoDB"
    },

    {
      name: "Keerthana",
      age: 25,
      role: "Full Stack Developer",
      location: "Salem",
      skills: "React, Node.js, SQL"
    },

    {
      name: "Venkat",
      age: 26,
      role: "Software Engineer",
      location: "Trichy",
      skills: "Java, Spring Boot, MySQL"
    }

  ];

  return (

    <div className="container">

      {
        isLoggedIn ? (

          <>

            <h1 className="title">
              Employee Details
            </h1>

            <div className="card-container">

              {
                employees.map((employee, index) => (

                  <Home
                    key={index}
                    name={employee.name}
                    age={employee.age}
                    role={employee.role}
                    location={employee.location}
                    skills={employee.skills}
                  />

                ))
              }

            </div>

          </>

        ) : (

          <Login />

        )
      }

    </div>

  );
}

export default App;