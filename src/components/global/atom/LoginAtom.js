import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { exceptionApi } from "../api/api";

const { persistAtom } = recoilPersist({
  key: "AccessToken",
  storage: localStorage,
});

export const tokenAtom = atom({
  key: "tokenAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const roleSelector = selector({
  key: "roleSelector",
  get: async ({ get }) => {
    const accessToken = get(tokenAtom);

    if (!accessToken) {
      return null;
    }

    try {
      const role = await exceptionApi("/api/v1/auth/info", "POST");
      return role.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  cachePolicy_UNSTABLE: {
    eviction: "most-recent",
  },
});
