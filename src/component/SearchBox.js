import { useState } from "react";
const SearchBox = ({searchLocation}) =>{
    const [value, setValue] = useState('')

    const setValueInputText = e =>{
        setValue(e.target.value)
    }

    const getValueInputText = () =>{
        searchLocation(value)
    }

    return (
        <div className="SearchBox">
            <input type="text" placeholder="Buscar Ubicacion" value={value} onChange={setValueInputText} />
            <button onClick={getValueInputText}>Buscar</button>
        </div>
    )
}

export default SearchBox;