import React, { Component } from 'react';

class App extends Component {
    state = {
        buyItems: [],
        newItem: '',
        message: ''
    }
    render() {
        const { buyItems, newItem, message } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Shopping list</h1>
                <form
                    className="form-inline text-center"
                    onSubmit={e => this.handleClick(e)}
                    ref={input => {
                        this.addForm = input;
                    }}
                >
                    <div className="form-group">
                        <label className="sr-olny" htmlFor="newItemInput">
                            Add new Item
                        </label>
                        <input
                            type="text"
                            placeholder="Bread"
                            className="form-control"
                            id="newItemInput"
                            ref={input => {
                                this.newItem = input;
                            }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-large"
                        >
                            Add new item
                        </button>
                    </div>
                </form>

                {this.state.buyItems.length < 1 && (
                    <p className="text-center message text-danger text-center">
                        Your list is empty
                    </p>
                )}

                {this.state.buyItems.length >= 1 && (
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Order in things to do</th>
                                <th
                                    scope="col"
                                    colSpan="2"
                                    className="text-center"
                                >
                                    First Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyItems.map((item, index) => {
                                return (
                                    <tr key={item}>
                                        <th>{index}</th>
                                        <td className="text-center">{item}</td>
                                        <td className="text-center">
                                            <button
                                                className="btn btn-large"
                                                onClick={event =>
                                                    this.deleteItem(event, item)
                                                }
                                                type="button"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-center">
                                    <button
                                        className="btn btn-large btn-primary"
                                        onClick={() => this.clearList()}
                                    >
                                        Clear list
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}

                {this.state.message !== '' &&
                    this.state.buyItems.length >= 1 && (
                        <p className="message text-danger text-center">
                            {this.state.message}
                        </p>
                    )}
            </div>
        );
    }

    handleClick(event) {
        //we pass event to write preventDefault() function
        event.preventDefault();

        const { buyItems } = this.state;
        const newItem = this.newItem.value;
        const isOnTheList = buyItems.includes(newItem);

        if (isOnTheList) {
            this.setState({
                message: `This item, ${newItem} is already on the list`
            });
        } else {
            //newItem !== '' && is to prevent empty values
            newItem != '' &&
                this.setState({
                    //spreed operator to concatenate elements in an array
                    buyItems: [...this.state.buyItems, newItem],
                    message: ''
                });
        }

        //reset input after submit
        this.addForm.reset();
    }

    deleteItem(event, item) {
        //we pass event to write preventDefault() function
        event.preventDefault();

        const indexArray = this.state.buyItems.indexOf(item);
        this.setState({
            buyItems: this.state.buyItems.filter(x => x != item)
        });
    }

    clearList() {
        this.setState({
            buyItems: []
        });
    }
}

export default App;
