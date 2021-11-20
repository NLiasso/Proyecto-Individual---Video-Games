import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sortByName } from "../store/actions"


export default function Order (){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sortByName(e.target.value))
    }
    return <select name='select' onChange={onSelectChange} defaultValue={DESCENDENTE}>
        <option value={ASCENDENTE}> Ascendente ALFABETICO</option>        
        <option value={DESCENDENTE}> Descendente ALFABETICO</option>        
        </select>
}