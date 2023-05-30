import React, { useEffect,useState,useContext } from "react"

const AppContext = React.createContext()

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({ children }) => {
    const[isLoading,setIsLoading]=useState(true)
    const[movies,setMovies]=useState([]);
    const[isError,setIsError]=useState({show:false,msg:""});
    const[query,setQuery]=useState('black adam');

    useEffect(() => {
        const getMovies = async (url) => {
            setIsLoading(true)
            try {
                const apiData = await fetch(url)
                const data = await apiData.json()
                if(data.Response==="True"){
                    setIsError({
                        show:false,
                        msg:""
                    })
                    setMovies(data.Search)
                    setIsLoading(false)
                }
                else{
                    setIsError({
                        show:true,
                        msg:data.Error
                    })
                    setMovies([])
                }
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        let timer = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        },500)

        return ()=>clearTimeout(timer)

    },[query])
    return <AppContext.Provider value={{isLoading,movies,isError,query,setQuery}}>{children}</AppContext.Provider>
}

const UseGlobalContextProvider = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, UseGlobalContextProvider}