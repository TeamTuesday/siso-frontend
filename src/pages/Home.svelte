<script lang="ts">
  let votes = [
    {
      id: 1,
      title: '주제 1'
    },
    {
      id: 2,
      title: '주제 2'
    },
    {
      id: 3,
      title: '주제 3'
    },
    {
      id: 4,
      title: '주제 4'
    },
    {
      id: 5,
      title: '주제 5'
    }
  ];
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>투표 주제</th>
        <th>링크</th>
      </tr>
    </thead>
    <tbody>
      {#each votes as vote}
        <tr>
          <td>{vote.title}</td>
          <td><a href="/list">투표하러 가기</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
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
