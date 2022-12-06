import { isValidObjectId } from 'mongoose';

import Skill from '../models/Skill.js';
import User from '../models/User.js';

const getSkills = async (req, res, next) => {
  const { user } = req;

  try {
    const skillsFound = await Skill.find({ user: user.id });

    if (!skillsFound || skillsFound.length === 0)
      return res.status(200).json({ skills: null });

    return res.status(200).json({ skills: skillsFound });
  } catch (error) {
    next(error);
  }
};

const addSkill = async (req, res, next) => {
  const { user } = req;
  const { skills, tag: tagId } = req.body;

  if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  for (const skill of skills) {
    skill.user = user.id;
    skill.tag = tagId;
  }

  try {
    const newSkills = await Skill.create(skills);

    const userFound = await User.findOne({ _id: user.id });

    for (const skill of newSkills) {
      userFound.skills.push(skill._id);
    }

    await userFound.save();

    return res.status(201).json({
      skills: newSkills,
      message: 'Habilidades agregadas con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editSkill = async (req, res, next) => {
  const { name } = req.body;
  const { id: skillId } = req.query;

  if (!isValidObjectId(skillId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const skillEdited = await Skill.findOneAndUpdate(
      { _id: skillId },
      { name },
      options
    );

    if (!skillEdited)
      return res.status(404).json({ message: 'Skill no encontrada' });

    await skillEdited.save();

    return res.status(201).json({
      skill: skillEdited,
      message: 'Skill modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteSkill = async (req, res, next) => {
  const { id: skillId } = req.query;
  const { user } = req;

  if (!isValidObjectId(skillId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const skillDeleted = await Skill.findOneAndDelete({
      _id: skillId,
    });

    if (!skillDeleted)
      return res.status(404).json({ message: 'Skill no encontrada' });

    const userFound = await User.findOne({ _id: user.id });

    const newSkillsArray = userFound.skills.filter(
      (skill) => skill.toString() !== skillId
    );

    userFound.skills = newSkillsArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Skill eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getSkills, addSkill, editSkill, deleteSkill };
