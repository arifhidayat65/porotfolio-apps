import { useQuery } from '@tanstack/react-query';
import { fetchProjects, fetchExperiences, fetchEducation, fetchProfile } from '../api/portfolioApi';

export const usePortfolioData = () => {
  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });

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
    profile: profileQuery.data,
    projects: projectsQuery.data ?? [],
    experiences: experiencesQuery.data ?? [],
    education: educationQuery.data ?? [],
    isLoading: profileQuery.isLoading || projectsQuery.isLoading || experiencesQuery.isLoading || educationQuery.isLoading,
    isError: profileQuery.isError || projectsQuery.isError || experiencesQuery.isError || educationQuery.isError,
  };
};
