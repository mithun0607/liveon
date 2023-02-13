<template>
  <body class="page-index">
    <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="../assets/logo.png" alt="">
        </a>
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li class="dropdown login"><a href="#" class="active"><span>Login</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><router-link to="/security">Security Login</router-link></li>
                <li><router-link to="/bd">BD Login</router-link></li>
                <li><router-link to="/tfm">TFM Login</router-link></li>
                <li><router-link to="/tico">TICO Login</router-link></li>
                <li><router-link to="/qa">QA Login</router-link></li>
                <li><router-link to="/study">SD Login</router-link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section id="hero" class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <h2 data-aos="fade-up">News & Announcements | <br>Application Connectivity Walkthrough</h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
            </blockquote>
            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#recent-posts" class="btn-get-started">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main id="main">
      <section id="recent-posts" class="recent-posts">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Recent News</h2>
          </div>
          <div class="row gy-5">
            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="post-box">
                <div class="post-img"><img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt=""></div>
                <div class="meta">
                  <span class="post-date">Tue, December 12</span>
                  <span class="post-author"> / Julia Parker</span>
                </div>
                <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                <a href="#" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="post-box">
                <div class="post-img"><img src="assets/img/blog/blog-2.jpg" class="img-fluid" alt=""></div>
                <div class="meta">
                  <span class="post-date">Fri, September 05</span>
                  <span class="post-author"> / Mario Douglas</span>
                </div>
                <h3 class="post-title">Et repellendus molestiae qui est sed omnis</h3>
                <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus...</p>
                <a href="#" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="post-box">
                <div class="post-img"><img src="assets/img/blog/blog-3.jpg" class="img-fluid" alt=""></div>
                <div class="meta">
                  <span class="post-date">Tue, July 27</span>
                  <span class="post-author"> / Lisa Hunter</span>
                </div>
                <h3 class="post-title">Quia assumenda est et veritati</h3>
                <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam...</p>
                <a href="#" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="post-box">
                <div class="post-img"><img src="assets/img/blog/blog-4.jpg" class="img-fluid" alt=""></div>
                <div class="meta">
                  <span class="post-date">Tue, Sep 16</span>
                  <span class="post-author"> / Mario Douglas</span>
                </div>
                <h3 class="post-title">Pariatur quia facilis similique deleniti</h3>
                <p>Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi...</p>
                <a href="#" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer id="footer" class="footer">
      <div class="footer-content">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src="../assets/logo.png" alt="">
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div class="social-links d-flex  mt-3">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div class="col-lg-3 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bi bi-dash"></i> <a href="#recent-posts">News</a></li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Plot No. 46 & 47, <br>
                Water Tank Rd, 2nd Phase, <br>
                KIADB Industrial Area, <br>
                Antharasanahalli, Tumakuru, <br> 
                Karnataka 572106 <br><br>
                <strong>Phone:</strong> 9480849731/32/33/34/35/36/37<br>
                <strong>Email:</strong> info@liveonbiolabs.com<br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-legal">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Liveon Biolabs</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://advity.in/">Advity</a>
          </div>
        </div>
      </div>
    </footer>

    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  </body>
</template>

<script>
export default {
  name: 'MainHome',
  components: {
  },
}

</script>

<style scoped>
</style>
