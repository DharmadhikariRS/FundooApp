import Notes from '../models/notes.model';

//create a new note
export const createNote = async (body) => {
  const data = await Notes.create(body);
  return data;
};

//get all notes
export const getAllNotes = async (body) => {
  const data = await Notes.find({userId:body.userId});
  return data;
};

//get note bu ID
export const getNote = async (_id,body) => {
  const data = await Notes.findOne({_id,userId:body.userId});
  return data;
};

//update a note
export const updateNote = async (_id, body) => {
  const data = await Notes.findByIdAndUpdate(
    {
      _id,
      userId:body.userId
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete a Single note
export const deleteNote = async (_id, body) => {
  await Notes.findByIdAndDelete({_id,userId:body.userId});
  return '';
};


//archieve a note
export const archiveNote = async (_id,body) => {
  const note = await Notes.findOne({ _id, userId:body.userId });
  const isArchived = note.isArchived === false ? true : false;
  const data = await Notes.findByIdAndUpdate(
    {
      _id
    },
    { isArchived: isArchived },
    {
      new: true
    }
  );
  return data;
};

//trash a note
export const trashNote = async (_id,body) => {
  const note = await Notes.findOne({ _id: _id ,userId:body.userId});
  const isTrash = note.isTrash === false ? true : false;
  const data = await Notes.findByIdAndUpdate(
    {
      _id
    },
    { isTrash: isTrash },
    {
      new: true
    }
  );
  return data;
};