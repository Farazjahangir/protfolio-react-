import React, { Component } from 'react';
import './App.css';
import html from './images/skills/html.png'
import css from './images/skills/css.png'
import js from './images/skills/js.png'
import reactLogo from './images/skills/reactLogo.png'


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

            <div className="row my-3">
              <div className="col-6 max-width">
                <img src={html} width={"110px"} />
              </div>
              <div className="col-6 my-5">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" style={{ width: "80%" }}>80%</div>
                </div>
              </div>
            </div>

            <div className="row my-2 content-align-right">
              <div className="col-6 my-5 content-align-right">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" style={{ width: "60%" }}>60%</div>
                </div>
              </div>
              <div className="col-6 max-width">
                <img src={css} width={"80px"} />
              </div>
            </div>

            <div className="row my-2">
              <div className="col-6 max-width">
                <img src={js} width={"110px"} />
              </div>
              <div className="col-6 my-5">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" style={{ width: "80%" }}>50%</div>
                </div>
              </div>
            </div>

            <div className="row my-2 content-align-right">
              <div className="col-6 my-5 content-align-right">
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" style={{ width: "60%" }}>50%</div>
                </div>
              </div>
              <div className="col-6 max-width">
                <img src={reactLogo} width={"120px"} />
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
