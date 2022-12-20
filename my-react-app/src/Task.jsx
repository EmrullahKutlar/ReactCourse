export const Task= (props)=>{
    return ( 
        <li
          type="button"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          aria-current="true"
          key={props.task.id}
          style={{background: props.task.isComplete==true?'#51eb5159':'white' }}
        >
          <p className="p-0 m-0"> {props.task.name} </p>
          <span className="">
          <button className="btn btn-outline-success" onClick={()=>props.completeTask(props.task.id)}>
          &#x2713;
            </button>
            <button
              className="btn btn-outline-danger ms-3"
              onClick={() => props.deleteTask(props.task.id)}
            >
              &#x2715;
            </button>
          </span>
        </li>
      );
}