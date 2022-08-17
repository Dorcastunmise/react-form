import React from 'react';
import photo from './images/him.png';

function App() {
  const [challenge, setChallenge] = React.useState(
      {
          mail: "",
          hidden: "",
          second:"",
          news: true
      }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setChallenge(prevChallenge => ({
        ...prevChallenge,
        [name]: type === "checkbox" ? checked : value
    }))
  }
  
  function handleSubmit(event) {
      event.preventDefault()
      if(challenge.hidden === challenge.second) {
        console.log("Successfully signed up")
      } else {
        condople.log("passwords do not match")
      }
      if(challenge.news) {
        console.log("Thanks for signing up for our newsletter!")
      }
  }
  
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <h1>THE GUARDIAN</h1>
            <img src={photo} className="frame"></img>
              <input 
                  type="email" 
                  placeholder="Email address"
                  className="form--input"
                  name="mail"
                  onChange={handleChange}
                  value={challenge.mail}
              />
              <input 
                  type="password" 
                  placeholder="Password"
                  className="form--input"
                  name="hidden"
                  onChange={handleChange}
                  value={challenge.hidden}
              />
              <input 
                  type="password" 
                  placeholder="Confirm password"
                  className="form--input"
                  name="second"
                  onChange={handleChange}
                  value={challenge.second}
              />
              
              <div className="form--marketing">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      name="news"
                      onChange={handleChange}
                      checked={challenge.news}                      
                  />
                  <label htmlFor="okayToEmail">Read the terms and conditions?</label>
              </div>
                <button 
                   className="form--submit">Signup
                </button>
          </form>
      </div>
  )
}
export default App