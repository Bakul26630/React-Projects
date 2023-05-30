import React,{useState,useEffect} from "react";
import axios from "axios";
const SelectField = ()=>{
    const [num, setnum] = useState(1);
    const [name, setname] = useState();
    const [moves, setmoves] = useState();
    let pokemon = []
    for(let i=1 ; i<=100 ; i++)
    {
        pokemon[i-1]=i;
    }

    useEffect(()=>{

        async function getData(){
            const data = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`)
            setname(data.data.name);
            setmoves(data.data.moves.length);

        }
        getData();
    });

    return(<>
    <h1>Selected Value: <span style={{color:"red"}}>{num}</span></h1>
    <h1>Pokemon Name: <span style={{color:"red"}}>{name}</span></h1>
    <h1>Pokemon Moves : <span style={{color:"red"}}>{moves}</span></h1>
        <select value={num}  onChange={(e)=>{
            setnum(e.target.value);
        }}>
        {
            pokemon.map((val,index)=>{
                return(<option value={val} key={index}>{val}</option>)
            })
        }
        </select>
    </>)
}

export default SelectField