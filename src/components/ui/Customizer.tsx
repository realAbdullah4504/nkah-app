import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useState } from "react"

type CustomizerProps = {
  isEditing: boolean
  content: string
  className: string
  fieldKey: string
  onUpdate: (fieldKey: string, value: string) => void
}
const Customizer = ({
  isEditing,
  content,
  className,
  fieldKey,
  onUpdate,
}: CustomizerProps) => {
  const [text, setText] = useState(content)

  const editor = useEditor({
    extensions: [StarterKit],
    content: text,
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML()
      setText(newContent)
      onUpdate(fieldKey, newContent)
    },

    immediatelyRender: false,
  })

  return isEditing ? (
    <div className={className}>
      <EditorContent editor={editor} />
    </div>
  ) : (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default Customizer
