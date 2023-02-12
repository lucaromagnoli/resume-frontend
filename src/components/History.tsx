import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import fetchExperiences from "./api";
import { Experience, Tech } from "./experience";
import { getTechIcon } from "./icons";
import _ from "lodash";

function getLibraries(libraries: string[]) {
  return libraries.map((library) => {
    return <div className="px-1 fw-lighter">{library}</div>;
  });
}

function getTechStack(techStack: Tech[]) {
  techStack.forEach((obj: Tech, index) => (obj.key = index));
  return techStack.map((tech) => {
    const techIcon = getTechIcon(tech.name);
    return (
      <Row>
        <Col xs={4}>
          <div className="px-1 fw-light">
            <Row>
              <Col xs={2}>{techIcon}</Col>
              <Col>{tech.name}</Col>
            </Row>
          </div>
        </Col>
        <Col lg={8} className="col-md-auto">
          <div className="d-flex flex-row align-items-start flex-wrap text-left">
            {getLibraries(tech.libraries ? tech.libraries : [])}
          </div>
        </Col>
      </Row>
    );
  });
}

function ExperienceCard(props: Experience) {
  const startDate = new Date(Date.parse(props.startDate)).toLocaleDateString(
    "en-gb",
    { year: "numeric", month: "short" }
  );
  const endDate = new Date(Date.parse(props.endDate)).toLocaleDateString(
    "en-gb",
    { year: "numeric", month: "short" }
  );
  let description = props.description;
  return (
    <Card bg="light">
      <Card.Header className="card-header-warning">
        <div className="d-flex justify-content-between">
          <div className="text-muted">
            {startDate} to {endDate}
          </div>
          <div className="text-secondary">{props.role}</div>
          <div className="text-secondary">
            <a
              href=""
              target="_blank"
              className="text-primary text-decoration-none text-secondary"
            >
              {props.companyName}
            </a>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <p className="text-muted  border-secondary mb-0">Tech Stack</p>
        {getTechStack(props.technologies)}
      </Card.Footer>
    </Card>
  );
}

function camelCaseResults(results: Object[]): any[] {
  return results.map((result) => {
    return _.mapKeys(result, (v: string, k: string) => _.camelCase(k));
  });
}

export default function History(): JSX.Element {
  let [experiences, setExperiences] = useState<Experience[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchExperiences();
      const results = camelCaseResults(resp.data.results);
      results.forEach((obj: Experience, index) => {
        obj.key = index;
      });
      setExperiences(results);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      {" "}
      {experiences.map((experience) => {
        return (
          <div className="p-2">
            <ExperienceCard
              key={experience.key}
              startDate={experience.startDate}
              endDate={experience.endDate}
              role={experience.role}
              companyName={experience.companyName}
              description={experience.description}
              technologies={experience.technologies}
            />
          </div>
        );
      })}
    </>
  );
}
