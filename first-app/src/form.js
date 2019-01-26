import React from 'react';

/*Ecma Script 6 EC6*/
/*Parameter define*/
function parameterDefine(num = 10, name = "snn", nullVal = "***") {
    console.log("1." + num); //return 10
    console.log("2." + name); //return coskun
    console.log("3." + nullVal); //return null 
}
parameterDefine(undefined, "coskun", null);

/*Spread Operator*/
var numbers = [3, 5, 7];
var scNumbers = [2, 1, 4];
function plus(a, b, c) {
    console.info(a + b + c);
}
plus(numbers, scNumbers);//3,5,72,1,4undefined
plus(...numbers);//15

/* Template String */
var tmp = `hi 
           how are you`;
console.log(tmp); /* hi 
                     how are you */
function tempStr(name, age) {
    console.log(`name ` + name + ` or 'we use params' => age ${age}`)
}
tempStr('sinan', 32); //name sinan or 'we use params' => age 32


/* new String Methods > repeat, startWith, endsWith, includes */
console.log('Repeat ' + "SNN".repeat(3)); //Repeat SNNSNNSNN

console.log('startWith ' + "SNN".startsWith("S", 0)); //startWith true

var endsValue = "SNN";
console.log('endsWith ' + endsValue.endsWith("N", endsValue.length)); //endsWith true

console.log('includes ' + endsValue.includes("Y")); //includes false

/* Object using */
var oName = "snn";
var obj = {
    name: oName,
    run: function (what) { console.log(what) }
};

console.log(obj.name); //snn
obj.run('running..');  //running

/* Arrow Function !!! */
var arrowRun = (firstParam) => console.log("This is arrow function : " + firstParam);

arrowRun('Say Hello');// This is arrow function : Say Hello


/* Set Collections !!! */
var values = new Set();
values.add('1').add(2);
values.delete(2);
console.log(values.has('1')); // true
var scValues = new Set(values);
console.log(scValues);//Set(1) {"1"}
console.log([...scValues]); //<Spread Operator> ["1"]
console.clear();



export class Form extends React.Component {

    sendClick(e) {
        e.preventDefault();
        const ret = document.getElementById('input222').value;
        console.log('I am here for sendButton ' + ret);
        this.props.newList(ret);
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.sendClick(e)}>
                    <input type="text" id="input222" />
                </form>
                <button onClick={this.sendClick.bind(this)}> Send</button>

                <li>


                </li>

            </div>



        );
    }
}