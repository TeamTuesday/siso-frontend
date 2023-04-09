/* eslint-disable */
import {writable} from 'svelte/store';
import {getApi} from '$service/api';

function setVoteSubejcts() {
  let initValues: {voteSubject: Module.Ivote; voteSubjects: Module.Ivote[]} = {
    voteSubject: {
      id: '',
      title: '',
      agreeDescription: '',
      disagreeDescription: '',
      voteAgreeCount: 0,
      voteDisagreeCount: 0,
      voteCount: 0
    },
    voteSubjects: []
  };

  let values = {...initValues};

  const {subscribe, update} = writable(values);

  /** 주제 목록 가져오기 */
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
        const newArticles = newData.voteSubjects;

        datas.voteSubjects = newArticles;
        return datas;
      });
    } catch (error) {
      throw error;
    }
  };

  /** 주제 가져오기 */
  const fetchVoteSubject = async (id: string) => {
    try {
      let path = `/vote-subjects/${id}`;

      const options = {
        path
      };

      const getDatas = await getApi<{voteSubject: Module.Ivote}>(options);

      const newData: {voteSubject: Module.Ivote} = {
        voteSubject: getDatas.voteSubject
      };

      update(datas => {
        const newArticles = newData.voteSubject;

        datas.voteSubject = newArticles;
        return datas;
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    subscribe,
    fetchVoteSubjects,
    fetchVoteSubject
  };
}
export const voteSubjectStore = setVoteSubejcts();
