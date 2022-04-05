import { useState, useEffect } from 'react';
import {
    Container,
    LogoZutterman
} from './styles';

import logoWithNameImg from '../../assets/logoWithName.svg';
import logoImg from '../../assets/logo.svg';

export function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeScreenWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeScreenWidth)
    
        return () => {
            window.removeEventListener('resize', changeScreenWidth)
        }
    }, [])

    return (
        <Container>
            {
                (screenWidth < 1080) && (
                    <button>
                        <div />
                        <div />
                        <div />
                    </button>
                )
            }
            
            <LogoZutterman 
                src={screenWidth > 1080 ? logoWithNameImg : logoImg}
            />

            {
                (screenWidth > 1080) && (
                    <ul>
                        <li>
                            <a href="#">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#">MODELS</a>
                        </li>
                        <li>
                            <a href="#">GUARANTEE</a>
                        </li>
                    </ul>
                )
            }
           
        </Container>
    )
}