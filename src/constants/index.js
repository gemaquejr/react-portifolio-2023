import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    java,
    html,
    css,
    reactjs,
    redux,
    vite,
    angular,
    tailwind,
    nodejs,
    mysql,
    mongodb,
    jest,
    mocha,
    chai,
    sinon,
    junit,
    pytest,
    git,
    github,
    docker,
    heroku,
    trello,
    vscode,
    freelance,
    ibge,
    mpeg,
    sesma,
    disney,
    netflix,
    trivia,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Apresentação",
    },
    {
      id: "work",
      title: "Projetos",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: web,
    },
    {
      title: "Desenvolvedor Frontend",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title: "Desenvolvedor Fullstack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Mocha",
      icon: mocha,
    },
    {
      name: "Chai",
      icon: chai,
    },
    {
      name: "SinonJs",
      icon: sinon,
    },
    {
      name: "Pytest",
      icon: pytest,
    },
    {
      name: "JUnit",
      icon: junit,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Heroku",
      icon: heroku,
    },
    {
      name: "Trello",
      icon: trello,
    },
    {
      name: "VsCode",
      icon: vscode,
    },
  ];
  
  const experiences = [
    {
      title: "Bolsista de Iniciação Científica",
      company_name: "MPEG - Museu Paraense Emílio Goeldi",
      icon: mpeg,
      iconBg: "#383E56",
      date: "Abril de 2003 - Novembro de 2008",
      points: [
        "Estágio em Pesquisa no Departamento de Zoologia da Curadoria de Entomologia;",
        "Controle das coleções dos acervos de animais invertebrados (Entomológica e Aracnológica);",
        "Banco de dados: elaboração da estrutura, coleta e organização de dados instucionais;",
        "Alimentação de banco de dados e capacidade de gerar mecanismos de verificação da qualidade dos dados inseridos.",
      ],
    },
    {
      title: "Agente Censitário",
      company_name: "IBGE - Instituto Brasileiro de Geografia e Estatística",
      icon: ibge,
      iconBg: "#E6DEDD",
      date: "Novembro de 2008 - Dezembro de 2010",
      points: [
        "Supervisor de Equipe de Setor Urbano em Belém/PA;",
        "Protocolo, arquivamento, conferência e expedição de materiais e documentos;",
        "Transcrição e transmissão de dados;",
        "Ministrar treinamentos inerentes às atividades censitárias.",
      ],
    },
    {
      title: "Agente de Saúde",
      company_name: "SESMA - Secretaria Municipal de Saúde de Belém",
      icon: sesma,
      iconBg: "#383E56",
      date: "Dezembro de 2012 - Junho de 2016",
      points: [
        "Supervisor de Equipe da Localidade DAICO;",
        "Elaboração e manutenção de políticas de saúde;",
        "Analisar mapas, realizar levantamento da área demarcada; registrar nas cadernetas os dados obtidos;",
        "Planejar, promover e normatizar ações de proteção da saúde na capital.",
      ],
    },
    {
      title: "Desenvolvedor Web Fullstack",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "Agosto de 2021 - Até o presente momento",
      points: [
        "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas;",
        "Colaborar com equipes multifuncionais, incluindo gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade;",
        "Implementando design responsivo e garantindo compatibilidade entre navegadores;",
        "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
      ],
    },
  ];
    
  const projects = [
    {
      name: "Disney+ Clone",
      description:
        "O projeto foi desenvolver uma aplicação em React, consumindo os dados do firebase para obter informações sobre os filmes e séries.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Styled Components",
          color: "pink-text-gradient",
        },
      ],
      image: disney,
      source_code_link: "https://github.com/gemaquejr/react-disney-clone",
    },
    {
      name: "Netflix Clone",
      description:
        "O projeto foi desenvolver uma aplicação em React, consumindo os dados da API do site themoviedb.org, para obter informações sobre os filmes e séries.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RestAPI",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/gemaquejr/react-netflix-clone",
    },
    {
      name: "Trivia",
      description:
        "O projeto foi desenvolver uma aplicação em React, consumindo os dados da API do site The Open Trivia Database para realizar a busca das perguntas e respostas.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: trivia,
      source_code_link: "https://github.com/gemaquejr/trivia-react-redux",
    },
  ];
  
  export { services, technologies, experiences, projects };