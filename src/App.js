import React, { Component } from 'react';
import './App.css';
import html from './images/skills/html.png'
import css from './images/skills/css.png'

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="home-section">
          <h1>Hi, I am Faraz</h1>
          <p>Full Stack Developer</p>
        </div>

        {/* <div className="work-section">
           <h1 className="text-center my-6">
             Projects I have Done
           </h1>
        </div> */}

        <div className="progress-section my-6">
          <h1 className="text-center">My Skills</h1>
          <div className="container-fluid">
            <div className="row my-5">
              <div className="col-6 max-width">
                <img src={html} width={"200px"} />
              </div>
              <div className="col-6 my-6">
                <div class="progress">
                  <div class="progress-bar" style={{ width: "80%" }}>80%</div>
                </div>
              </div>
            </div>

            <div className="row my-6">
              <div className="col-6 max-width">
                <img src={css} width={"170px"} />
              </div>
              <div className="col-6 my-6">
                <div class="progress">
                  <div class="progress-bar" style={{ width: "60%" }}>60%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
