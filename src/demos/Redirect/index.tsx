import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

function Redirect(): EmotionJSX.Element {
  const history = useHistory();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer1 = setInterval(() => history.replace('/'), 5000);
    return () => clearInterval(timer1);
  }, [history]);

  useEffect(() => {
    const timer2 =
      counter > 0 && setInterval(() => setCounter((c) => c - 1), 1000);
    if (timer2 && counter === 1) {
      clearInterval(timer2);
    }
    return () => {
      if (timer2) {
        clearInterval(timer2);
      }
    };
  }, [counter]);

  return (
    <p>
      you will be redirected in {counter} second{counter > 1 && 's'}
    </p>
  );
}

export default Redirect;
