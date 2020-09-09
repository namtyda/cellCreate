import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../Card/Card';
import {
  AppWrapper,
  MainWrapp,
  Title,
  CardContainer,
  CreateButton
} from '../interfaces';
import DeadIcon from '../../resources/DeadIcon.svg';
import LifeIcon from '../../resources/Life.svg';
import LiveIcon from '../../resources/Live.svg';
const propsCard = {
  0: {
    background: "linear-gradient(180deg, #0D658A 0%, #B0FFB4 100%)",
    icon: DeadIcon,
    title: 'Мертвавя',
    description: 'или прикидывается',
    id: 0
  },
  1: {
    background: "linear-gradient(180deg, #FFB800 0%, #FFF7B0 100%)",
    icon: LiveIcon,
    title: 'Живая',
    description: 'и шевелится!',
    id: 1
  },
  2: {
    background: "linear-gradient(180deg, #AD00FF 0%, #FFB0E9 100%)",
    icon: LifeIcon,
    title: 'Жизнь',
    description: 'Ку-ку!',
    id: 2
  }
}
let key = 0;
function App() {
  const [mapCard, addCard] = useState([]);
  const [counter, setCounter] = useState({ 0: 0, 1: 0 });
  const ref = useRef(null);

  const getRand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClickBtn = () => {
    const randomInt = getRand(0, 1);
    addCard(state => ([...state, propsCard[randomInt]]));
    setCounter(state => ({ [randomInt]: (state[randomInt] || 0) + 1 }));
  }
  useEffect(() => {
    const element = ref.current;
    element.scrollTop = element.scrollHeight;
  });
  useEffect(() => {
    if (counter[1] === 2) {
      addCard(state => ([...state, propsCard[2]]));
      setCounter(state => ({ ...state, 1: 0 }))
    } else if (counter[0] === 3) {
      setCounter(state => ({ ...state, 0: 0 }));
      addCard(state => ([...state, ...mapCard.filter(({ id }, i, arr) => {
        if (id === 2) {
          if ((arr.slice(i + 1, i + 4).every(({ id }) => id === 0))) {
            return false;
          }
        }
        return true;
      })]));
    }
  }, [counter, mapCard]);
  return (
    <AppWrapper>
      <MainWrapp>
        <Title>Клеточное наполнение</Title>
        <CardContainer ref={ref}>
          {mapCard.map(({ background, icon, title, description }) => {
            return (
              <Card
                background={background}
                icon={icon}
                title={title}
                description={description}
                key={key++}
              />
            );
          })}
        </CardContainer>
        <CreateButton onClick={handleClickBtn}>Сотворить</CreateButton>
      </MainWrapp>
    </AppWrapper>
  );
}

export default App;
