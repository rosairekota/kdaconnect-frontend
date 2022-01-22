import { createSlice } from '@reduxjs/toolkit';
import { IProject } from '../../src/interfaces/project.interface';

interface ProjectState {
  projects: IProject[];
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ProjectState = {
  projects: [],
  isLoading: 'idle',
};

const ProjectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      state.projects.push(payload);
    },
  },
});

export default ProjectSlice.reducer;
