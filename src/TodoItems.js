import React, { Component } from 'react'

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskIds: []
        };
    }

    componentDidMount() {
        fetch('/api/posts/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ taskIds: data });
        })
        .catch(error => console.error(error));
    }

    render() {
        const taskIds = this.state.taskIds.map(id => (
            <div key={id}>
                {id}
            </div>
        ));

        return (
            <div>
                {taskIds}
            </div>
        );
    }
}

export default TodoItems;

   