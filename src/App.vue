<template>
  <div id="app">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <a href="/" class="navbar-brand"></a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="实训文档"
          >
            <router-link to="/book" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-book"></i>
              <span class="nav-link-text">实训文档</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="考勤记录"
          >
            <router-link to="/attend" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-area-chart"></i>
              <span class="nav-link-text">考勤记录</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="课后习题"
          >
            <router-link to="/homework" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-tasks"></i>
              <span class="nav-link-text">课后习题</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="实训报告"
          >
            <router-link to="/place" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-map"></i>
              <span class="nav-link-text">实训报告</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="相关下载"
          >
            <router-link to="/download" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-download"></i>
              <span class="nav-link-text">相关下载</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="相关资料"
          >
            <router-link to="/pdf" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-file-pdf-o"></i>
              <span class="nav-link-text">相关资料</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title
            data-original-title="环境变量"
          >
            <router-link to="/envira" class="nav-link" active-class="active">
              <i class="fa fa-fw fa-envira"></i>
              <span class="nav-link-text">环境变量</span>
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav sidenav-toggler">
          <li class="nav-item">
            <a class="nav-link text-center" id="sidenavToggler">
              <i class="fa fa-fw fa-angle-left"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content-wrapper">
      <div class="container-fluid">
        <router-view/>
      </div>
      <!-- /.container-fluid-->
      <!-- /.content-wrapper-->
      <footer class="sticky-footer">
        <div class="container">
          <div class="text-center">
            <small>
              Copyright ©
              <span id="footer"></span>
            </small>
          </div>
        </div>
      </footer>
      <!-- Scroll to Top Button-->
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import "jquery";

export default {
  mounted: function() {
    $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
      template:
        '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
    // Toggle the side navigation
    $("#sidenavToggler").click(function(e) {
      e.preventDefault();
      $("body").toggleClass("sidenav-toggled");
      $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
      $(
        ".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level"
      ).removeClass("show");
    });
    // Force the toggled class to be removed when a collapsible nav link is clicked
    $(".navbar-sidenav .nav-link-collapse").click(function(e) {
      e.preventDefault();
      $("body").removeClass("sidenav-toggled");
    });
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $(
      "body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse"
    ).on("mousewheel DOMMouseScroll", function(e) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    });
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });
    // Configure tooltips globally
    $('[data-toggle="tooltip"]').tooltip();
    // Smooth scrolling using jQuery easing
    $(document).on("click", "a.scroll-to-top", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    $(".navbar-brand").text("实训系统");
    $("#footer").text(new Date().getFullYear() + " ISY Team");
  }
};
</script>
