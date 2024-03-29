/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ dataWeb }) {
  console.log(dataWeb);
  return (
    <div>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                {dataWeb.dataWeb[0].navbar.title}
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left" />
                <span className="hamburger-line transition duration-300 ease-in-out" />
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left" />
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-r-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Wellcome
                <span className="block font-bold text-dark text-4xl mt-1">
                  Dinny Aziza
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Mahasiswa
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Website Portofolio
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                I am
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  className="relative z-10 mx-auto max-w-full"
                  src="dist/img/dinny.png"
                  alt="dinny"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-3xl">
                Take your own design
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, saepe consequuntur vel tenetur expedita libero
                perspiciatis!
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Follow Me
              </h3>
              <p className="font-medium text-base text-secondary mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio provident magni facilis consequuntur, modi nesciunt
                maiores!
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.youtube.com/channel/UCC-RHf_BJspVPet_1snKzyw"
                  target="#"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/itsme_dinz"
                  target="#"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/dinnyaziza02"
                  target="#"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width={20}
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portofolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quia magni eius aperiam excepturi adipisci, quidem quasi
                deserunt cumque ab tempore aspernatur similique ducimus?
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="dist/img/porto/1.jpg"
                  alt="Landing Page"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-5">
                Desain Landing Page
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos obcaecati sequi dolore veniam debitis dicta?
                Voluptatibus voluptatem dolor dicta eum!
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="dist/img/porto/2.png"
                  alt="Landing Page"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-5">
                Desain Landing Page
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos obcaecati sequi dolore veniam debitis dicta?
                Voluptatibus voluptatem dolor dicta eum!
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="dist/img/porto/3.png"
                  alt="Landing Page"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-5">
                Desain Landing Page
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos obcaecati sequi dolore veniam debitis dicta?
                Voluptatibus voluptatem dolor dicta eum!
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="dist/img/porto/4.png"
                  alt="Landing Page"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-5">
                Desain Landing Page
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos obcaecati sequi dolore veniam debitis dicta?
                Voluptatibus voluptatem dolor dicta eum!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                impedit sit praesentium minus.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?design"
                  alt="Desain"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Desain aestetik sekali
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae nesciunt nulla dolorem. Corrupti minus sed
                    maiores?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?design"
                  alt="Desain"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Desain Landing Page
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae quos sunt nostrum, dolorem voluptatem blanditiis
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?design"
                  alt="Desain"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Fitur baru dari figma
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum molestias nisi in debitis beatae tempora optio!
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">
                Dinny Aziza
              </h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
              <p>dinnyaziza02@gmail.com</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Kategori Tulisan
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    UI/UX
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Ilustrasi
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <a
                href="https://www.youtube.com/channel/UCC-RHf_BJspVPet_1snKzyw"
                target="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/itsme_dinz"
                target="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://github.com/dinnyaziza02"
                target="#"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
            <p className="font-medium text-sm text-slate-500 text-center">
              Dibuat oleh
              <a
                href="https://www.instagram.com/itsme_dinz"
                target="#"
                className="font-bold text-primary"
              >
                Dinny Aziza
              </a>
              menggunakan
              <a
                href="https://tailwindcss.com"
                target="#"
                className="font-bold text-sky-500"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export async function getServerSideProps() {
  const dataResponse = await fetch(
    "https://backenddin-ev41ya6zs-dinnyaziza02.vercel.app/api/product"
  );
  const dataJson = await dataResponse.json();

  return {
    props: {
      dataWeb: dataJson,
    },
  };
}
