import React from "react";
import { Skill as SkillList } from "../../config/skill";
import { Skills } from "../../typeing";
import { useAppSelector } from "../../hooks/redux";
type Props = {
  selectedSkills: Skills[];
  handleSkillChange: (value: Skills) => void;
  userType:string
};

export const Skill = ({ selectedSkills, handleSkillChange ,userType}: Props) => {
  const {skill} = useAppSelector((state)=>state.siteinfo);
  return (
  <div className="col-span-2">
        <label className="lebel py-3">{`${userType=="freeelancer"?"Skills":"Interested"}`}</label>
      <div className="grid grid-cols-2  mb-5 gap-2">
      {skill?.map((skill: Skills, index) => (
        <li key={index} className="list-none ">
          <label className="flex flex-row items-center gap-3 text-lg">
            <input
              type="checkbox"
              checked={selectedSkills.some(
                (skillItem) => skillItem.name === skill.name
              )}
              onChange={(event) => handleSkillChange(skill)}
            />
            {skill.name}
          </label>
        </li>
      ))}
    </div>
  </div>
  );
};
