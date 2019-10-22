import React, { Component, useEffect } from "react";
import dayjs from "dayjs";

import resume from "./resume";

import Header from "./Header";
import Section from "./Section";
import Entry from "./Entry";
import SkillEntry from "./SkillEntry";

function Page() {
  useEffect(() => {
    const name = resume.about.name.replace(/\s+/g, "-");
    const dateString = dayjs().format("MMM-YYYY");

    document.title = `${name}-${dateString}`;
  }, []);

  return (
    <div className="cv">
      <Header aboutData={resume.about} />

      <Section icon="laptop-code" title="Professional experience">
        {resume.professionalExperiences.map(entry => (
          <Entry key={entry.title} entry={entry} />
        ))}
      </Section>

      <Section icon="graduation-cap" title="Education">
        {resume.education.map(entry => (
          <Entry key={entry.title} entry={entry} />
        ))}
      </Section>

      <Section icon="heart" title="Extracurricular activities">
        {resume.extraCurricular.map(entry => (
          <Entry key={entry.title} entry={entry} />
        ))}
      </Section>

      <Section icon="check" title="Skills">
        {resume.skills.map(entry => (
          <SkillEntry key={entry.title} entry={entry} />
        ))}
      </Section>
    </div>
  );
}

export default Page;
