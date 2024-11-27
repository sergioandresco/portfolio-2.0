import headerData from '@/data/header-opts.json';
import '@/components/header/header.css';

const Header = () => {

    const { header } = headerData;
    console.log(header);
    
    return(
        <nav>
            <ul>
                {Object.values(header).map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </nav>
    );
}

export default Header;