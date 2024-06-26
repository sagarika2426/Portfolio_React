
import Purrchase from '../assets/Purrchase.png'
import Food_Ordering from '../assets/Food_Ordering.png'
import recipe_finder from '../assets/recipe_finder.png'
import password_generator_new from '../assets/password_generator_new.png'
import weather_app from '../assets/weather_app.png'
import news_portal from '../assets/news_portal.png'




export const projects = [
    {
        id: 0,
        img: Purrchase,
        skills: ["React", "Tailwind", "MUI", "Redux Toolkit", "NodeJS", "ExpressJS", "MongoDB"],
        title: 'PurrChase',
        desc: 'E-commerce website for Cat daily use products such as Food, Toys and Hygiene products',
        live: 'https://purrchase-cat-products.vercel.app/',
        github: 'https://github.com/sagarika2426/PurrChase-Fullstack'
    },
    {
        id: 1,
        img: news_portal,
        skills: ["React", "Tailwind", "Redux Toolkit", "Material UI", "ExpressJS"],
        title: 'News Portal',
        desc: 'A responsive news portal application built with React, allowing users to browse, search, and save news articles.',
        live: 'https://news-portal-ten-rho.vercel.app/',
        github: 'https://github.com/sagarika2426/NewsPortal-React'
    },

    {
        id: 2,
        img: Food_Ordering,
        skills: ["React", "Tailwind", "Redux Toolkit"],
        title: 'Food Ordering App',
        desc: 'Food Ordering App: View Restaureants, Filter Top rated Restaurants, Search, View Menu, Add To Cart, Cart Functionalities',
        live: 'https://food-ordering-sagarikasahoo.vercel.app/',
        github: 'https://github.com/sagarika2426/Namaste-React/tree/main/Code'
    },
    {
        id: 3,
        img: recipe_finder,
        skills: ["Javascript", "HTML", "CSS"],
        title: 'Recipe Finder',
        desc: 'Recipe Finder: Search Recipes, Detailed View, Link to view the recipe video',
        live: 'https://recipe-finder-js-project.netlify.app/',
        github: 'https://github.com/sagarika2426/recipe_finder_project'
    },
    {
        id: 4,
        img: password_generator_new,
        skills: ["React", "Tailwind CSS"],
        title: 'Password Generator',
        desc: 'Genarate random password by choosing the length of the password. You can aslo add special character or numbers.',
        live: 'https://password-generator-sagarika2426s-projects.vercel.app/',
        github: 'https://github.com/sagarika2426/Chai-aur-React/tree/main/04-PasswordGenerator'
    },
    {
        id: 5,
        img: weather_app,
        skills: ["HTML", "CSS", "JS", "DOM"],
        title: 'Weather App',
        desc: 'Created this to practice JS',
        live: 'https://weather-app-git-main-sagarika2426s-projects.vercel.app/',
        github: 'https://github.com/sagarika2426/Weather-App'
    }
]