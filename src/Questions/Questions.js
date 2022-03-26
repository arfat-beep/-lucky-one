import React from "react";

const Questions = () => {
  return (
    <div className="m-5">
      <h1 className="pb-4">Quesions and Answers</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How react Works
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Using 'React' we need 2 packages from node which is 'React' and
              'React Dom'. In 'React' every component is pure JavaScript. Now
              'React' transform pure JavaScript into HTML code. Then 'React Dom'
              inject those code to an HTML file. Then browser can run that HTML
              file to show whole information which we created using react.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Props Vs State
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <table className="table table-dark table-striped table-hover w-50 m-auto text-center">
                <thead>
                  <tr>
                    <th scope="col">Props</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Props are read only</td>
                    <td>State can change using asynchronous way</td>
                  </tr>
                  <tr>
                    <td>Props cannot be modified</td>
                    <td>State can be modified using setState()</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How useState works
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              useState is a react Hook that allows you to have state variables
              in functional components. One can change state in it. Whenever the
              state changes, React re-renders the component to the browser.
              Before updating the value of the state, we need to build an
              initial state setup. Once we are done with it, we use the
              setState() method to change the state object.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
