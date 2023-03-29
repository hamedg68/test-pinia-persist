import { defineStore } from "pinia";

type SubModel = {
  id: number;
  obj: { state: boolean };
};

type MainModel = {
  list: SubModel[] | undefined;
  item: SubModel | undefined;
  firstItem: SubModel | undefined;
  secondItem: SubModel | undefined;
};

export const useTestPersistStore = defineStore({
  id: "testPersistStore",

  state: (): MainModel => ({
    list: [],
    item: undefined,
    firstItem: undefined,
    secondItem: undefined,
  }),

  getters: {},
  actions: {},
  persist: {
    paths: ["list", "item"],
  },
});
