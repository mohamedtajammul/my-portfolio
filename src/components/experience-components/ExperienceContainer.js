import '../Experience.css'

function ExperienceContainer(props) {
  return (
    <>
      <div className="experience__container">
        <div className="experience__container--1">
          <div className="experience__container--company-name">
            <p>{props.duration}</p>
            <h3>{props.companyName}</h3>
          </div>
        </div>
        <div className="experience__container--2">
          <h3>{props.role}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default ExperienceContainer