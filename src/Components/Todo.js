import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks: [{task:'Check Emails.',id:Math.random()*10}, {task:'Attend Meetings.',id:Math.random()*100}, {task:'Complete the tasks that is assingned on Jira.', id:Math.random()*1000}],
            currentTask: ''
        };
    }

    handleChange=(event)=>{
        this.setState({
            currentTask: event.target.value
            
        })
    }

    addTask=()=>{
        this.setState({
            tasks: [...this.state.tasks,{task:this.state.currentTask,id:Math.random()*1000}],
            currentTask: ''
        })
    }

    deleteTask =(id)=>{
        let t = this.state.tasks.filter((taskObj)=>{
            return taskObj.id != id;
        })
        this.setState({
            tasks:[...t]
        })
    }

    render() {
    return (
      <div>
          <div>
            <input placeholder='Enter the task' value={this.state.currentTask} onChange={this.handleChange}></input>
            <button onClick={this.addTask} >Add Task</button>
          </div>

          {
              this.state.tasks.map((taskObj,idx)=>(
                  <div key={taskObj.id}>
                      <p>{idx+1}. {taskObj.task}</p>
                      <button onClick={()=>this.deleteTask(taskObj.id)}>Delete</button>
                  </div>
              ))
          }
      </div>
    )
  }
}
