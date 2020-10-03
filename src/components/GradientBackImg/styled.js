import styled from 'styled-components';

const ImgGradBack =  styled.div`

     position: relative;
     background-image: url('../../images/socks.jpg');
     height: 800px;
     ::after{
        content: '';
        position: absolute;
        background: linear-gradient(90.01deg,#68F4DB 0%,#1E0358 99.98%);
        width: 79%;
        bottom: 50%;
        left: -66px;
        padding: 97px;
        z-index: -1;
   }

`

export default ImgGradBack;