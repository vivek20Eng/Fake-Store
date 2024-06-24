<script lang="ts">
    import { onMount } from 'svelte';
    import Carousel from 'svelte-carousel';
  
    // Define the Product interface to match the API response structure
    interface Product {
      id: number;
      title: string;
      price: string; 
      category: string;
      description: string;
      image: string;
    }
  
    let products: Product[] = [];
  
    onMount(async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });
  
    let isFavorite = false;
    let isViewed = false;
    let isInCart = false;
  
    function toggleFavorite() {
      isFavorite = !isFavorite;
    }
  
    function toggleViewed() {
      isViewed = !isViewed;
    }
  
    function addToCart() {
      isInCart = !isInCart;
    }
  </script>
  
  <style>
    .icon {
      transition: color 0.3s;
    }
  </style>
  
  <section class="flex gap-12 mx-24 mb-12 flex-wrap justify-center">
      {#each products as product (product.id)}
        <div class="w-80 bg-white shadow-xl rounded mr-8 mb-12">
          <div class="relative h-52 w-full flex flex-col justify-between p-4 bg-cover bg-center"
            style="background-image: url({product.image});">
            <!-- Linear Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
            <div class="relative flex justify-between z-10">
              <button class="flex items-center justify-center bg-none border-none cursor-pointer p-0" on:click={toggleFavorite}>
                <i class="{isFavorite ? 'fas' : 'far'} fa-heart text-2xl {isFavorite ? 'text-red-500' : 'text-white'} icon"></i>
              </button>
              <button class="flex items-center justify-center bg-none border-none cursor-pointer p-0" on:click={toggleViewed}>
                <i class="{isViewed ? 'fas' : 'far'} fa-eye text-2xl {isViewed ? 'text-blue-500' : 'text-white'} icon"></i>
              </button>
            </div>
            <div class="relative z-10">
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                {product.category}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">{product.description}</p>
            <h1 class="text-gray-800 text-center mt-1">{product.title}</h1>
            <p class="text-center text-gray-800 mt-1">€{product.price}</p>
            <div class="inline-flex items-center mt-2">
              {#if isInCart}
                <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <i class="fas fa-minus text-xl"></i>
                </button>
                <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  2 <!-- Placeholder for quantity, you can bind to a variable if needed -->
                </div>
                <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <i class="fas fa-plus text-xl"></i>
                </button>
              {:else}
                <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" on:click={addToCart}>
                  Add to Cart
                </button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
  </section>
  