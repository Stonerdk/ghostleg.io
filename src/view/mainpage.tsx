import { Link } from "react-router-dom"

const home = () => {
  return (
    <>
      <li>
        <Link to='/ghostleg'>Ghost Leg</Link>
      </li>
      <li>
        <Link to='/spinner'>Spinner</Link>
      </li>
      <li>
        <Link to='/truimph'>Truimph</Link>
      </li>
      <li>
        <Link to='/dice'>Dice</Link>
      </li>
    </> 
  )
}

export default home;