import React from 'react';

export class Table extends React.Component {
    render() {
        return (
            <tr>

                <td>

                    {this.props.data.id}

                </td>

            </tr>
        );
    }
}