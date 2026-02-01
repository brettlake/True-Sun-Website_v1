import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit');
    }
  }, [children, displayChildren]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        transitionStage === 'enter' ? 'opacity-100' : 'opacity-0'
      }`}
      onTransitionEnd={() => {
        if (transitionStage === 'exit') {
          setDisplayChildren(children);
          window.scrollTo(0, 0);
          setTransitionStage('enter');
        }
      }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
