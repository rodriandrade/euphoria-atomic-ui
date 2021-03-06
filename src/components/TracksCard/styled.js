import styled from 'styled-components'

const CardImg = styled.div`
    width: 190px;
    height: 190px;
    overflow: hidden;
    margin-right: 20px;

    img:hover{
    outline: none; 
     border-color: white; 
     box-shadow: 0 0 10px white;
     }
`

const TrackName = styled.h3`
    font-family: Abel;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: lighter;
    color: #fff;
    font-size: 20px;
`

const ArtistName = styled.h5`
    font-family: Abel;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: lighter;
    color: #fff;
    font-size: 16px;
    color: #757575;
    margin:0;
`

const TrackContainer = styled.div`
    display: flex;
    background-color: #090909;
    margin: 0 30px; 
    position: relative;
     :hover ::after{
        content: '';
        position: absolute;
        background: linear-gradient(90.01deg,#68F4DB 0%,#1E0358 99.98%);
        width: 76%;
        bottom: -15px;
        left: 2%;
        padding: 100px;
        z-index: -1;
   };
`

export { CardImg, TrackName, ArtistName, TrackContainer}