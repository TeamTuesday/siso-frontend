<script lang="ts">
  import Vote from '@/components/Vote/Vote.svelte';

  const example: Module.Ivote = {
    id: 1,
    title: '둘 중에 더 가기 무서운 여행은?',
    created: new Date(2022, 6, 25),
    updated: new Date(2022, 6, 25),
    deleted: null,
    agree_description: '김정은과 미국 여행',
    opposite_description: '트럼프와 북한 여행',
    vote_agree_count: 1,
    vote_opposite_count: 2,
    vote_count: 3
  };
</script>

<Vote vote={example} />

<style lang="scss">
</style>
