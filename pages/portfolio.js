import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";

const portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio Enzo Gireaud, mes meilleurs et derniers projets"}
        description={
          "Je suis développeur web React/Next doublé d'un powerlifter qui partage ses projets aussi bien informatiques qu'irl "
        }
      />
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="projects/[id]" as={`projects/${project.id}`}>
              <a>
                {project.title} <span>➡️</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
