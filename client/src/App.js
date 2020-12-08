import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./assest/Loading";
import ButtonAppBar from "./components/Navigation/Navigation";
import SimpleMenu from "./components/PopubState/PopubState";
import RouteList from "./components/Route/Route";
import { itemsRequestAC } from "./redux/action/RouteAction";

const App = () => {
  const route = useSelector((state) => state.route);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(itemsRequestAC());
  }, []);

  console.log(route.items);
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="container">
        {route.loading && <Loading />}
        {route.fail && "Faile connected"}
        <div>
          <SimpleMenu />
        </div>
        <div className="menu">
          <div className="menu__items">Час отправки</div>
          <div className="menu__items">Название</div>
          <div className="menu__items">Час прибития</div>
        </div>
        {route.items &&
          route.items.map((route, index) => (
            <div className="route" key={index}>
              <RouteList
                id={route._id}
                name={route.name}
                arrivalHour={route.arrivalHour}
                sendingTime={route.sendingTime}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
