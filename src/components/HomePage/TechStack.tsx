import React from 'react';
// Programming Languages
import { techStack } from '../../utils';
import TechLogo from '../TechLogo';
import Card from '../UI/Card';

const styles = {
  wrapper: 'border-b pb-6 border-zinc-200 dark:border-zinc-600/50 group',
  title: 'mb-3 font-medium text-zinc-700 dark:text-zinc-200',
  flex: 'flex items-center gap-x-6 flex-wrap gap-y-4 pt-3',
};

function TechStack() {
  const languages = techStack.filter((x) => x.category == 'Language');
  const frameworks = techStack.filter((x) => x.category == 'Framework');
  const tools = techStack.filter((x) => x.category == 'Tool');
  return (
    <Card className="flex-1 space-y-6 max-w-lg">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Programming Languages</h1>
        <div className={styles.flex}>
          {languages.map((tech) => (
            <TechLogo key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Frameworks</h1>
        <div className={styles.flex}>
          {frameworks.map((tech) => (
            <TechLogo key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
      <div className="group">
        <h1 className={styles.title}>Tools of the trade</h1>
        <div className={styles.flex}>
          {tools.map((tech) => (
            <TechLogo key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TechStack;
