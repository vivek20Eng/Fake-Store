<script>
    import Carousel from 'svelte-carousel';
    import banner_one from "../assets/carousel/FSBanner1.jpg";
    import banner_two from "../assets/carousel/FSBanner2.jpg";
    import banner_three from "../assets/carousel/FSBanner3.jpg";
  
    let carousel;
  
    const handleNextClick = () => {
      carousel.goToNext();
    }
  </script>
  
  <section class="carousel bg-slate-500/20">
    <Carousel infinite autoplay swiping autoplayDuration="1500" bind:this={carousel}>
      <img src={banner_one} alt="banner" />
      <img src={banner_two} alt="banner" />
      <img src={banner_three} alt="banner" />
    </Carousel>
  </section>
  <button on:click={handleNextClick}>Next</button>
  