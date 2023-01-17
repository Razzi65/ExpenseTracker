import { useEffect, useState } from "react"

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
    const [total, setTotal] = useState<number>(0)

    useEffect (()=>{onClickHandler()}, [])

   

    const onClickHandler = () => {

        let a:number=0
        const addNewValue:trackerType = {
            item:event,
            amount:numbers
        }

        setAddValue([...addValue, addNewValue])
        

        
        addValue.forEach((item1,ind)=>{
            
            a+=item1.amount
        }
        )
        setTotal(a)
        
        
        if(numbers<0) {
            setMinusVal(numbers)
        }
        else if(numbers>0){
            setPlusVal(numbers)
        }

      
        console.log("aaaa>>>", a);    
    }
    
    
    

  
    return{
        
        setEvent, event, numbers, setNumber, onClickHandler, addValue,
        setMinusVal, minusVal, plusVal, setPlusVal, total
        
    }
}


export default useExpenseTracker