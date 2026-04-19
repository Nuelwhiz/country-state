import "./App.css";
import Countries from "./Country/countries.json";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");

  const [state, setState] = useState("");
  const [erro, setErro] = useState("");

  function triggerCountry(e) {
    setCountry(e.target.value);
  }
  function triggerState(e) {
    setState(e.target.value);
  }
  function done(e) {
    e.preventDefault();
    if (!country && !state) {
      setErro("please fill before submiting");
    } else if (!state) {
      setErro("please select state");
    } else {
      setErro("");
      console.log("country:", country);
      console.log("state:", state);
      setCountry(state);
      if (country && state) {
      }
      setCountry("");
      setState("");
    }
  }
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
              {Countries &&
                Object.keys(Countries)?.map((countryData) => (
                  <option value={countryData} key={countryData}>
                    {countryData}
                  </option>
                ))}
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

                Countries[country]?.map((stateData) => (
                  <option key={stateData}>{stateData}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div>
          {erro && (
            <p className="state-erro" style={{ color: "red" }}>
              {erro}
            </p>
          )}
          <button className="done" onClick={done}>
            Done
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
