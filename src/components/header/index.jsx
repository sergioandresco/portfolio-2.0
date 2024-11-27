import { useState, useEffect } from 'react';
import headerData from '@/data/header-opts.json';

const Header = () => {

    const [activeOption, setActiveOption] = useState('About');
    const [isScrolled, setIsScrolled] = useState(false);
    const { header } = headerData;
    
    useEffect(() => {
        
    })

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