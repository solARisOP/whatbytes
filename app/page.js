'use client'

import { Provider } from "react-redux"
import All from "./components/All"
import { store } from "./store/slice"

function page() {
	return (
		<Provider store={store}>
			<All />
		</Provider>
	)
}

export default page