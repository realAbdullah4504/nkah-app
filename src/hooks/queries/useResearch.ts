import { supabase } from "@/lib/supabaseClient"
import { useQuery } from "@tanstack/react-query"

export function useResearch() {
  const getResearch = useQuery({
    queryKey: ["researchSection"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("nkah_sections")
        .select("*")
        .eq("section_key", "research")

      if (error) throw error
      const section = data[0]
      const parsedContent = JSON.parse(section.content)

      return {
        ...section,
        heading: parsedContent.heading,
        title: parsedContent.title,
      }
    },
  })
  return { ...getResearch }
}
