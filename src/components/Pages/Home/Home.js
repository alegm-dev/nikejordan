import HomeContainer from "./HomeContainer";
import ShoesJOrdan from "../../../Assets/image/Jordan01.png";
import Button from "../../../StyledDefault/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HomeContainer>
      <div className="Home-left">
        <h3>BECOME LEGENDARY</h3>
      </div>
      <div className="Home-center">
        <img src={ShoesJOrdan} alt="zapatillas Jordan 01" />
        <h2>AIR JORDAN 1</h2>
        <h3>BE LIKE JORDAN WITH NIKE!</h3>
        <div className="center-btn">
          <Link to="/store">
            <Button className="see-more">Ver mas</Button>
          </Link>
        </div>
      </div>
      <div className="Home-right">
        <h3>JUM LIKE HIM</h3>
      </div>
    </HomeContainer>
  );
};
