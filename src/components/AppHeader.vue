<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            categories: ['Donna', 'Uomo', 'Bambino'],
            icons: ['fa-regular fa-user', 'fa-regular fa-heart', 'fa-solid fa-lock']
        }
    }
}
</script>

<template>
    <header class="site-header">

        <nav class="container d-flex">
            <ul class="d-flex">
                <li v-for='category in categories'>
                    <a href="#">{{ category }}</a>
                </li>
            </ul>
            <div class="logo-container">
                <img src="/img/boolean-logo.png" class="logo" alt="Logo boolean">
            </div>
            <div class="header-icons d-flex">
                <a href="#" v-for="icon in icons">
                    <i :class="icon" style="color: #ffffff;"></i>
                </a>

            </div>
        </nav>

    </header>
</template>

<style></style>