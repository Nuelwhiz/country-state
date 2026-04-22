import "./App.css";
import Countries from "./Country/countries.json";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");

  const [state, setState] = useState("");

  function triggerCountry(e) {
    setCountry(e.target.value);
  }
  function triggerState(e) {
    setState(e.target.value);
  }
  const countryOptionb =
    Countries &&
    Object.keys(Countries)?.map((countryData) => (
      <option value={countryData} key={countryData}>
        {countryData}
      </option>
    ));
  const stateOption = Countries[country]?.map((stateData) => (
    <option key={stateData}>{stateData}</option>
  ));

  //useeffect practice
  useEffect(() => {
    if (state) {
      alert("Country: " + country + ", " + " State: " + state);
    }
  }, [state]);
  return (
    <>
      <main className="country-main-container">
        <div className="country-state">
          <div className="country-select-container">
            <select
              className="select-box"
              onChange={triggerCountry}
              name=""
              id=""
            >
              <option value="select">select country</option>
              {countryOptionb}
            </select>
          </div>

          <div className="state-select-container">
            <select
              className="select-box"
              onChange={triggerState}
              name=""
              id=""
            >
              <option value="">select state</option>

              {
                /* Countries &&
                  country && */
                stateOption
              }
            </select>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
