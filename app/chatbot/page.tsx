import { Navbar } from "@/components/navbar"
import { ChatInterface } from "@/components/chatbot/chat-interface"
import { Footer } from "@/components/footer"

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 text-transparent bg-clip-text">
            AI-Powered Cloud Assistant
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Get personalized recommendations, insights, and answers to all your cloud optimization questions
          </p>
        </div>
        <ChatInterface />
      </main>
      <Footer />
    </div>
  )
}
