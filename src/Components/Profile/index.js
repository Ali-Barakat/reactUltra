/*jshint esversion: 6 */

import React, {useState, useEffect} from 'react';

import { ProfileSkills, Skills , ProfileSec, ProfileTitle, ProfileTitleSpan, ProfileList, ProfileItem, ItemSpan, ItemSpanWeb,
   SkillsTitle, SkillsDesc, Bar, TitleSpan, PercSpan, ProfileParent,  SkillsTitleSpan, Sp} from './style.js';

import axios from 'axios';


const Profile = () => {
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    axios.get('js/data.json').then(res =>{setSkills(res.data.profile)})
  }, [])


  const ProfileBars = skills.map((skillsItem)=>{
    return(
        <Bar key={skillsItem.id}>
          <TitleSpan>{skillsItem.title}</TitleSpan>
          <PercSpan per={skillsItem.per}>{skillsItem.per}</PercSpan>
          <ProfileParent>
            <Sp per={skillsItem.per}></Sp>
          </ProfileParent>
        </Bar>
    )
  })


    return (
      <ProfileSkills>
        <div className="container">
          <ProfileSec>
            <ProfileTitle> <ProfileTitleSpan>My</ProfileTitleSpan> Profile</ProfileTitle>
            <ProfileList>
              <ProfileItem><ItemSpan>Name:</ItemSpan> Ali</ProfileItem>
              <ProfileItem><ItemSpan>Birthday:</ItemSpan> 16982</ProfileItem>
              <ProfileItem><ItemSpan>Address:</ItemSpan> Middelburg</ProfileItem>
              <ProfileItem><ItemSpan>Phone:</ItemSpan> 0685058404</ProfileItem>
              <ProfileItem><ItemSpan>email:</ItemSpan> a.barakat@vanlanschotkempen.com</ProfileItem>
              <ProfileItem><ItemSpan>website:</ItemSpan> <ItemSpanWeb>www.vanlanschotkempen.com</ItemSpanWeb></ProfileItem>
            </ProfileList>
          </ProfileSec>
          <Skills>
              <SkillsTitle>Some<SkillsTitleSpan> skills</SkillsTitleSpan></SkillsTitle>
              <SkillsDesc>lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis
              esse cupiditadt lorem ipsum dolor sit amet, consectetur adiposcing elit. Qous praesentium blanditiis
              </SkillsDesc>
              {ProfileBars}
          </Skills>
        </div>
      </ProfileSkills>
    );
}

export default Profile;
