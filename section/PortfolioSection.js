import PortfolioCard from "@/components/PortfolioCard"
import React from "react"
import styles from './portfolioSection.module.scss'

import img1 from "../assets/portfolio-large-01.jpg"
import img2 from "../assets/portfolio-large-04.jpg"
import img3 from "../assets/portfolio-large-05.jpg"
import img4 from "../assets/portfolio-large-04.jpg"
import img5 from "../assets/portfolio-large-01.jpg"
import img6 from "../assets/portfolio-06.jpg"


const portfolioData = [
    {
        img: img1,
        title: 'SmartConnect AI — AI-powered networking dashboard',
        category: 'MERN Stack',
    },
    {
        img: img2,
        title: 'MERN Social Media Platform — comprehensive social app',
        category: 'MERN Stack',
    },
    {
        img: img3,
        title: 'Contact Management System — secure dashboard experience',
        category: 'React & Node.js',
    },
    {
        img: img4,
        title: 'Modern UI Clones — responsive Facebook and Netflix clones',
        category: 'Frontend UI',
    },
    {
        img: img5,
        title: 'Modern UI Clones — Amazon and YouTube interface recreations',
        category: 'Responsive UI',
    },
    {
        img: img6,
        title: 'JavaScript Games — interactive browser game experiences',
        category: 'JavaScript',
    },
];


const PortfolioSection = () => {
    return (
        <section className={styles.container} id='portfolio'>
            <h2>FEATURED PROJECTS AND CASE STUDIES</h2>
            <h1>Portfolio Highlights</h1>
            <div className={styles.cardsContainer}>
                {portfolioData.map((item, index) => {
                    return (
                        <PortfolioCard
                            img={item.img}
                            title={item.title}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}


export default PortfolioSection