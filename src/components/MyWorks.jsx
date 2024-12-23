import React from "react";
import styles from "../styles/MyWorks.module.css";

const MyWorks = () => {
  const projects = [
    {
      title: "Rock Scissors Paper",
      github: "https://github.com/VladykoV05/1.RockScissorspPaper",
      description:
        "The project is a simple game where users can play against the computer, with the outcome determined by the choices of rock, paper, or scissors.",
      image: "src/images/rockscissorspaper.jpg",
      technologies: ["JS"],
    },
    {
      title: "Lamoda",
      github: "https://github.com/VladykoV05/lamoda",
      description:
        "An online store with the ability to search, filter, and sort products.",
      image: "src/images/lamoda.jpg",
      technologies: ["JS", "React"],
    },
    {
      title: "Api & Spa",
      github: "https://github.com/VladykoV05/api-spa",
      description:
        "A multi-page application that stores baskets and an ice album. The API and react-router-domain were used to create it.",
      image: "src/images/api.jpg",
      technologies: ["JS", "React"],
    },
    {
      title: "Notion Redux",
      github: "https://github.com/VladykoV05/notion-redux",
      description:
        "An application for registering users and adding tasks. It works with many users.",
      image: "src/images/notion.jpg",
      technologies: ["React", "Redux", "Json Server"],
    },
  ];

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.title}>My works</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.workCard}>
            <div className={styles.textWrapper}>
              <h3 className={styles.workTitle}>{project.title}</h3>
              <p className={styles.workDescription}>{project.description}</p>
              <p className={styles.technologies}>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.workImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
