import React from "react";

interface DepartureTimeProps {
  departureTime: string;
  setDepartureTime: (value: string) => void;
}

const DepartureTime: React.FC<DepartureTimeProps> = ({
  departureTime,
  setDepartureTime,
}) => {
  return (
    <div className="input-container">
      <input
        type="time"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
        className="floating-input"
        id="departureTime"
      />
      <label htmlFor="departureTime" className="floating-label">
        Departure Time
      </label>
    </div>
  );
};

export default DepartureTime;