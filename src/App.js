import React from 'react';
import Input from './Form/Input';
import Button from './Form/Button';
import Radio from './Form/Radio';
import useForm from './Hooks/useForm';
import Teleporte from './Assets/teleporte.png';
import Steampunk from './Assets/steampunk.png';
import Carro from './Assets/carro.png';
import Cao from './Assets/cao-robo.png';
import Adn from './Assets/adn.png';
import Foguete from './Assets/foguete.png';
import Sabre from './Assets/sabre-de-luz.png';
import Universo from './Assets/universoacademy.png';
import './App.css';

const perguntas = [
  {
    pergunta: 'Sempre analiso os dados de forma minuciosa antes de tomar uma decisão.',
    options: [
      'Discordo totalmente',
      'Discordo parcialmente',
      'Concordo parcialmente',
      'Concordo totalmente',
    ],
    categoria: {
      nome: 'Conhecimento',
      img: Teleporte,
    },
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
    categoria: {
      nome: 'Conhecimento',
      img: Teleporte,
    },
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
    categoria: {
      nome: 'Conhecimento',
      img: Teleporte,
    },
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
    categoria: {
      nome: 'Paixão',
      img: Steampunk,
    },
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
    categoria: {
      nome: 'Paixão',
      img: Steampunk,
    },
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
    categoria: {
      nome: 'Paixão',
      img: Steampunk,
    },
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
    categoria: {
      nome: 'Credibilidade',
      img: Carro,
    },
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
    categoria: {
      nome: 'Credibilidade',
      img: Carro,
    },
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
    categoria: {
      nome: 'Credibilidade',
      img: Carro,
    },
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
    categoria: {
      nome: 'Lealdade',
      img: Cao,
    },
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
    categoria: {
      nome: 'Lealdade',
      img: Cao,
    },
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
    categoria: {
      nome: 'Lealdade',
      img: Cao,
    },
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
    categoria: {
      nome: 'Determinação',
      img: Adn,
    },
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
    categoria: {
      nome: 'Determinação',
      img: Adn,
    },
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
    categoria: {
      nome: 'Determinação',
      img: Adn,
    },
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
    categoria: {
      nome: 'Gestão',
      img: Foguete,
    },
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
    categoria: {
      nome: 'Gestão',
      img: Foguete,
    },
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
    categoria: {
      nome: 'Gestão',
      img: Foguete,
    },
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
    categoria: {
      nome: 'Propósito',
      img: Sabre,
    },
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
    categoria: {
      nome: 'Propósito',
      img: Sabre,
    },
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
    categoria: {
      nome: 'Propósito',
      img: Sabre,
    },
    id: 'p21',
  },
];

function animeScroll() {
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(element => {
      if (windowTop > element.offsetTop) {
          element.classList.add(animationClass);
      } else if(element.classList.contains(animationClass)) {
          element.classList.remove(animationClass);
      }
  })
}

animeScroll();

