import React, { useState, useEffect } from 'react';
import './Counter'
import './Counter.css'

const Counter = () => {
  const [employees, setEmployees] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const employeeInterval = setInterval(() => {
      setEmployees((prev) => {
        if (prev >= 400) {
          clearInterval(employeeInterval);
          return 400;
        }
        return prev + 1;
      });
    }, 1);

    const clientInterval = setInterval(() => {
      setClients((prev) => {
        if (prev >= 1500) {
          clearInterval(clientInterval);
          return 1500;
        }
        return prev + 4;
      });
    }, 1);

    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev >= 10) {
          clearInterval(yearsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 180);

    return () => {
      clearInterval(employeeInterval);
      clearInterval(clientInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  return (
    <div className="counter-container"id="counterd">
      <div className="counter-item" style={{ '--order': 1 }}>
        <span className="number text-dark">{employees}</span>
        <span className="label text-dark">Employees</span>
      </div>
      <div className="counter-item" style={{ '--order': 3 }}>
        <span className="number text-dark">{years}</span>
        <span className="label text-dark">Years of industry </span>
      </div>
      <div className="counter-item" style={{ '--order': 2 }}>
        <span className="number text-dark">{clients}</span>
        <span className="label text-dark">Clients</span>
      </div>
   
    </div>
  );
};

export default Counter;