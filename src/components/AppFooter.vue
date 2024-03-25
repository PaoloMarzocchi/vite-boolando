<script>

export default {
    name: 'AppFooter',
    data() {
        return {
            companyName: 'Boolando s.r.l.',
            legalInfos: ['Informazioni legali', 'Informativa sulla privacy', 'Diritto di recesso'],
            socialIcons: ["fa-brands fa-square-twitter", "fa-brands fa-square-facebook", "fa-brands fa-square-instagram", "fa-brands fa-pinterest", "fa-brands fa-square-youtube"]
        }
    }
}
</script>

<template>
    <footer class="site-footer">
        <div class="container d-flex">

            <section class="company">
                <h4> {{ companyName }}</h4>
                <ul class="company-info d-flex">
                    <li v-for="info in legalInfos">
                        <a href="#">{{ info }}</a>
                    </li>
                </ul>
            </section>

            <div class="social">
                <h6>Trovaci anche su</h6>
                <div class="social-icons d-flex">
                    <a href="#" v-for="icon in socialIcons">
                        <i :class="icon" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

</template>

<style></style>