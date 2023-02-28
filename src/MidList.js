
function MidList(props) {
    
    return(
        <div className='list'>
            <img src={props.lsrc} alt={props.text} />
            <p>
                <span>
                    {props.text}
                </span>
                <strong>
                    {props.title}
                </strong>
            </p>
        </div>
    )
}

export default MidList;