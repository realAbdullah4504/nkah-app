import { defaultResearchData } from "@/constants/research"
import { queryClient } from "@/lib/queryClient"
import { getQueryData, updateQueryData } from "@/services/supabase"
import { ResearchData } from "@/types/research"
import { useMutation, useQuery } from "@tanstack/react-query"

const RESEARCH_QUERY_KEY = "researchSection" as const
export function useResearch() {
  const getResearch = useQuery({
    queryKey: [RESEARCH_QUERY_KEY],
    queryFn: async () => {
      const section = await getQueryData(
        "nkah_sections",
        "section_key",
        "research",
      )
      const parsedContent = section ? section : defaultResearchData
      return parsedContent as ResearchData
    },
  })
  return getResearch
}

export function useUpdateResearch() {
  const updateResearch = useMutation({
    mutationKey: [RESEARCH_QUERY_KEY],
    mutationFn: async (content: ResearchData) => {
      const data = await updateQueryData("nkah_sections", "research", content)
      console.log(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESEARCH_QUERY_KEY })
    },
  })
  return updateResearch
}
