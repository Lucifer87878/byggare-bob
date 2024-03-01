import React from "react";
import WorkersData from "./JSON/bob_simple_10.json";
import DropDown from "./DropDown";

const WorkerBox = () => {
  const data = WorkersData.Worker;

  return (
    <>
      {data.map((Worker) => (
        <DropDown
          key={Worker.firstname}
          firstname={Worker.firstname}
          lastname={Worker.lastname}
          pant_color={Worker.pant_color}
          favorite_tool={Worker.favorite_tool}
          favorite_food={Worker.favorite_food}
          hobby={Worker.hobby}
          pet={Worker.pet}
        />
      ))}
    </>
  );
};

export default WorkerBox;
