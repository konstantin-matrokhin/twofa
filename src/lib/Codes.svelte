<script>
    import Message from "./Message.svelte";
    import Code from "./code/Code.svelte";
    import {accounts, codes, message} from "../stores.js";

    $: console.log(Array.from($accounts))
</script>

<div class="code-list">
    {#each Array.from($accounts) as [id, account]}
        <Code issuer={account.issuer} accountName={account.account} code={$codes.get(id)}/>
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
