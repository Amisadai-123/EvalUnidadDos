<template>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h1>Bienvenido a areas</h1>
        </div>
        <router-view />
    </div>
    

</template>
<script>
import Piepagina from './Piepagina.vue'
export default {
    components: { 
      Piepagina
    }
}
</script>
