
import Mainmeetup from './Mainmeetup.js'
import ProfileNav from '../Profile/ProfileNav.js'
import Questionpage from '../Questions/Questionpage.js'





export default function Meetup() {



    return (
        <div className='meetUpWrapper'>
         <Mainmeetup />
         <ProfileNav />
         <Questionpage />
        </div>
    )
}