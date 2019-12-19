import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const NavbarSec = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background-color: #ffffff;
    position: relative;
    border-bottom: 1px solid #000000;
`

export const Logo = styled.div`
    width: 50%;
    float: left;

    @media (max-media : 991px){
        width: 100%;
        float: none;
    }
`


export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;

    @media (max-width: 991px){
        width: 100%;
        float: none;
        margin-top: 20px;
        display: none
    }
`

export const ListItem = styled.li`
    display: inline-block;

    @media (max: 991px){
        display: none;
        text-align: center;
    }
`

export const Anchor = styled.a`
    display: block;
    color: #222222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424;
    }
`

export const StyledLink = styled(Link)`
    display: block;
    color: #222222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424;
    }
`


// export const StyledLink = styled(Link)`
//   color: palevioletred;
//   display: block;
//   margin: 0.5em 0;
//   font-family: Helvetica, Arial, sans-serif;

//   &:hover {
//     text-decoration: underline;
//   }
//   &.active {
//     color: red;
//   }
// `;


// export const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;

// export const RouteLink = styled(Link)`
//     display: block;
//     color: #222222;
//     text-decoration: none;
//     padding: 10px 15px;
//     font-weight: bold;
//     &:hover{
//         color: #eb5424;
//     }
// `
