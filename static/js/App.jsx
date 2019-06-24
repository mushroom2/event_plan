import React from "react";
import MyFileInput from "./MyFileInput"
import DownloadsList from "./DowloadsList"
import FbLogin from './FB'

export default class App extends React.Component {
  render () {

      return (
          <div className="mainBlock">
              <div className="container">
                  <div className="col-md-12">
                      <div className="row">
                          <FbLogin/>
                      </div>
                  </div>
              </div>
          </div>);
  }
}