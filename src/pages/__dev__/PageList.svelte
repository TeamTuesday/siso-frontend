<script lang="ts">
  export const pages = [
    // TODO: delete later
    {dev: true, name: '예제 1', url: '/ex1', author: '이승현', status: '작업 예정'},
    {dev: true, name: '예제 1', url: '/ex1', author: '이채미', status: '디자인 대기 중'},
    {dev: true, name: '예제 2', url: '/ex2', author: '장유수', status: '진행 중'},
    {dev: true, name: '예제 3', url: '/ex3', author: '이승현', status: '완료'},

    // auth
    {name: '로그인', url: '/auth/login', author: '장유수', status: '디자인 대기 중'},
    {name: '회원 가입', url: '/auth/register', author: '장유수', status: '디자인 대기 중'},
    {name: '마이페이지', url: '/auth/mypage', author: '장유수', status: '디자인 대기 중'},

    // vote
    {name: '투표 목록', url: '/list', author: '장유수', status: '디자인 대기 중'},
    {name: '투표 상세', url: '/vote/2fb79125-9afe-4c8e-b363-e7542928ae89', author: '이승현', status: '완료'},
    {name: '투표 상세 > 댓글', url: '/vote/2fb79125-9afe-4c8e-b363-e7542928ae89/comments', author: '이채미', status: '진행 중'},
  ]
</script>

<div class="py-[100px] px-[150px]">
  <div class="divide-y">
      <div class="row">
        <div>번호</div>
        <div>페이지 이름</div>
        <div>링크</div>
        <div>작업자</div>
        <div>상태</div>
      </div>
      {#each pages as page, idx}
        <div class="row">
          {#if !page.dev}
            <div>{idx - 3}</div>
          {:else}
            <div>-</div>
          {/if}
          <div>
            <a href={page.url}>{page.name}</a>
          </div>
          <div class="truncate px-3">
            <a href={page.url}>{page.url}</a>
          </div>
          <div>{page.author}</div>
          <div>
            {#if page.status === '작업 예정'}
              <span class="label waiting">{page.status}</span
              >
            {:else if page.status === '디자인 대기 중'}
              <span class="label waiting_design">{page.status}</span>
            {:else if page.status === '진행 중'}
              <span class="label in_progress">{page.status}</span>
            {:else}
              <span class="label done">{page.status}</span>
            {/if}
          </div>
        </div>
      {/each}
  </div>
</div>

<style>
  .row {
    @apply divide-x grid grid-cols-[0.5fr_2fr_2fr_0.8fr_1fr];
  }
  .row div {
    text-align: center;
  }
   
  .label {
    @apply py-px px-1 rounded text-sm;
  }
  .done {
    background-color: lightgreen;
    color: darkgreen;
  }
  .in_progress {
    background-color: lightblue;
    color: darkblue;
  }
  .waiting {
    background-color: lightgray;
    color: gray  
  }
  .waiting_design {
    background-color: lightgoldenrodyellow;
    color: darkgoldenrod  
  }
</style>
