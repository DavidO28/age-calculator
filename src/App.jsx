import { useState } from "react";

function App() {  
  const [currentAge, setCurrentAge] = useState();

  const [elapsed, setElapsed] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElapsed((prevElapsed) => ({
      ...prevElapsed,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { day, month, year } = elapsed;
    const currentDate = new Date();
    const inputDate = new Date(`${year}-${month}-${day}`);
    const ageInMilliseconds = currentDate - inputDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setCurrentAge(ageInYears.toFixed());
  };

  return (
    <>
      <div className="calculator-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            inputMode="numeric"
            minLength="2"
            maxLength="2"   
            value={elapsed.day}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            inputMode="numeric"
            minLength="2"
            maxLength="2"
            value={elapsed.month}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            inputMode="numeric"
            minLength="4"
            maxLength="4"
            value={elapsed.year}
            onChange={handleChange}
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Calculate
          </button>
        </form>
        {currentAge && <h2>You are {currentAge} years old</h2>}

      </div>
    </>
  );
}

export default App;
