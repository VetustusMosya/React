import "./post-add-form.css"


function PostAddForm() {
	return (
		<form className="">
			<input
				type="text"
				placeholder="Add your tweet"
				className="form-control new-post-label" />
			<button
				type="submit"
				className="btn btn-outline-secondary">
				Add
			</button>
		</form>
	)
}

export default PostAddForm;