<script lang="ts">
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Button from '@/components/Common/Button.svelte';

  // FIXME : 원래 데이터 가져오던 방식
  // import {router} from 'tinro';
  // const params = router.params();

  // const id = params.id;
  // $: vote = fetch(`http://13.124.104.234:8080/vote-subjects/${id}`)
  //   .then(res => res.json())
  //   .then((data: {voteSubject: Module.Ivote}) => data.voteSubject);

  // FIXME : 임시데이터로 변경
  const vote = {
    title:
      '굳세게장식하는오직고행을눈에어디별과것이다굳세게장식하는오직고행을눈에어디?',
    agreeDescription:
      '이것이야말로 황금시대를 얼마나 힘차게 위하여서, 오직 같은 광야에서 봄바람',
    disagreeDescription:
      '이것이야말로 황금시대를 얼마나 힘차게 위하여서, 오직 같은 광야에서 봄바람이다. 것은 얼마나 만천하의 것은 하는'
  };
</script>

<div
  class="flex flex-col items-center h-full px-4 relative bg-[url('/images/sample_background.jpg')] bg-no-repeat bg-center bg-cover"
>
  {#await vote then vote}
    <VoteHeader />
    <VoteContents
      title={vote?.title}
      agree_description={vote?.agreeDescription}
      disagree_description={vote?.disagreeDescription}
    />
    <VoteInfo />
    <Button
      src="/images/icon/icn_next.svg"
      alt="voteCount"
      size="md"
      imgSize="lg"
      style="position: absolute; bottom: 6px;"
    />
  {/await}
</div>
