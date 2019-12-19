import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`


export const ProfileSec = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px
    }

`

export const ProfileList = styled.ul`
    list-style: none;
`

export const ProfileItem = styled.li`
    margin-bottom: 8px
`
export const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const ItemSpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none
     }
`

export const SkillsDesc = styled.div`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const TitleSpan = styled.span`
    float: left;
`

export const PercSpan = styled.span`
    float: right;
    margin-right: ${props => props.per ==='10%' ? '400px' : props.per === '20%' ? '380px' 
    :  props.per === '30%' ? '340px' :  props.per === '40%' ? '360px' : props.per === '50%' ? '295px' :
    props.per === '60%' ? '230px' : props.per === '70%' ? '170px' : props.per === '80%' ? '100px' : props.per === '90%' ? '40px' : '0' }
`

export const ProfileParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const Sp = styled(ParentSpan)`
    width: ${props => props.per }
`


export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const SkillsTitle = styled(ProfileTitle)``


export const ProfileTitleSpan = styled.span`
    font-weight: normal;
`

export const SkillsTitleSpan = styled(ProfileTitleSpan)``



