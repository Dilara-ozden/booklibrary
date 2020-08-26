<template>
    <div>
        <b-navbar toggleable="sm" type="dark" variant="info">
            <b-navbar-brand href="#">VUE</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/" class="nav-link">
                            Book Store Operation
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/user"  class="nav-link">
                            User Operations
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>
