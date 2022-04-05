import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import tangledMeasureTapeImg from '../../assets/tangledMeasureTape.png';
import stretchedMeasureTapeImg from '../../assets/stretchedMeasureTape.png';

import {
    Container,
    FirstSection,
    SecondSection,
    SecondSectionContent
} from './styles';

export function Home() {
    return (
        <>
            <Header />

                <Container>

                    <FirstSection>

                        <h3>
                            Measuring <br/>
                            everything
                        </h3>

                        <img src={tangledMeasureTapeImg} />

                    </FirstSection>

                    <SecondSection>

                        <SecondSectionContent>
                            <div>
                                <h3>
                                    We are Leader <br/>
                                    in Measure Tapes
                                </h3>

                                <p>
                                    There are 5x the <br/>
                                    circumference of planet <br/>
                                    earth in metric tapes <br/>
                                </p>
                            </div>

                            <img src={stretchedMeasureTapeImg} />
                        </SecondSectionContent>

                    </SecondSection>

                </Container>
                
            <Footer />
        </>
    )
}