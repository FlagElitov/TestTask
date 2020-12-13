import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Autocompleted = ({ setNumber, data }) => {
  const [value] = React.useState(data[0]);

  const inputChange = (newValue) => {
    setNumber(newValue.toString());
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event) => {
          inputChange(event.target.value);
        }}
        id="controllable-states-demo"
        options={data.map((option) => option.name)}
        noOptionsText="Пожалуйста , введите другой запрос :)"
        style={{ width: 700, margin: "auto", marginTop: 10 }}
        renderInput={(params) => (
          <TextField {...params} label="Autocomplite" variant="outlined" />
        )}
      />
    </div>
  );
};

export default Autocompleted;

// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

// const Autocompleted = ({ setNumber, data }) => {
//   const option = data;
//   console.log(option);
//   const inputChange = (event, newValue) => {
//     event.preventDefault();
//     setNumber(newValue);
//   };

//   return (
//     <Autocomplete
//       id="combo-box-demo"
//       value="f"
//       options={option.map((option) => option.name)}
//       onChange={(event, newValue) => {
//         inputChange(event, newValue);
//       }}
//       style={{ width: 500, marginTop: 20 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Combo box" variant="outlined" />
//       )}
//     />
//   );
// };

// export default Autocompleted;
