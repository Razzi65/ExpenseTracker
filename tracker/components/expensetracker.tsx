import { Stack, HStack, VStack, Box, Input } from '@chakra-ui/react'
import useExpenseTracker from '../custom hooks/useExpenseTracker'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


const ExpenseTracker = () => {

    const { event, setEvent, numbers, setNumber, onClickHandler, addValue,
        setMinusVal, minusVal, plusVal
    } = useExpenseTracker()

    return (
        <>

            <center>
                <b>Expense Tracker By Rizwan Ahmed</b>
                <br /><br />

                <b>Current Balance</b>
                <div>
                  {plusVal}
                </div>

            </center>
            <br />

            <Box border={"ActiveBorder"} boxShadow={'2xl'} w={"30%"} h={"100px"} justifyContent={"center"} margin={"auto"}>
                <HStack spacing='10px'>
                    <Box borderEnd={"solid"} w='250px' h='100px' textAlign={"center"} pt={3}>
                        <b > Income </b>
                        <br/>
                        <Box marginTop={"4"}> <b> {plusVal} </b> </Box>
                    </Box>
                    <Box w='250px' h='100px' textAlign={"center"} pt={3}>
                        <b>  Expense </b> <br/>
                        <Box marginTop={"4"}> <b> {minusVal} </b> </Box>
                    </Box>

                </HStack>
            </Box>
            <br /><br />

            <Box w={"30%"} h={"100px"} justifyContent={"center"} margin={"auto"} textAlign={"center"}>
                <b>Transaction History</b>
                <br />
                <hr />
                {
                    addValue.map((value)=>{
                        return (
                          <VStack>  <div>
                                {value.item} {value.amount}
                            </div> </VStack>
                        )
                    })
                }
                
                </Box>

          <div>  <Box w={"30%"} h={"200px"} justifyContent={"center"} margin={"auto"} textAlign={"center"}>
                <b> Add New Transaction</b><br />
                <hr /> <br />
                <label htmlFor="trasnaction"></label>
                <Input onChange={(e) => setEvent(e.target.value)} id="tranaction" w={"110%"} value={event}/>
                <NumberInput>
                    <NumberInputField w={"110%"} onChange={(e) => setNumber(e.target.value)}  />
                    <NumberInputStepper >
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <br />
                <Button onClick={()=>onClickHandler()} colorScheme='teal' variant='solid' w={"110%"}>
                    Add Transaction
                </Button>
            </Box> </div>


        </>
    )
}


export default ExpenseTracker