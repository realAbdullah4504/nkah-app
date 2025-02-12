"use client"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useState } from "react"

type CustomizerProps = {
  isEditing: boolean
  content: string
  className: string
}

const Customizer = ({ isEditing, content, className }: CustomizerProps) => {
  const [text, setText] = useState(content)

  const editor = useEditor({
    extensions: [StarterKit],
    content: text,
    onUpdate: ({ editor }) => {
      setText(editor.getHTML())
    },
  })

  return isEditing ? (
    <div className={className}>
      <EditorContent editor={editor} />
    </div>
  ) : (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Customizer
