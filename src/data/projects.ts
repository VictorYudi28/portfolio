import { ProjectType } from "@/types/ProjectType";



export const projects: ProjectType[] = [
    {
        id: 1,
        title: 'Quiz',
        description: 'O Quiz é uma aplicação interativa e divertida que desafia seus conhecimentos sobre diversos temas. Com perguntas dinâmicas e opções de resposta, permite testar habilidades, aprender coisas novas.',
        image: 'Quiz.PNG',
        technologies: ['React','TailwindCSS','Typescript'],
        repositoryLink: 'https://github.com/VictorYudi28/quiz'
    },
    {
        id: 2,
        title: 'To-do List',
        description: 'A To-Do List é uma aplicação simples e eficiente para organizar tarefas diárias, melhorando a produtividade e o gerenciamento do tempo. Com uma interface intuitiva, permite criar, marcar como concluídas e excluir tarefas facilmente.',
        image: 'Todo-list.PNG',
        technologies: ['React','TailwindCSS','Typescript'],
        repositoryLink: 'https://github.com/VictorYudi28/todo-list'
    },
    {
        id: 3,
        title: 'Clima Tempo',
        description: 'O Clima Agora é uma aplicação web desenvolvida com JavaScript que permite aos usuários obter informações meteorológicas em tempo real para qualquer cidade do mundo. Utilizando uma API de previsão do tempo, o projeto busca dados como temperatura e velocidade do vento',
        image: 'ClimaTempo.png',
        technologies: ['Html','Css','Javascript','Typescript'],
        repositoryLink: 'https://github.com/VictorYudi28/climatempo'
    },
    {
        id: 4,
        title: 'Busca Títulos',
        description: 'O objetivo do projeto é permitir que os usuários pesquisem títulos como filmes, séries, jogos e documentários e os adicionem à sua lista de favoritos.',
        image: 'BuscaTitulos.png',
        technologies: ['Html','Css','Javascript'],
        repositoryLink: 'https://github.com/VictorYudi28/projetoBuscaTitulos'
    },

]