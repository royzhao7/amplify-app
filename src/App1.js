import ColumnChart from "./columnchart";
import LineChart from "./chartline";
import CircleChart from "./circlechart";
import Process1 from "./process1";
import Process2 from "./process2";
import Process3 from "./process3";
import Status from "./status";

function App1() {
  return (
    <div id="wrapper">
      <div className="content-area">
        <div className="container-fluid">
          <div className="main">
            <div className="row mt-4">
              <div className="col-md-5">
                <div className="box columnbox mt-4">
                  <div id="columnchart">
                    <ColumnChart></ColumnChart>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="box  mt-4">
                  <div id="linechart">
                    <LineChart></LineChart>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <div className="box radialbox mt-4">
                  <div id="circlechart">
                    <CircleChart></CircleChart>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="box mt-4">
                  <div className="mt-4">
                    <div id="progress1">
                      <Process1></Process1>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div id="progress2">
                      <Process2></Process2>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div id="progress3">
                      <Process3></Process3>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
               <div className="row">
                <div className="col-md-5">
                  <Status></Status>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App1;
