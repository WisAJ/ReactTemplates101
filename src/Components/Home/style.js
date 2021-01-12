import styled from 'styled-components'

export const HomeSec = styled.div`   
    height: 500px;
    background: url('images/Home/home-bg.jpg');
    opacity: 1;
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    ${'' /* background: url('../../../public/images/favicon.png'); */}
    ${'' /* background: url('https://picsum.photos/840/560'); */}
`

export const HomeInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    @media (max-width:768px) {
        font-size: 20px
    }
    
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;

    @media (max-width:768px) {
        font-size: 40px;
        color: #fff
    };

    @media (max-width:575px) {
        font-size: 30px;
    }
}
`

export const HomeInf = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`


export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    
    @media (max-width:768px) {
        font-size: 15px
    }


`

export const Span = styled.span`
    color: #000
`

export const HomeBtn = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background: #fff;
    color: #eb5424

    }
`



