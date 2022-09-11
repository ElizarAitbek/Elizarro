import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click : false,
    tasks : [
        {
            title : 'hello',
            innerTasks : []
        }
    ]
}

const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers : {
        setTask(state) {
            state.click = !state.click
        },
        addTask(state, action){
          const {value,id,innerTasks}=action.payload
            const newTask = {
                title : value,
                id : id,
                innerTasks:innerTasks
            }
            state.tasks.push(newTask)
        },
        addCardTask(state,action){
            console.log(action.payload,'pylooo');
          const {id,textValue ,idAdd}=action.payload;
          console.log(id,'idid');
          const user=state.tasks.find((item)=>item.id === id)
          user.innerTasks.push({
            text:textValue,
            id:idAdd,
          })

        }
    }
})

export const { setTask, addTask ,addCardTask} = taskSlice.actions;

export default taskSlice.reducer;