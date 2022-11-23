import User from '../models/User.js';
import Job from '../models/Job.js';

const getJobs = async (req, res, next) => {
  const { user } = req;

  try {
    const jobsFound = await Job.find({ user: user.id });

    if (!jobsFound || jobsFound.length === 0)
      return res.status(200).json({ jobs: null });

    return res.status(200).json({ jobs: jobsFound });
  } catch (error) {
    next(error);
  }
};

const addJob = async (req, res, next) => {
  const { user } = req;
  const { title, organization, start_date, end_date, tasks } = req.body;

  try {
    const newJob = new Job({
      title,
      organization,
      start_date,
      end_date,
      tasks,
      main_job: true,
      user: user.id,
    });

    const userFound = await User.findOne({ _id: user.id });
    userFound.experience.push(newJob._id);

    await newJob.save();
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
  const { title, organization, start_date, end_date, tasks } = req.body;
  //!VOLVER A VER testear query id
  const { id: jobId } = req.query;

  const options = { new: true };

  try {
    const jobEdited = await Job.findOneAndUpdate(
      { _id: jobId },
      {
        title,
        organization,
        start_date,
        end_date,
        tasks,
      },
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
  const { id: jobId } = req.query;
  //!VOLVER A VER testear query id

  try {
    const jobDeleted = await Job.findOneAndDelete({ _id: jobId });

    if (!jobDeleted)
      return res.status(404).json({ message: 'Job no encontrado' });

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

export { getJobs, addJob, editJob, deleteJob };
