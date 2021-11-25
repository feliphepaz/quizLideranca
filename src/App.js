import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Pergunta 1',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p1',
  },
  {
    pergunta: 'Pergunta 2',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p2',
  },
  {
    pergunta: 'Pergunta 3',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p3',
  },
  {
    pergunta: 'Pergunta 4',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p4',
  },
  {
    pergunta: 'Pergunta 5',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p5',
  },
  {
    pergunta: 'Pergunta 6',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p6',
  },
  {
    pergunta: 'Pergunta 7',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p7',
  },
  {
    pergunta: 'Pergunta 8',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p8',
  },
  {
    pergunta: 'Pergunta 9',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p9',
  },
  {
    pergunta: 'Pergunta 10',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p10',
  },
  {
    pergunta: 'Pergunta 11',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p11',
  },
  {
    pergunta: 'Pergunta 12',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p12',
  },
  {
    pergunta: 'Pergunta 13',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p13',
  },
  {
    pergunta: 'Pergunta 14',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p14',
  },
  {
    pergunta: 'Pergunta 15',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p15',
  },
  {
    pergunta: 'Pergunta 16',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p16',
  },
  {
    pergunta: 'Pergunta 17',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p17',
  },
  {
    pergunta: 'Pergunta 18',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p18',
  },
  {
    pergunta: 'Pergunta 19',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p19',
  },
  {
    pergunta: 'Pergunta 20',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p20',
  },
  {
    pergunta: 'Pergunta 21',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    id: 'p21',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0,
    p9: 0,
    p10: 0,
    p11: 0,
    p12: 0,
    p13: 0,
    p14: 0,
    p15: 0,
    p16: 0,
    p17: 0,
    p18: 0,
    p19: 0,
    p20: 0,
    p21: 0,
  });

  const [conhecimento, setConhecimento] = React.useState(0);
  const [paixao, setPaixao] = React.useState(0);
  const [credibilidade, setCredibilidade] = React.useState(0);
  const [lealdade, setLealdade] = React.useState(0);
  const [determinacao, setDeterminacao] = React.useState(0);
  const [gestao, setGestao] = React.useState(0);
  const [proposito, setProposito] = React.useState(0);

  console.log(conhecimento, paixao, credibilidade, lealdade, determinacao, gestao, proposito)

  const [slide, setSlide] = React.useState(0);

  function handleRespostas(arg) {
    if (arg === 'Discordo totalmente') {
      return 0
    } else if (arg === 'Discordo parcialmente') {
      return 1
    } else if (arg === 'Concordo parcialmente') {
      return 2
    } else {
      return 3
    }
  }

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: handleRespostas(target.value) });
  }

  function handleClick({target}) {
    function navAnt() {
      if (target.innerText === 'Anterior') {
        setSlide(slide - 1);
        if (slide <= 0) {
          setSlide(0)
        }
      }
    }
    if (slide < perguntas.length - 1) {
      navAnt()
      if (target.innerText === 'Próxima') {
        setSlide(slide + 1);
      }
    } else {
      navAnt()
      const respostasValues = Object.values(respostas);
      const conhecimentoArray = respostasValues.slice(0,3);
      const paixaoArray = respostasValues.slice(3,6);
      const credibilidadeArray = respostasValues.slice(6,9);
      const lealdadeArray = respostasValues.slice(9,12);
      const determinacaoArray = respostasValues.slice(12,15);
      const gestaoArray = respostasValues.slice(15,18);
      const propositoArray = respostasValues.slice(18,21);
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      setConhecimento(conhecimentoArray.reduce(reducer));
      setPaixao(paixaoArray.reduce(reducer));
      setCredibilidade(credibilidadeArray.reduce(reducer));
      setLealdade(lealdadeArray.reduce(reducer));
      setDeterminacao(determinacaoArray.reduce(reducer));
      setGestao(gestaoArray.reduce(reducer));
      setProposito(propositoArray.reduce(reducer));
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
        <button onClick={handleClick}>Próxima</button>
        <button onClick={handleClick}>Anterior</button>
    </form>
  );
};

export default App;
