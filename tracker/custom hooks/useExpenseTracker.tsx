import { useState } from "react"

const useExpenseTracker = () => {

    type trackerType = {
        item:string,
        id?:string,
        amount:number
    }

    const [event, setEvent] = useState("")
    const [numbers, setNumber] = useState<number>(0)
    const [addValue, setAddValue] = useState<trackerType[]>([])
    const [minusVal, setMinusVal] = useState<number>(0)
    const [plusVal, setPlusVal] = useState<number>(0)
    const [total, setTotal] = useState<number>()

    const totalIncome = () => {
       }
    
    const addNewValue:trackerType = {
        item:event,
        amount:numbers
    }

    const onClickHandler = () => {
        setAddValue([...addValue, addNewValue])
        setEvent("")
        setNumber(0)
        
        if(numbers<0) {
            setMinusVal(numbers)
        }
        else if(numbers>0){
            setPlusVal(numbers)
        }

        var incomeTotal:number=0
        addValue.forEach((income)=>{
            
            incomeTotal+=income.amount} )
        setTotal(incomeTotal)
             
    }

    return{
        
        setEvent, event, numbers, setNumber, onClickHandler, addValue,
        setMinusVal, minusVal, plusVal, setPlusVal, totalIncome, total
        
    }
}


export default useExpenseTracker