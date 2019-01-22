import React from 'react'
import { Form } from './form';

/* we should export for use this component */
export class FirstComponent extends React.Component {



    render() {
        const datas = this.props.myList.map((element, index) => {
            return (
                /* gives warning if you don't use "key", warning = "each child in an array or iterator should have a unique "key" prop." */
                <li key={index} >
                    {index + 1}.eleman = {element}
                </li>
            )
        })

        return (
            <div>
                First Component<br />
                <hr />
                First list props<br />
                <ul> {datas} </ul>
                <hr />
                <Form />
            </div>
        );
    }

}