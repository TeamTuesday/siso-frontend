/* eslint-disable */
import {postApi} from '$service/api';
import {voteSubjectStore} from '$store/voteSubjectStore';

export enum voteType {
  AGREE = 'AGREE',
  DISAGREE = 'DISAGREE'
}

function setVote() {
  /** 투표하기 */
  const postVote = async ({
    subjectId,
    type
  }: {
    subjectId: string;
    type: voteType;
  }) => {
    try {
      let path = '/vote-vote';
      const options = {
        path,
        data: {subjectId, type}
      };

      await postApi<{voteSubjects: Module.Ivote[]}>(options);
    } catch (error) {
      throw error;
    } finally {
      await voteSubjectStore.fetchVoteSubject(subjectId);
    }
  };

  /** 테스트용 리셋 */
  const resetVote = async () => {
    try {
      let path = '/vote-vote/reset';
      const options = {
        path
      };
      await postApi(options);
    } catch (error) {
      throw error;
    }
  };

  return {
    postVote,
    resetVote
  };
}

export const voteStore = setVote();
