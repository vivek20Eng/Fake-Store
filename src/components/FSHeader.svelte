<script type="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import Logo from "../assets/FSLogo.png";
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
  class="border-b border-[--primary-text px-12"
>
  <svelte:fragment slot="lead">
    <img
      src={Logo}
      alt="Logo"
      aria-label="Navigate to homepage"
      class="h-12 cursor-pointer"
    />
  </svelte:fragment>

  <ul class="sm:flex justify-center gap-2 text-[--primary-black] text-lg hidden">
    <li
      class="duration-200 hover:bg-[--primary-btn-color] hover:shadow-lg hover:text-white px-4 py-2 rounded cursor-pointer"
    >
      Home
    </li>
    <li
      class="duration-200 hover:bg-[--primary-btn-color] hover:shadow-lg hover:text-white px-4 py-2 rounded cursor-pointer"
    >
      Sign up
    </li>
  </ul>

  <svelte:fragment slot="trail">
<!-- Font Awesome Icon for the hamburger menu (bars icon) -->
 <div class="block sm:hidden">

   <i class="fa-solid fa-bars cursor-pointer text-xl "></i>
 </div>

    <div class="sm:flex items-center justify-end space-x-4 w-3/4 hidden">
      <div class="relative flex-grow">
        <div
          class="text-xl text-[--primary-text] gap-5 flex items-center w-full"
        >
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
          >
            <i class=" fas fa-search text-[--primary-black]"></i>
          </div>
          <input
            type="search"
            class="block w-full p-2 pl-10 pr-5 text-sm text-[--primary-black] border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
            placeholder="What are you looking for?"
            required
          />
          <i class="text-[--primary-black] fas fa-heart cursor-pointer"></i>
          <div class="relative inline-block">
            <span
              class="badge-icon bg-red-500 text-white absolute -top-2 -right-3 z-10"
              >2</span
            >
            <i
              class="text-[--primary-black] fas fa-shopping-cart cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </svelte:fragment>
</AppBar>