const App = () => {
  const firstName = useForm('');
  const phone = useForm('');
  const email = useForm('email');

  const [leadStatus, setLeadStatus] = React.useState(false);
  const [finish, setFinish] = React.useState(false);

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

  const [media, setMedia] = React.useState(0);

  const mediaResultado = [conhecimento, paixao, credibilidade, lealdade, determinacao, gestao, proposito];

  function somar() {
    let soma = 0
    for(let i in mediaResultado) {
      soma += mediaResultado[i]
    }
    return soma
  }

  const categorias = [
    {
      nome: 'Conhecimento',
      img: Teleporte,
      descricao: 'Você não busca entender a realidade em que seu negócio está, muito menos embasar sua decisão em dados. Isso será extremamente prejudicial para qualquer ação da sua empresa, podendo colocar tudo o que você tem e construiu até hoje em jogo.',
      pontos: conhecimento,
    },
    {
      nome: 'Paixão',
      img: Steampunk,
      descricao: 'A sua falta de paixão e engajamento com certeza atrapalha a sua ação de liderança, podendo até trazer apatia e falta de entusiasmo dentro da sua equipe. São dois comportamentos altamente pecaminosos no que diz respeito a execução.',
      pontos: paixao,
    },
    {
      nome: 'Credibilidade',
      img: Carro,
      descricao: 'Você não possui as principais características das grandes lideranças. Não viver o que defende, não cumprir o que promete e não ter a confiança da equipe são sem dúvida as piores características de um líder.',
      pontos: credibilidade,
    },
    {
      nome: 'Lealdade',
      img: Cao,
      descricao: 'Você não possui a prática da lealdade, ou seja, você não tem princípios inegociáveis que regem a sua conduta. Dessa forma sua conduta é leviana e variável de acordo com a situação, tendo assim uma total desconfiança da sua equipe.',
      pontos: lealdade,
    },
    {
      nome: 'Determinação',
      img: Adn,
      descricao: 'Você não possui o comprometimento com aquilo que se determina a fazer, as pessoas da sua equipe já percebem e sabem que as suas promessas e objetivos não vão ser prioridades no cumprimento das ações do dia a dia. Você pode ser conhecido como a pessoa que promete mais do que faz e para no meio do caminho.',
      pontos: determinacao,
    },
    {
      nome: 'Gestão',
      img: Foguete,
      descricao: 'A sua falta de foco na gestão do negócio o andamento de uma rotina de planejamento execução e análise de resultados, liderar um negócio sem a rotina de gestão coloca todos os seus aspectos de liderança em check, promovendo fracassos pelo menos em médio ou longo prazo.',
      pontos: gestao,
    },
    {
      nome: 'Propósito',
      img: Sabre,
      descricao: 'Você não tem um propósito claro e objetivo que faz você e as pessoas que você lidera entregarem um resultado extraordinário. Você não possui uma visão além do trabalho a ser realizado, você entende o trabalho como trabalho e não consegue perceber os resultados extraordinários que podem ser causados em sua vida e na vida de outras pessoas.',
      pontos: proposito,
    }
  ]

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
    const radios = document.querySelectorAll('.radio');
    radios.forEach((radio) => {
      radio.checked = false;
    })
    target.checked = true;
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
      setLeadStatus(false);
      setFinish(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLeadStatus(true);
    if (email.validate()) {
        // Yeh!
        let fetchData = {
            method: 'POST',
            body: JSON.stringify({ firstName: firstName.value, phone: phone.value, email: email.value, js: true }),
            headers: {"Content-Type": "application/json"}
        }
        fetch('/subscribe', fetchData)
            .then(res => {
                if (res.ok) {
                    // setLeadStatus(true);
                }
        })
    }
  }

  return (
    <>
    <img className='logo' src={Universo}></img>
    <div className='pergunta-box animate' data-anime='left'>
      <div className={finish ? 'inicio finish' : 'inicio'} style={leadStatus ? {'display': 'none'} : {'display': 'flex'}}>
        <div className='inicio-text'>
          <h2>Teste de liderança</h2>
          <p>Bem vindo ao teste de liderança da Universo Academy! O conceito desse teste é bem simples: te avaliar se você é um bom líder.
          <br></br>
          <br></br>
          Seja autocrítico para responder as perguntas. No final te daremos uma nota. Para começar, preencha o formulário ao lado.
          </p>
        </div>
        <form action='' onSubmit={handleSubmit}>
          <Input type='text' label='Nome' name='firstName' id='first-name' {...firstName} />
          <Input type='tel' label='Telefone' name='phone' id='phone' {...phone} />
          <Input type='email' label='E-mail' name='email' id='email' {...email} />
          <Button>Começar!</Button>
        </form>
      </div>
      <div className={finish ? 'navegacao finish' : 'navegacao'} style={leadStatus ? {'display': 'flex'} : {'display': 'none'}}>
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        <div className='categoria'>
          <h2>Categoria</h2>
          <img src={perguntas[slide].categoria.img}></img>
          <p>{perguntas[slide].categoria.nome}</p>
        </div>    
      </div>
      <nav className={finish ? 'navegacao finish' : 'navegacao'} style={leadStatus ? {'display': 'flex'} : {'display': 'none'}}>
        <button className='cta' onClick={handleClick}>Anterior</button>
        <button className='cta' onClick={handleClick}>Próxima</button>
      </nav>
      <div className='resultado animate' style={finish ? {'display': 'block'} : {'display': 'none'}} data-anime='left'>
          <h2>Teste finalizado</h2>
          <p>A sua média final foi: <span className='media'>{Math.round(somar()/mediaResultado.length)}</span></p>
          <ul>
            {categorias.map((categoria) => (
              <li className='categoria-item'>
                <div className='categoria-header'>
                  <div>
                    <img src={categoria.img}></img>
                  </div>
                  <div className='categoria-resultado'>
                    <p>{categoria.pontos}</p>
                    <h3>{categoria.nome}</h3>
                  </div>
                </div>
                <p>{categoria.descricao}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
    </>
  );
};

export default App;
