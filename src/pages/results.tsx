import Bubble from "../components/chats/bubble"
import LoadingBubble from "../components/chats/loading-bubble"
import useImages from "../store"

function Results(){
	const image = useImages()

  return(
    <div>
    {
      image.loading ? 
	      <LoadingBubble/>
      : image.error ? <p className="text-red-600 text-sm">{image.error}</p> : <Bubble />
    }
    </div>
  )
}

export default Results
