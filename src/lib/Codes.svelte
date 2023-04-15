<script>
  import Message from "./Message.svelte";
  import totp from "totp-generator";
  import Code from "./code/Code.svelte";
  import {message} from "../stores.js";

  const token = totp("");

  const codes = [
      generateCode("Bitfinex", token),
      generateCode("Twitter", "123456"),
      generateCode("Facebook", "1234567"),
      generateCode("Linkedin", "12345678"),
      generateCode("Instagram", "123456789"),
      generateCode("Youtube", "1234567890")
  ];

  function generateCode(name, value) {
    return {name, value};
  }

  function copy() {
    // message.set("Copied to clipboard!");
    setTimeout(() => {
      // message.set("");
    }, 2000);
  }
</script>

<div class="code-list">
  {#each codes as code}
    <Code name={code.name} value={code.value}/>
  {/each}

  {#if $message}
    <Message/>
  {/if}
</div>

<style lang="scss">
  .code-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: stretch;
  }
</style>