import axios from "axios";
const comic = axios.create({
  baseURL: "https://xkcd.com/",
});
const getRandom = async () => {
  try {
    const data = await getlast();
    const numRandom = Math.floor(Math.random() * data.num) + 1;
    return await getPosts(numRandom);
  } catch (error) {
    console.error(error);
  }
};

const getlast = async () => {
  try {
    const { data } = await comic.get("info.0.json");
    const { img, num, title } = data;
    return { img, num, title };
  } catch (error) {
    console.error(error);
  }
};

const getPosts = async (comicNumber) => {
  try {
    const { data } = await comic.get(`${comicNumber}/info.0.json`);
    const { img, num, title } = data;
    return { img, num, title };
  } catch (error) {
    console.error(error);
  }
};

export { getPosts, getlast, getRandom };
