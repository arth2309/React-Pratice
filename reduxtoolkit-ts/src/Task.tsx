import {  useDispatch, useSelector } from "react-redux"
import { itemActions } from "./store"
import { RootState } from "./store"
import { Formik,Field,Form } from "formik"
import { counterActions } from "./store"





const Task = () => {

   
    
     interface itemstructure  {
    
        id : number,
        taskname : string,
        description : string
    
    }
    

   

    const dispatch = useDispatch();
    const items = useSelector((items : RootState) => items.item.items )
    const counter = useSelector((state : RootState) => state.counter.counter)
   

    const intialvalues : itemstructure = {

        id : counter,
        taskname : '',
        description : ''
    
     }
     

     


    const addItem = (values : itemstructure) => {

        dispatch(counterActions.increment())
        const item = {...values,id : counter}
        dispatch(itemActions.addItem(item))
       
    }

    return (
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>


         <Formik
           initialValues={intialvalues}
           onSubmit={addItem}
         >

            <Form>
                <Field name = 'taskname' placeholder = 'taskname' />
                <Field name = 'description' placeholder = 'description' />
              
                <button type="submit">Add</button>
            </Form>

         </Formik>
           

        <ul>
            {items.map((item) => <li key={item.id}>{item.id} and {item.taskname} and {item.description} and <button onClick={() => dispatch(itemActions.updateItem({...item,taskname : 'update',description : 'updated'}))}>update</button> and <button onClick={() => dispatch(itemActions.deleteItem(item.id))}>Delete</button></li> )}
        </ul>

      

        </div>
    )



}

export default Task