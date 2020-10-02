import React from 'react'
import {GradientTitle, Grid, Col, Inner, GradientBackImg, ParticlesBackground} from '../components/Index';

const About = () => {
    return (
        <div className="App">
            <Inner>
                <ParticlesBackground>
                    <Grid colGap={30} rowGap={40}>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Neptune </GradientTitle>
                        </Col>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Mars </GradientTitle>
                        </Col>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Rocket </GradientTitle>
                        </Col>
                    </Grid>
                </ParticlesBackground>
            </Inner>
        </div>
    )
}

export default About