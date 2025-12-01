function Footer(){
	const date = new Date()

	return (
	<footer>
	<p className="p-2 text-center text-xl font-semibold">Copyright &copy; {date.getFullYear()}. All rights reserved.</p>
	</footer>)
}

export default Footer
