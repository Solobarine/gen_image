import PromptForm from "../components/prompt-form"

function PromptPage(){
	return (
		<div className="p-4 grid grid-rows-[1fr_auto]">
		<div className="grid place-content-center">
		  <p className="text-2xl text-center font-semibold">What would you like to generate today?</p>
		</div>
		<div>
		<PromptForm />
		</div>
		</div>
	)
}

export default PromptPage
