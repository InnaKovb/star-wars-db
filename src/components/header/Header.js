import './Header.scss';
import Logo from '../assets/star-wars-4.svg'
import { useNavigate} from "react-router-dom";

const  entities= [
    { path: '/films', label: 'Films' },
    { path: '/heroes', label: 'Heroes' },
    { path: '/planets', label: 'Planets' },
    { path: '/starships', label: 'Starships' },
  ];

function Header () {
    const navigate = useNavigate();
    
    const handleClickPathChange = (path) => {
        navigate(path);
      };
    
    return (
        <header className='header'>
            <div className='logo'>
                <a href='#'>
                    <img src={Logo} height='30px'/>
                </a>
            </div> 
            <div className='nav'>
                <div className='nav__wrapper'>
                    <ul className='nav-menu'>
                        {
                            entities.map((entities) => { 
                                return (<li className='nav-items' onClick={() => handleClickPathChange(entities.path)}><span>{entities.label}</span></li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;