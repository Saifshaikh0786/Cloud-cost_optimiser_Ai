import { formatDistanceToNow } from "date-fns"
import { MessageSquare } from "lucide-react"
import ReactMarkdown from "react-markdown"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const formattedTime = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })

  return (
    <div className="flex items-start gap-3">
      {message.role === "user" ? (
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-xs">AI</span>
        </div>
      )}

      <div className="flex-1">
        <div
          className={`rounded-lg p-3 ${
            message.role === "user"
              ? "bg-slate-800/80 backdrop-blur-sm"
              : "bg-slate-800/60 backdrop-blur-sm border border-slate-700"
          }`}
        >
          {message.role === "assistant" ? (
            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-xl font-bold text-cyan-400 mb-2" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-lg font-bold text-cyan-400 mb-2" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-md font-bold text-cyan-400 mb-1" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-2" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                  code: ({ node, inline, ...props }) =>
                    inline ? (
                      <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-400" {...props} />
                    ) : (
                      <code className="block bg-slate-900 p-2 rounded my-2 text-slate-300 overflow-x-auto" {...props} />
                    ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-slate-300">{message.content}</p>
          )}
        </div>
        <div className="text-xs text-slate-500 mt-1 ml-1">{formattedTime}</div>
      </div>
    </div>
  )
}
