import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./assest/Loading";
import { Route, Switch } from "react-router-dom";

import GoogleAutocomplete from "./components/GoogleAutocomplete/GoogleAutocomplete";
import ButtonAppBar from "./components/Navigation/Navigation";
import SimpleMenu from "./components/PopubState/PopubState";
import RouteList from "./components/Route/Route";
import { itemsRequestAC } from "./redux/action/RouteAction";
import Input from "./components/Input/Input";
import Autocomplete from "./components/Autocomplete/Autocomplete";

const App = () => {
  const route = useSelector((state) => state.route);

  const [number, setNumber] = React.useState("");

  // const data = route.items.filter(
  //   (obj) => obj.arrivalHour === false || obj.sendingTime === false
  // );
  const data = route.items.filter(
    (obj) =>
      obj.arrivalHour.toString().includes(number) ||
      obj.sendingTime.toString().includes(number) ||
      obj.name.toLowerCase().includes(number.toLowerCase())
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(itemsRequestAC());
  }, []);

  return (
    <div className="App">
      <ButtonAppBar />
      <div className="container">
        {route.loading && <Loading />}
        {route.fail && "Faile connected"}

        <div className="sort">
          <div className="autocomplete">
            <Autocomplete data={data} setNumber={setNumber} number={number} />
          </div>
          <div>
            <SimpleMenu />
          </div>
        </div>
        <div className="story">
          <div className="menu">
            <div className="menu__items">Час отправки</div>
            <div className="menu__items">Название</div>
            <div className="menu__items">Час прибития</div>
          </div>
          {data &&
            data.map((route, index) => (
              <div className="route" key={index}>
                <RouteList
                  id={route._id}
                  name={route.name}
                  arrivalHour={route.arrivalHour}
                  sendingTime={route.sendingTime}
                />
              </div>
            ))}
          {data.length == 0 && (
            <div className="error">Пожалуйста , введите другой запрос :)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
