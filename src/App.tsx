import React, { Fragment } from "react";
import { ApvFilePicker } from "@appvitalinc/file-upload-widget-api-react";
import { SingleFileUpload } from "./components/SingleFileUpload";
import { MultiFileUpload } from "./components/MultiFileUpload";
import { GenerateThumbnails } from "./components/GenerateThumbnails";
import { ApplyWatermark } from "./components/ApplyWatermark";

interface IProps {
  onClick: any;
}
const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <a className="navbar-brand" href="#"></a>
        <a className="navbar-brand" href="#">
          <img
            src="https://appvital.com/images/logo-appvital-dark.png"
            width="auto"
            height="50"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="container py-3">
        <div className="row mb-4">
          <div className="col">
            <h5>1. Single File Upload:</h5>
            <SingleFileUpload />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h5>2. Multiple File Upload:</h5>
            <MultiFileUpload />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h5>3. Generate Thumbnail:</h5>
            <GenerateThumbnails />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h5>4. Watermark:</h5>
            <ApplyWatermark />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <h5>5. Custom Renderer:</h5>
            <ApvFilePicker
              apikey={"YOUR-API-KEY"}
              customRender={({ onClick }: IProps) => (
                <div>
                  <strong className="pr-4">Add some custom stuff</strong>
                  <button className="btn btn-primary" onClick={onClick}>Add image</button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
