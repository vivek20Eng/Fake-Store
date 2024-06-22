<script>
    const categories = [
      "Woman’s Fashion",
      "Men’s Fashion",
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby’s & Toys",
      "Health & Beauty",
      "Watches",
      "Electronics"
    ];
  </script>
  <ul class="flex flex-col gap-2 text-lg">
    {#each categories as category}
      <li class="cursor-pointer">{category}</li>
    {/each}
  </ul>
  