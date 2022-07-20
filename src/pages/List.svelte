<script lang="ts">
  $: votes = fetch('http://13.124.104.234:8080/vote-subjects')
    .then(res => res.json())
    .then((data: {voteSubjects: Module.Ivote[]}) => data.voteSubjects);
</script>

<div class="list-component">
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>투표 주제</th>
          <th>링크</th>
        </tr>
      </thead>
      <tbody>
        {#await votes then votes}
          {#each votes as vote}
            <tr>
              <td>{vote.title}</td>
              <td>
                <a href="/vote/{vote.id}">투표하러 가기</a>
              </td>
            </tr>
          {/each}
        {/await}
      </tbody>
    </table>
  </div>
</div>

<style>
  .list-component {
    height: 100%;
  }
  .table-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  table {
    width: 300px;
  }
  th,
  td {
    text-align: center;
    white-space: nowrap;
  }
</style>
