// dependencies
// local files
import Logo from './Logo/Logo';

/**
 * @description - returns Header component
 * @return {jsx} - the Header to render
 */
const Header = () => {
  return (
    <section className="header">
      <Logo />
    </section>
  );
};

export default Header;
