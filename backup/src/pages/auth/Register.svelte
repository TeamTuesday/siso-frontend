<script lang="ts">
  import {onMount} from 'svelte';
  import {
    checkEmail,
    checkPassword,
    checkConfirmPassword,
    viewPassword
  } from '@/utils/Auth';

  let email: AuthModule.Iinput = {value: '', ref: null};
  let password: AuthModule.Iinput = {value: '', ref: null};
  let confirmPassword: AuthModule.Iinput = {value: '', ref: null};

  onMount(() => {
    email.ref?.focus();
  });

  const register = () => {
    checkEmail(email.value);
    checkPassword(password.value);
    checkConfirmPassword(password.value, confirmPassword.value);

    alert('Register Success!');
  };

  const toggleViewPassword = () => {
    viewPassword([password.ref, confirmPassword.ref]);
  };
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
  <form class="p-6 bg-gray-200" on:submit|preventDefault={register}>
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
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        bind:value={confirmPassword.value}
        bind:this={confirmPassword.ref}
      />
    </div>
    <div>
      <button type="submit">Register</button>
      <button type="button" on:click={toggleViewPassword}>View Password</button>
    </div>
  </form>
  <div>
    <a href="/auth/login">Login</a>
  </div>
</div>
