export default function PromptForm(){
	return (
		<div className="bg-(--secondary) p-4 rounded-xl">
  <form action="#" className="flex items-center gap-4">
    <div className="grid gap-3 w-full">
      <input
        type="text"
        name="prompt"
        id="prompt"
        placeholder="Enter your prompt…"
        className="p-3 rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="style"
        id="style"
        className="p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          Select an image style
        </option>
        <option value="realistic">Realistic</option>
        <option value="disney">Disney</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <button
      type="submit"
      className="px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition"
    >
      Send
    </button>
  </form>
</div>
		)
}
