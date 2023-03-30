import type { Component } from "solid-js";

import logoWide from "./logo-wide.svg";

// import wa from "./assets/wa.svg";

import diamond from "./assets/diamond.svg";
import shop from "./assets/shop.svg";
import tokped from "./assets/tokped.png";
import shopee from "./assets/shopee.png";
import wa from "./assets/wa.webp";

const App: Component = () => {
  return (
    <div class="bg-light-cream">
      <header class="flex items-center justify-center pt-12">
        <a href="/">
          <img src={logoWide} alt="logo wodi" class="h-6 sm:h-7" />
        </a>
      </header>
      <h1 class="flex justify-center pt-12 pb-8 text-center font-golden text-xl leading-loose md:text-2xl">
        100% Handmade <br class="sm:hidden" /> Qur'an Cover
      </h1>
      <ul class="mx-auto max-w-3xl space-y-5 px-4 pb-4 font-haoura">
        <li>
          <a href="#coming-soon">
            <button class="flex w-full items-center justify-center rounded-lg bg-green-light py-5 px-4 font-semibold text-white hover:bg-green-dark">
              <img src={shop} alt="shop" />
              <span class="ml-4">
                Toko Official <span class="text-white/50">(coming soon)</span>
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="https://www.tokopedia.com/wirajaya-quran">
            <button class="flex w-full items-center justify-center rounded-lg border-[3px] border-green-light py-5 px-4 font-semibold text-green-light hover:bg-green-light hover:text-white">
              <img src={tokped} alt="tokopedia" class="h-7" />
              <span class="ml-4">Tokopedia</span>
            </button>
          </a>
        </li>
        <li>
          <a href="https://shopee.co.id/ggwirajaya">
            <button class="flex w-full items-center justify-center rounded-lg border-[3px] border-green-light py-5 px-4 font-semibold text-green-light hover:bg-green-light hover:text-white">
              <img src={shopee} alt="Shopee" class="h-6" />
              <span class="ml-4">Shopee</span>
            </button>
          </a>
        </li>
        <li class="flex items-center justify-center py-5">
          <img src={diamond} alt="" class="h-4" />
          <img src={diamond} alt="" class="mx-6" />
          <img src={diamond} alt="" class="h-4" />
        </li>
        <li>
          <a href="https://ggwirajaya.vercel.app/">
            <button class="flex w-full items-center justify-center rounded-lg bg-green-dark py-5 px-4 font-semibold text-white">
              {/* <img src={shopee} alt="Shopee" class="h-6" /> */}
              <span>Tentang Kami</span>
            </button>
          </a>
        </li>
        <li>
          <a href="#coming-soon">
            <button class="flex w-full items-center justify-center rounded-lg bg-green-dark py-5 px-4 font-semibold text-white">
              <img src={wa} alt="Shopee" class="h-6" />
              <span class="ml-2">Kontak</span>
            </button>
          </a>
        </li>
        <li>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.309034606296!2d106.7819507!3d-6.3191261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65982143a36fbe35!2sPT.GG%20WIRAJAYA!5e0!3m2!1sen!2sid!4v1673256701499!5m2!1sen!2sid"
            height="150"
            style="border:0;"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default App;
