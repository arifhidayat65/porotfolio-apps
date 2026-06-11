import { useQuery } from '@tanstack/react-query';
import { fetchProjects, fetchExperiences, fetchEducation } from '../api/portfolioApi';

export const usePortfolioData = () => {
  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const experiencesQuery = useQuery({
    queryKey: ['experiences'],
    queryFn: fetchExperiences,
  });

  const educationQuery = useQuery({
    queryKey: ['education'],
    queryFn: fetchEducation,
  });

  return {
    projects: projectsQuery.data ?? [],
    experiences: experiencesQuery.data ?? [],
    education: educationQuery.data ?? [],
    isLoading: projectsQuery.isLoading || experiencesQuery.isLoading || educationQuery.isLoading,
    isError: projectsQuery.isError || experiencesQuery.isError || educationQuery.isError,
  };
};
