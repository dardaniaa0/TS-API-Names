export type GameData = {
	// id: number,
	// title: String,
	// quote: String,
	// character: String,
	// esrb: String,
	// release: number

	nameID: String,
    name: String,
    meaning: String,
    imageName: String,
    gender: String,
    list: String,
    isFeatured: Boolean,
    category: String
}

export type ChildProp = {
	children?: JSX.Element | JSX.Element[]
}