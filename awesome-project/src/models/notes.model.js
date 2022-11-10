import { required } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const NotesSchema = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    description:{
      type: String,
      required:true
    },
    color:{
       type: String,
       
    },
    userId:{
        type: String,
        required:true
    },

    isArchived:{
      type: Boolean,
    default:false
    },
    isTrash:{
      type: Boolean,
      default:false
    }
  },
  {
    timestamps: true
  }
);
export default model('Notes', NotesSchema);