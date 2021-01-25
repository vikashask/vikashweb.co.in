import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skill } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div>
          <Title title="Skills" />
          <Table striped bordered hover className="project-wrapper__text-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Version</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {skill.map((skillData) => {
                const { name, id, version, experience } = skillData;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{version}</td>
                    <td>{experience}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
