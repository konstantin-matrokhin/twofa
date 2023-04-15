<script>
    import {message} from "../../stores.js";

    export let name;
    export let value;

    function copy() {
        message.set("Copied!");
        setTimeout(() => message.set(""), 2000);
    }
</script>

<div class="code" on:click={copy}>
    <div class="code__name">{name}</div>
    <div class="code__value">{value}</div>
</div>

<style lang="scss">
  .code {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: start;
    margin: 5px 0;
    color: #f6f6f6;
    background-color: lightslategray;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    pointer-events: bounding-box;
    -webkit-user-select: none;

    &__name {
      -webkit-user-select: none;
    }

    &__value {
      -webkit-user-select: none;
    }
  }
</style>