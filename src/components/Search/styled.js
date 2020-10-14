import styled from 'styled-components'

const SearchBar = styled.input`
    width: 30%;
    background-color: rgba(20,20,20,0.5);
    letter-spacing: 4px;
    text-transform: uppercase;
    border: 1px solid white;
    padding: 1em 2em 1em 2em;
    color: white;
    font-family: 'Abel', sans-serif;
    font-size:1em;
`

const ChartContainer = styled.div`
    width: 100%;
    height: 600px;
    margin-bottom: 80px;
`

export { SearchBar, ChartContainer }