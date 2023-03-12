import '../Skills.css'

function SkillsContainer(props) {

    const list = props.list.map((item) => {
        return <li key={item}>{item}</li>
    })

    return (
        <div className={props.className}>
            <h3>{props.heading}</h3>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default SkillsContainer