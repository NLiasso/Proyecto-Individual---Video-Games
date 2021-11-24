import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sortByRating } from "../store/actions"


export default function Order (){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sortByRating(e.target.value))
    }
    return <select name='select' onChange={onSelectChange} defaultValue={DESCENDENTE}>
                <option value={ASCENDENTE}> Ascendente RATING</option>        
                <option value={DESCENDENTE}> Descendente RATING</option>        
            </select>
}