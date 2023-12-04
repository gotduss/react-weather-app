/* Imports */
import "./styles.css";

/* InputToggle component */
const InputToggle = ({ unit, onChange }) => {

  // switches between Celsius and Fahrenheit on toggle
  const toggleUnit = () => {
    onChange(unit === 'metric' ? 'us' : 'metric');
  };

  return (
    <form className="input-toggle-form">
      <label className={`toggle-label ${unit}`}>
        <input type="checkbox" checked={unit === 'us'} onChange={toggleUnit} />
        <span className="toggle-slider" aria-hidden="true"></span>
        <span className="toggle-text metric">&deg;C</span>
        <span className="toggle-text us">&deg;F</span>
      </label>
    </form>
  );
};

export default InputToggle;
