"use client"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useState } from "react"

// TipTap Editor Component
const SectionEditor = ({ initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent)

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  return (
    <div>
      <EditorContent editor={editor} />
      <button
        onClick={() => onSave(content)}
        className="mt-2 rounded-md bg-blue-500 p-2 text-white"
      >
        Save
      </button>
    </div>
  )
}

export default SectionEditor
