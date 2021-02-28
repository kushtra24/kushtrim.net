<template>

  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" target="_blank" class="nav-link">Home</nuxt-link>
        </li>
      </ul>

      <!-- SEARCH FORM -->
<!--      <form class="form-inline ml-3">-->
<!--        <div class="input-group input-group-sm">-->
<!--          <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">-->
<!--          <div class="input-group-append">-->
<!--            <button class="btn btn-navbar" type="submit">-->
<!--              <i class="fas fa-search"></i>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </form>-->
      <div class="navbar-nav ml-auto">
        <a href="auth/logout" @click.prevent="logout()">Sign Out</a>
      </div>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
<!--        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
        <span class="brand-text font-weight-light">Admin Panel</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
<!--          <div class="image">-->
<!--            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">-->
<!--          </div>-->
          <div class="info">
            <span class="d-block color-white">{{ $auth.user.name }}</span>
          </div>
        </div>

        <!-- SidebarSearch Form -->
<!--        <div class="form-inline">-->
<!--          <div class="input-group" data-widget="sidebar-search">-->
<!--            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">-->
<!--            <div class="input-group-append">-->
<!--              <button class="btn btn-sidebar">-->
<!--                <i class="fas fa-search fa-fw"></i>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
            <li class="nav-item menu-open">
              <nuxt-link to="/admin/dashboard" class="nav-link active">
                <font-awesome-icon far icon="tachometer-alt" />
                <p>{{ $t('dashboard') }}</p>
              </nuxt-link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <nuxt-link to="/admin/users" class="nav-link">
                    <font-awesome-icon far icon="user-circle" />
                    <p>Users</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="./index2.html" class="nav-link">
                    <font-awesome-icon far icon="question-circle" />
                    <p>Dashboard v2</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="./index3.html" class="nav-link">
                    <font-awesome-icon far icon="question-circle" />
                    <p>Dashboard v3</p>
                  </nuxt-link>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-12">
              <Nuxt />
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <strong>Copyright &copy;</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0
      </div>
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

</template>

<script>
    export default {
      name: "adminPanel",
      middleware: ['admin'],

      methods: {
        async logout() {
          try {
            await this.$auth.logout();
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
</script>

<style scoped>
  @import '~/assets/css/adminlte.min.css';
  .color-white {
    color: white;
    text-transform: capitalize;
  }


</style>
