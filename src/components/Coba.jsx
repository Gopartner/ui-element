import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Coba = () => {
  const [data, setData] = useState(null);

  if (data) return alert(data);

  return (
    <div>
      <button className="btn" onClick={setData("pesan nya bro")}></button>
    </div>
  );
};

export default Coba;
