import { supabase } from "@/lib/supabaseClient"
import { ResearchData } from "@/types/research"

export const getQueryData = async (
  table: string,
  key: string,
  value: string,
) => {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq(key, value)
    .single()

  if (error) {
    if (error.code === "PGRST116") return {}
    throw error
  }

  return data.content ? JSON.parse(data.content) : {}
}

export const updateQueryData = async (
  table: string,
  key: string,
  content: ResearchData,
) => {
  const { data, error } = await supabase
    .from(table)
    .upsert(
      { section_key: key, content: JSON.stringify(content) },
      { onConflict: "section_key" },
    )
    .select()
    .single()

  if (error) throw error
  return data
}
