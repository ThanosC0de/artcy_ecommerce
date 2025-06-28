import Container from "../common/Container";
import Logo from "../common/Logo";
import Account from "./Account";
import Carticon from "./Carticon";
import Deal from "./Deal";
import MobileMenu from "./MobileMenu";
import Offers from "./Offers";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header
      className="sticky top-0 py-5 bg-tech_dark
     text-tech_white/80">
      <Container className="flex items-center justify-between gap-5">
        <div className="flex items-center item-center justify-start
         gap-2.5 lg:gap-0">
          <MobileMenu />
          <Logo className="" />
        </div>
        <div className="flex items-center gap-5 lg:flex-1">
          <Searchbar />
          <Offers />
          <Deal />
          <Carticon />
          <Account />
        </div>
      </Container>
    </header>
  );
};
export default Header;
