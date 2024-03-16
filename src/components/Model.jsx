import '../styles/Model.css'

const Model = (props) => {
    return (
        <div className={props.active ? "Model active": "Model"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "Model-content active": "Model-content"} onClick={(e) => e.stopPropagation()}>
                <table className="ModelTable">
                    <tr>
                        <th width="300px">
                            <h3>{"Date of the last repair: " + props.lastRepair}</h3>
                        </th>
                        <th width="300px">
                            <h3>{"The planned date of the next repair: " + props.nextRepair}</h3>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Model;
