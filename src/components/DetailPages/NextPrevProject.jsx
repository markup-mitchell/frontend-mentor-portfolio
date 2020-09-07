import Link from 'next/link';
import next from 'next';

export default function NextPrevProject({ next_project, previous_project }) {
  const next_url = `/portfolio/${next_project.toLowerCase()}`;
  const previous_url = `/portfolio/${previous_project.toLowerCase()}`;
  return (
    <div className="flex my-8">
      <div className="flex flex-col items-start w-1/2 py-6 border-t border-b border-r border-opacity-25 justfy-center border-p3">
        <Link href={previous_url}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
              <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
            </svg>
          </a>
        </Link>
        <p className="mt-4 font-serif text-3xl tracking-tight text-p3">
          {previous_project}
        </p>
        <p className="text-p3">Previous Project</p>
      </div>
      <div className="flex flex-col items-end w-1/2 py-6 border-t border-b border-opacity-25 justfy-center border-p3">
        <Link href={next_url}>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
              <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
            </svg>
          </a>
        </Link>
        <p className="mt-4 font-serif text-3xl tracking-tight text-p3">
          {next_project}
        </p>
        <p className="text-p3">Next Project</p>
      </div>
    </div>
  );
}
