<script>
  import FsSideNav from './FSSideNav.svelte';
  import FsCarousel from './FSCarousel.svelte';
  import FsCard from './FSCard.svelte';
  import Carousel from 'svelte-carousel';
 let carousel;
</script>

<section class="mx-32 mb-12 grid grid-cols-6 gap-32">
    <div class="col-span-2 border-r-2 pt-12">
        <FsSideNav/>
    </div>

    <div class="col-span-4 pt-12">
        <FsCarousel/>
    </div>
</section>

<section class="flex gap-12 mx-24 my-32 ">
    <Carousel initialPageIndex particlesToShow="4" swiping>

    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    <FsCard/>
    </Carousel>
</section>