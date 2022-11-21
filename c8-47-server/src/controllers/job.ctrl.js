import User from '../models/User.js';
import Job from '../models/Job.js';
import Task from '../models/Task.js';

const getJob = async (req, res, next) => {
  const { user } = req;

  try {
    const jobFound = await Job.find({ user: user.id }).populate('tasks');
    //!VOLVER A VER al popular quitar campos

    //!VOLVER A VER preguntar por respuesta null
    if (!jobFound || jobFound.length === 0)
      return res.status(200).json({ job: null });

    return res.status(200).json({ job: jobFound });
  } catch (error) {
    next(error);
  }
};

const addJob = async (req, res, next) => {
  const { user } = req;
  const { title, organization, start_date, end_date, tasks } = req.body;

  try {
    const newJob = new Job({ title, organization, start_date, end_date });

    const newTasks = await Task.create(tasks);
    newTasks.forEach((task) => {
      newJob.tasks.push(task._id);
    });

    const userFound = await User.findOne({ _id: user.id });
    userFound.experience.push(newJob._id);

    await newJob.save();
    await newTasks.save();
    await userFound.save();

    return res.status(201).json({
      job: newJob,
      message: 'Job agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editJob = async (req, res, next) => {
  const { id, title, organization, start_date, end_date, tasks } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  const options = { new: true };

  try {
    const jobEdited = await Job.findOneAndUpdate(
      { _id: id },
      { title, organization, start_date, end_date },
      options
    );

    if (!jobEdited)
      return res.status(404).json({ message: 'Job no encontrado' });

    return res.status(201).json({
      job: jobEdited,
      message: 'Job modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteJob = async (req, res, next) => {
  const { user } = req;
  const { id: jobId } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  try {
    const jobDeleted = await Job.findOneAndDelete({ _id: jobId });

    if (!jobDeleted)
      return res.status(404).json({ message: 'Job no encontrado' });

    for (const taskId of jobDeleted.tasks) {
      await Task.findOneAndDelete({ _id: taskId });
      // if (!taskDeleted) continue;
    }

    const userFound = await User.findOne({ user: user.id });

    const newExperienceArray = userFound.experience.filter(
      (job) => job.toString() !== jobId
    );

    userFound.experience = newExperienceArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Job eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export {
  getJob,
  addJob,
  // editJob,
  // deleteJob
};
