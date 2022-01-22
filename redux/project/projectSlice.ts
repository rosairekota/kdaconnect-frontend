import { createSlice } from "@reduxjs/toolkit";
import { IProject } from "../../src/interfaces/project.interface";
import img1 from "../../public/assets/images/texaf_campus.jpg";

interface ProjectState {
  projects: Array<IProject>;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState:ProjectState = {
  projects: [
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
    {
      title: "Website Development",
      image: img1,
      price: "From $300 USD",
    },
  ],
  isLoading: "idle",
} 

const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
  }
});

export default ProjectSlice.reducer;
