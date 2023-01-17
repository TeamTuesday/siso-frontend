/* eslint-disable */
import {postApi} from '@/service/api';

function setVote() {
  const postVote = async ({id, type}) => {
    try {
      let path = '/vote-vote';
      const options = {
        path,
        data: {id, type}
      };

      await postApi<{voteSubjects: Module.Ivote[]}>(options);
    } catch (error) {
      throw error;
    }
  };

  return {
    postVote
  };
}

export const voteStore = setVote();
