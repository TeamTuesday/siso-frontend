/* eslint-disable */
import {writable} from 'svelte/store';
import {getApi} from './service/api';

function setVoteSubejcts() {
  let initValues: {voteSubjects: Module.Ivote[]} = {
    voteSubjects: []
  };

  let values = {...initValues};

  const {subscribe, update} = writable(values);

  const fetchVoteSubjects = async () => {
    try {
      let path = '/vote-subjects';

      const options = {
        path
      };

      const getDatas = await getApi<{voteSubjects: Module.Ivote[]}>(options);

      const newData: {voteSubjects: Module.Ivote[]} = {
        voteSubjects: getDatas.voteSubjects
      };

      update(datas => {
        const newArticles = [...datas.voteSubjects, ...newData.voteSubjects];

        datas.voteSubjects = newArticles;
        return datas;
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    subscribe,
    fetchVoteSubjects
  };
}

export const voteSubjects = setVoteSubejcts();
