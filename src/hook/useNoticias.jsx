import { useContext } from "react"
import NoticiaContext from "../context/NoticiasProvider"

const useNoticias = () => {
  return  useContext(NoticiaContext)
}

export default useNoticias
