import React from 'react'
import { AboutCard, Container, Title, Input, Blockquote, Form, Inner, Nav, ParticlesBackground, Search, Header, Button, Paragraph } from '../components/Index'

const Components = () => {

    return (
        <>
        <Inner>
            <Header />

            <Container direction="column">
                <h2>Blockquote</h2>
                <Blockquote>Buenas, soy un blockquote</Blockquote>
                <h2>Title</h2>
                <Title primary={true}>Holanda</Title>
                <h2>Paragraph</h2>
                <Paragraph>
                “Melody is the most important ingredient in trance,” he concludes, as his PR comes over to signal that our interview time is up. “In house it’s the groove, in techno it’s the techno sounds and dark atmosphere, but in trance it’s the melody — it’s the closest to classical music, and it’s always moved me. My heart will always be there.” 
                </Paragraph>
                <h2>Form</h2>
                <Form></Form>
                <h2>Button</h2>
                <Button>Button</Button>
                <h2>Input</h2>
                <Input placeholder="Input"></Input>
                <h2>About Card</h2>
                <AboutCard
                    name="Title"
                    quote="Quote text"
                />
            </Container>

        </Inner>
        </>
    )
}

export default Components