// import Home from './assignment-7/Home';
import Home from './Home';
import Contacts from './Contacts';
import Students from './StudentData';
// import Contacts from './assignment-7/Contacts';
// import Students from './assignment-7/StudentData';
const StudentData = (Action) =>
{
    switch(Action.type)
    {
        case 'home' : return Home;
        case 'student' : return Students;
        case 'contact' : return Contacts;
        default : return 0;
    }
}
export default StudentData;