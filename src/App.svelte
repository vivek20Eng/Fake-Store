<script>
  import FSHeader from "./components/FSHeader.svelte"
  import FsHomePage from "./components/FSHomePage.svelte";
  import '@fortawesome/fontawesome-free/css/all.css';
  import Products from "./routes/Products.svelte";
  import FsFooter from "./components/FSFooter.svelte";
</script>
<section>
  <FSHeader/>
  <FsHomePage/>
<Products/>
<FsFooter/>
</section>