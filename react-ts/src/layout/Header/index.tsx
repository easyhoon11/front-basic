import React, { useState, useRef, KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

const [inputValue, setInputValue] = useState<string>('')

const searchButtonRef = useRef<HTMLButtonElement | null>(null)

const navigator = useNavigate();

const onEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
	if (event.key !== 'Enter') return;
	navigator(`/search/${inputValue}`)
	if (!searchButtonRef.current) return;
	searchButtonRef.current.click();
}

	return (
		<div style={{height: '200px', backgroundColor: 'rgba(255, 0, 0, 0.5)'}}>
			<button onClick={() => navigator('/')}>root</button>
			<button onClick={() => navigator('/main')}>Main</button>
			<button onClick={() => navigator('/sub')}>sub</button>
			<br />
			<Link to='/'>Link Root</Link>
			<Link to='/main'>Link main</Link>
			<Link to='/sub'>Link sub</Link>
			<br />
			<input 
				onChange={(event) => setInputValue(event.target.value)} 
				onKeyDown={onEnterHandler}
			/>
			<button onClick={() => navigator(`/search/${inputValue}`)}>search</button>
			{inputValue}
			<br />
			Header
		</div>
	)
}
