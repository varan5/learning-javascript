
const NameList = (props) => {
    const myLists = props.myLists
    const listItems = myLists.map((element) => <li>{myList}</li>)
    // map() is used to interate over the array named 'myList' and each element is getting rendered once

    return (
        <div>
            <h2>React Map Example</h2>
            <ul>{listItems}</ul>
        </div>
    )
}
