<script>
    import Codes from './lib/Codes.svelte'
    import {loadAccounts} from "./utils.js";
    import AddAccountButton from "./lib/AddAccountButton.svelte";
    import {accounts} from "./stores.js";

    loadAccounts().then(accs => {
        accounts.set(accs);
    })
</script>

<main class="container">
    <AddAccountButton/>
    <Codes/>
</main>

<style>
    .container {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-content: start;
    }
</style>
