import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    html,
    css,
    angular,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    freelance,
    ibge,
    mpeg,
    sesma,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };