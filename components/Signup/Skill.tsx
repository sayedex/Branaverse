import React from "react";
import { Skill as SkillList } from "../../config/skill";
import { Skills } from "../../typeing";
type Props = {
  selectedSkills: Skills[];
  handleSkillChange: (value: Skills) => void;
};

export const Skill = ({ selectedSkills, handleSkillChange }: Props) => {
  return (
    <div className="grid grid-cols-2 col-span-2 mb-5 gap-2">
      {SkillList.map((skill: Skills, index) => (
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
  );
};
