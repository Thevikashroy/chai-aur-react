import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State variables
  const [length, setLength] = useState(8) // Length of the password
  const [numberAllowed, setNumberAllowed] = useState(false); // Whether numbers are allowed in the password
  const [charAllowed, setCharAllowed] = useState(false) // Whether special characters are allowed in the password
  const [password, setPassword] = useState("") // The generated password

  // useRef hook to reference the password input field
  const passwordRef = useRef(null)

  // Function to generate the password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Base characters for the password
    if (numberAllowed) str += "0123456789" // Add numbers if allowed
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`" // Add special characters if allowed

    // Generate the password by randomly selecting characters from the string
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass) // Set the generated password

  }, [length, numberAllowed, charAllowed, setPassword]) // Dependencies for the useCallback hook

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password input field
    passwordRef.current?.setSelectionRange(0, 999); // Set the selection range
    window.navigator.clipboard.writeText(password) // Copy the password to the clipboard
  }, [password]) // Dependency for the useCallback hook

  // useEffect hook to generate the password whenever the length, numberAllowed, or charAllowed changes
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        {/* Input field to display the generated password */}
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        {/* Button to copy the password to the clipboard */}
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        {/* Slider to adjust the length of the password */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        {/* Checkbox to allow/disallow numbers in the password */}
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        {/* Checkbox to allow/disallow special characters in the password */}
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App