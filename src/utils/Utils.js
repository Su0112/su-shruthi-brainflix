import videosBrainFlix from "../data/videos.json";
import videoDetailsvideosBrainFlix from "../data/video-details.json";

//funcitons to retrieve data and named exports require curly braces and their name can be changed when imported
//default exports require no curly braces and their name cannot be changed

//named export
const getVideos = (videoId) => {
  return videosBrainFlix.filter((video) => video.id !== videoId);
};

export const getVideoDetails = (videoId) => {
  return videoDetailsvideosBrainFlix.find((video) => video.id === videoId);
};

//default export
//by default you can only have one "deafult export" from your js file
export default getVideos;

//MODULE IN NODEJS, just to export data and no components
