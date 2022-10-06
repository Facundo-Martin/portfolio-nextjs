import React from 'react';
// Programming Languages
import { techStack } from '../../utils';
import TechLogo from '../TechLogo';

const styles = {
  wrapper: 'border-b pb-6 border-zinc-200 dark:border-zinc-600/50 group',
  title: 'mb-3 font-medium text-zinc-700 dark:text-zinc-200',
  grid: 'max-w-md grid grid-cols-4 md:gap-x-6 gap-y-6 pt-3',
};

function TechStack() {
  const languages = techStack.filter((x) => x.category == 'Language');
  const frameworks = techStack.filter((x) => x.category == 'Framework');
  const tools = techStack.filter((x) => x.category == 'Tool');
  return (
    <div className="flex-1 space-y-6  max-w-xl rounded-xl px-6 py-5 border  border-neutral-100 dark:border-neutral-700/40 shadow-sm">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Programming Languages</h1>
        <div className={styles.grid}>
          {languages.map((tech) => (
            <TechLogo tech={tech} />
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Frameworks</h1>
        <div className={styles.grid}>
          {frameworks.map((tech) => (
            <TechLogo tech={tech} />
          ))}
        </div>
      </div>
      <div className="group">
        <h1 className={styles.title}>Tools of the trade</h1>
        <div className={styles.grid}>
          {tools.map((tech) => (
            <TechLogo tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
