export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">🤖 Nexora AI Chat</h1>

      <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 h-[500px]">
        <p className="text-gray-400">
          AI cavabları burada görünəcək...
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <input
          className="flex-1 rounded-xl bg-zinc-800 p-4 outline-none"
          placeholder="Mesajınızı yazın..."
        />
        <button className="rounded-xl bg-purple-600 px-6">
          Göndər
        </button>
      </div>
    </main>
  );
}
