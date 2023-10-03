import { defineStore } from "pinia";
import service from "../common/api.service";
import { actions } from "../constants/comic.schema";
import { setRate, getRate } from "@/core/common/storage";
export const useComicStore = defineStore("comic", {
  state: () => ({
    comic: {},
    currentView: 0,
    rateStars: getRate() || {},
  }),
  getters: {
    getComicId(state) {
      return state.comic.num;
    },
    getStart(state) {
      return state.rateStars[state.getComicId];
    },
  },
  actions: {
    changeView() {
      this.currentView++;
    },
    setRate(value) {
      this.rateStars[this.getComicId] = value;
      setRate(this.rateStars);
    },
    async getComicAction(action) {
      const { method, param, sum } = actions[action];
      const paramValue = sum ? this.getComicId + param : param;
      const comic = await this[method](paramValue);
      if (comic) this.comic = comic;
      if (!this.rateStars[this.getComicId]) this.setRate(0);
    },
    getRandom() {
      return service.get("/getRandom").then((response) => {
        return Promise.resolve(response.data);
      });
    },
    getComic(id) {
      return service.get(`/${id}`).then((response) => {
        return Promise.resolve(response.data);
      });
    },
    getLast() {
      return service.get("/getLast").then((response) => {
        return Promise.resolve(response.data);
      });
    },
  },
});
