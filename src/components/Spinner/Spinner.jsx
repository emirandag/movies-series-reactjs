import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="loader-circle">
        <p className="loader-content">LOADING</p>
        <div className="loader-line-mask">
            <div className="loader-line"></div>
        </div>
    </div>
  )
}

export default Spinner