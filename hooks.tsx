import { useStore } from "./store";
import { Post } from "./types";

export const useRecentPost = () => {
  const { state, dispatch } = useStore();

  return {
    setRecentPost: (post: Post) => {
      dispatch({
        type: "SET_RECENT_POST",
        payload: post,
      });
    },
  };
};
