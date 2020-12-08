import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./assest/Loading";
import ButtonAppBar from "./components/Navigation/Navigation";
import RouteList from "./components/Route/Route";
import { itemsRequestAC } from "./redux/action/RouteAction";

const App = () => {
  const route = useSelector((state) => state.route);
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
        {route.items &&
          route.items.map((route, index) => {
            <div className="route" key={index}>
              <RouteList
                name={route.name}
                arrivalHour={route.arrivalHour}
                sendingTime={route.sendingTime}
              />
            </div>;
          })}
      </div>
    </div>
  );
};

export default App;
