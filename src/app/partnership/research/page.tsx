import ResearchSection from "@/components/ui/ResearchSection"
import { defaultResearchData } from "@/constants/research"
import { getQueryClient } from "@/lib/queryClient"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { cookies } from "next/headers"

async function getServerData() {
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase
    .from("nkah_sections")
    .select("*")
    .eq("section_key", "research")

  if (error) {
    throw error
  }

  if (data.length === 0) return defaultResearchData
  const section = data[0]
  const parsedContent = JSON.parse(section.content)

  return parsedContent
}

export default async function ResearchPage() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["researchSection"],
    queryFn: getServerData,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ResearchSection />
    </HydrationBoundary>
  )
}
