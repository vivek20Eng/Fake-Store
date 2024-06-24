<script lang="ts">
    import FsSideNav from './FSSideNav.svelte';
    import FsCarousel from './FSCarousel.svelte';
    import FsCard from './FSCard.svelte';
    import { onMount } from 'svelte';
  
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
    let data: Product[] = [];
  
    onMount(async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        data = await response.json();
        products = data; 
        console.log('Products fetched:', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });
  </script>
  
  <section class="mx-12 sm:mx-32 mb-12 grid grid-cols-4 md:grid-cols-6 gap-5 sm:gap-32">
    <div class="col-span-2 md:col-span-2 border-r-2 pt-12">
      <FsSideNav/>
    </div>
  
    <div class="col-span-2 md:col-span-4 pt-12">
      <FsCarousel/>
    </div>
  </section>
  
  <div>
    <h1 class="text-[2.5em] font-bold text-[--primary-black] mx-32 my-12">Flash Sales</h1>
    <FsCard data={data}/>
    <div class="flex w-full justify-center items-center my-12">
      <button class="px-14 py-4 bg-[--primary-btn-color] rounded text-white">View All Products</button>
    </div>
  </div>
  