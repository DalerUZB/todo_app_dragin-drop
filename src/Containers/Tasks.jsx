import React, { useState } from 'react'
import Task from '../Components/Task'

import { v4 as id } from 'uuid'
import styled from 'styled-components'
const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: id(),
            title: "Backglog Tasks",
            color: "#CA8A04",
            todos: []
        },
        {
            id: id(),
            title: "To Do Tasks",
            color: "#DB2777",
            todos: []
        },
        {
            id: id(),
            title: "In Process",
            color: "#9333EA",

            todos: []
        },
        {
            id: id(),
            title: "Done",
            color: "#16A34A",
            todos: []
        },

    ])

    const saveTodoFunc = (inputValue, taskId) => {
        const stringifiedTasks = JSON.stringify(tasks)
        const copyTasks = JSON.parse(stringifiedTasks)
        const index = copyTasks.findIndex((task) => task.id === taskId)
        copyTasks[index].todos.push({ id: id(), text: inputValue })
        setTasks(copyTasks)
    }

    return (
        <Wrapper>
            <TasksRow>
                {tasks.map(task =>
                    <Task key={task.id}
                        task={task}
                        saveTodo={saveTodoFunc}
                    />)}
            </TasksRow>
        </Wrapper>
    )
}

export default Tasks

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e3e3e3 ;
`
const TasksRow = styled.div`
    height: 100%;
    display: flex;
    padding-top: 70px;
    justify-content: center;
    gap: 24px;

`
