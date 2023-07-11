import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles.css';

function Header() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header>
      <CSSTransition in={isMounted} classNames="fade" timeout={500}>
        <h1>Mariia Borisenko - Web Design Student</h1>
      </CSSTransition>
      {/* Добавьте остальной контент вашего заголовка */}
    </header>
  );
}

export default Header;
