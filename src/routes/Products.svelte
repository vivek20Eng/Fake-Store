<!-- // ProductsList.svelte

<script lang="ts">
  import { onMount } from 'svelte';
  import { getProductsByLimit, Product } from '../lib/fakeStore'; 

  let products: Product[] = [];
  let error: string | null = null;
  const limit: number = 5; 

  onMount(async () => {
    try {
      products = await getProductsByLimit(limit);
    } catch (err) {
      error = err.message;
    }
  });
</script>

{#if error}
  <p>Error: {error}</p>
{:else}
  <ul>
    {#each products as product}
      <li key={product.id}>
        <p>{product.title}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.price}</p>
      </li>
    {/each}
  </ul>
{/if} -->
