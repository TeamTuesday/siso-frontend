<script lang="ts">
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Nav from '@/components/Nav.svelte';

  // FIXME : 원래 데이터 가져오던 방식

  // import {router} from 'tinro';
  // const params = router.params();

  // const id = params.id;
  // $: vote = fetch(`http://13.124.104.234:8080/vote-subjects/${id}`)
  //   .then(res => res.json())
  //   .then((data: {voteSubject: Module.Ivote}) => data.voteSubject);

  // FIXME : 임시데이터로 변경
  const vote = {
    title: 'test',
    agreeDescription: 'agree',
    oppositeDescription: 'disagree'
  };
</script>

<div class="vote-container">
  {#await vote then vote}
    <VoteHeader />
    <VoteContents
      title={vote?.title}
      agree_description={vote?.agreeDescription}
      opposite_description={vote?.oppositeDescription}
    />
    <VoteInfo />
    <Nav />
  {/await}
</div>

<style lang="scss">
  .vote-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: url(/images/sample_background.jpg) no-repeat center / cover;
  }
</style>
