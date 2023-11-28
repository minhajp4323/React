const FetchEvent= () =>{
    const onClickHandler=(evt, extraparam)=>{
        console.log("you Clicked the button", evt.target);
        console.log("Another parameter", extraparam);
    }
    return(
        <div>
            <h1>Fetch Events</h1>
            <button onClick={(event)=>onClickHandler(event, "btn 1")}>button1</button>
            <button onClick={(event)=>onClickHandler(event, "btn 2")}>button2</button>
            <button onClick={onClickHandler}>button3</button>

        </div>
    )
}

export default FetchEvent;