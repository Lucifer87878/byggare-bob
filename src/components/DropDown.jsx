import { React } from "react";

const DropDown = ({
  firstname,
  lastname,
  pant_color,
  favorite_food,
  favorite_tool,
  pet,
  hobby,
}) => {
  const [selectedOption, setSelectedOption] = useState(""); // Tillståndet för valt alternativ

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <section className="Print-info">
        <select value={selectedOption} onChange={handleSelectChange}>
          <h2>
            Fullname: {firstname} {lastname}
          </h2>
          <p>Pant's: {pant_color}</p>
          <p>Favorite Tool: {favorite_tool}</p>
          <p>Favorite Dish: {favorite_food}</p>
          <p>My Pet: {pet}</p>
          <p>My Hobby: {hobby}</p>
        </select>
      </section>
    </>
  );
};

export default DropDown;
