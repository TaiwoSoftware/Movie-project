import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Menu from "./Menu/Menu";
import MainPart from "./Main/MainPart";
function Header() {
  return (
    <main>
      <header>
        <Logo />
        <Nav />
        <Menu />
      </header>
      <MainPart />
    </main>
  );
}
export default Header;
