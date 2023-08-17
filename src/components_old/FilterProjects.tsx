import { filterItems } from '../constans';
import { PROJECTS } from '../types/sanity';

const FilterProjects = ({ ...props }) => {
  const { filter, setFilter, setProjectsFilter, projects } = props;

  const handleFilter = (item: string) => {
    setFilter(item);

    if (item === 'All') {
      setProjectsFilter(projects);
    } else {
      setProjectsFilter(
        projects.filter((element: PROJECTS) => element.tags.includes(item))
      );
    }
  };

  return (
    <ul className='mb-6 flex flex-wrap items-center justify-center gap-8 rounded-lg p-12 shadow-2xl shadow-primary'>
      {filterItems.map((title) => (
        <li key={title}>
          <button
            type='button'
            onClick={() => handleFilter(title)}
            className={`text-2xl font-extrabold ${
              title === filter ? 'text-accentText' : 'text-white'
            }`}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterProjects;
