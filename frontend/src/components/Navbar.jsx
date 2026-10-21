import { Link } from 'react-router'

function Navbar({ user, handleLogout }) {
  return (
    <nav>
      <Link to='/'>Homepage</Link>
      {user 
      ? 
      (<>
      <Link to='/public-entries'>Public Entries</Link>
        <Link to='/my-entries'>My Entries</Link>
        <Link to='/entries/create'>Create Entry</Link>
      <button onClick={handleLogout}>Sign Out</button>
      </>) : 
      (<>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/sign-in'>Sign In</Link>
      </>)}
    </nav>
  )
}

export default Navbar
