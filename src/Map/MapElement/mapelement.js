



export let MapElement = (props) => {
    
    return (<path fill="white" onClick={props.CrossClick(props.class, props.d)} d={props.d}></path>);
    
}