import {
    Container,
    Content,
    ContainerIcons
} from './styles';

import youtubeImg from '../../assets/icons/youtube.svg';
import facebookImg from '../../assets/icons/facebook.svg';
import twitterImg from '../../assets/icons/twitter.svg';

export function Footer() {
    return (
        <Container>

            <Content>

                <div>
                    <h4>Follow Us</h4>
                    <ContainerIcons>
                        <img src={youtubeImg} />
                        <img src={facebookImg} />
                        <img src={twitterImg} />
                    </ContainerIcons>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>
                        2490 Leisure Lane <br />
                        San Luis Obispo <br />
                        California
                    </p>
                </div>

            </Content>

        </Container>
    )
}