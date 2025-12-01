function ImageList({images = ["", ""]}:{images?: string[]}){
	return (
<div className="flex gap-2">
{images.map((image, i) => (
	<img key={i} src={image} alt="" className="w-20 h-80"/>
))
}
</div>
	)
}

export default ImageList
