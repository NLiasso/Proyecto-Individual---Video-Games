import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sort } from "../store/actions"


export default function Order (){
    const dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }
    return <select name='select' onChange={onSelectChange} defaultValue={DESCENDENTE}>
        <option value={ASCENDENTE}> Ascendente</option>        
        <option value={DESCENDENTE}> Descendente</option>        
        </select>
}