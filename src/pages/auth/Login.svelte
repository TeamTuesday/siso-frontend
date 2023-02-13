<script lang="ts">
  import {onMount} from 'svelte';
  import {checkEmail, checkPassword} from '@/utils/Auth';

  let email: AuthModule.Iinput = {value: '', ref: null};
  let password: AuthModule.Iinput = {value: '', ref: null};

  onMount(() => {
    email.ref?.focus();
  });

  const login = () => {
    checkEmail(email.value);
    checkPassword(password.value);

    alert('Login Success!');
  };
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
  <form class="p-6 bg-gray-200" on:submit|preventDefault={login}>
    <div>
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        bind:value={email.value}
        bind:this={email.ref}
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        bind:value={password.value}
        bind:this={password.ref}
      />
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
  <div>
    <a href="/auth/register">Register</a>
  </div>
</div>
