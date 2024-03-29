import { createContext } from 'react';
import PROJECTS_DATA from '@/appData/projects';

const AppContext = createContext({} as any);
// export const ArticleContext = createContext(ARTICLE_DATA);
// export const LensContext = createContext(LENS_DATA);
export const ProjectsContext = createContext(PROJECTS_DATA);

export default AppContext;