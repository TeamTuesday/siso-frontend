/* eslint-disable */
import {writable} from 'svelte/store';
import {getApi} from '@/service/api';
import {voteType} from '@/store/voteStore';

function setVoteSubejcts() {
  let initValues: {
    voteSubject: Module.Ivote;
    voteSubjects: Module.Ivote[];
    commentA: VoteModule.BestComment;
    commentB: VoteModule.BestComment;
  } = {
    voteSubject: {
      id: '',
      title: '',
      agreeDescription: '',
      disagreeDescription: '',
      voteAgreeCount: 0,
      voteDisagreeCount: 0,
      voteCount: 0
    },
    voteSubjects: [],
    commentA: {
      id: '',
      createdAt: '',
      updateAt: '',
      deleteAt: '',
      userId: '',
      parentId: '',
      voteType: voteType.AGREE,
      comment: '',
      likeCount: 0
    },
    commentB: {
      id: '',
      createdAt: '',
      updateAt: '',
      deleteAt: '',
      userId: '',
      parentId: '',
      voteType: voteType.AGREE,
      comment: '',
      likeCount: 0
    }
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

  /** 주제 가져오기 */
  const fetchBestComments = async (id: string) => {
    try {
      let path = `/comments/best/${id}`;

      const options = {
        path
      };

      const getDatas = await getApi<{comments: VoteModule.BestComments}>(
        options
      );

      const newData: {comments: VoteModule.BestComments} = {
        comments: getDatas.comments
      };

      update(datas => {
        datas.commentA = newData.comments.commentA;
        datas.commentB = newData.comments.commentB;
        return datas;
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    subscribe,
    fetchVoteSubjects,
    fetchVoteSubject,
    fetchBestComments
  };
}
export const voteSubjectStore = setVoteSubejcts();
