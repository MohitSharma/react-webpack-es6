import React from 'react';

import _ from 'lodash';

import TodosListHeader from './todosListHeader';
import TodosListItem from './todosListItem';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />)
    }
    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}