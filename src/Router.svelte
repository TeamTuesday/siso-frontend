<script lang="ts">
  import {Route} from 'tinro';

  import List from '@/pages/List.svelte';
  import * as Auth from '@/pages/auth';
  import * as Dev from '@/pages/__dev__';
  import * as Vote from '@/pages/vote';
</script>

<!-- dev only -->
<Route path="/" redirect="/pagelist" />
<Route path="/pagelist"><Dev.PageList /></Route>

<!-- main -->
<!-- <Route path="/" redirect="/list" /> -->

<!-- auth -->
<Route path="/auth/login"><Auth.LogIn /></Route>
<Route path="/auth/register"><Auth.Register /></Route>
<Route path="/auth/mypage"><Auth.MyPage /></Route>

<!-- vote -->
<Route path="/list"><List /></Route>
<Route path="/vote/:id"><Vote.Detail /></Route>
