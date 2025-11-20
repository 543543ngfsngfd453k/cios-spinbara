"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export default function RecommendationsSection() {
  return (
    <section className="py-8 md:py-16 pb-20 md:pb-40 relative">
      {/* Background gradient and overlay - flipped horizontally */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A8C] to-[#000000B5]"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark-overlay.png"
          alt="Dark Overlay"
          fill
          className="object-cover"
          style={{
            objectPosition: "bottom right",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)", // Flip horizontally
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 pt-4 md:pt-8 font-montserrat">
          Moje <span className="gold-texture">rekomendacje</span>
        </h2>
        <p className="text-sm md:text-xl text-center text-gray-300 mb-6 md:mb-12">
          Przygotowaliśmy dla was ciekawe bonusy od rejestracji.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left casino card - Spinbara - now visible on mobile and desktop */}
          {/* Added order-2 for mobile and order-1 for md+ screens */}
          <div
            className="casino-card p-3 md:p-6 pt-6 md:pt-10 dotted-border md:angled-container transform md:rotate-[-1deg] relative hover-zoom-container-subtle mx-auto md:mx-0 max-w-[95%] md:max-w-none order-2 md:order-1"
            style={{ minHeight: "calc(550px)" }}
          >
            {/* Spinbara background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/background-bara2.jpg"
                alt="Spinbara Background"
                fill
                className="object-cover"
                style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
              />
              {/* Added darker overlay */}
              <div className="absolute inset-0 bg-[#0C0C0C]/80"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div>
                {/* Added padding on top */}
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 pt-3 md:pt-0">Spinbara</h3>
                <div className="flex justify-center mb-2 md:mb-4">
                  <Image
                    src="/images/spinbara-logo.png"
                    alt="Spinbara Logo"
                    width={250}
                    height={94}
                    className="object-contain w-[60%] md:w-[70%]"
                  />
                </div>
                <div className="bonus-badge text-center py-1 px-3 md:px-4 rounded-full text-xs md:text-sm w-fit mx-auto mb-3 md:mb-6">
                  <span className="font-extrabold text-white">BONUS POWITALNY</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 mt-6 md:mt-0">
                  150% BONUS + 150FS
                </h4>
                <p className="text-center mb-4 md:mb-8">od depozytu</p>

                {/* Centered content - Added id for scrolling - Pushed down on mobile */}
                <div className="mb-2 md:mb-8 flex flex-col items-center mt-16 md:mt-8">
                  <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">Największe plusy</h5>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base w-full">
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Bonus powitalny 150%</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">150 darmowych spinów</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Szybkie wypłaty w 24h</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button container for centering - Pushed down on mobile */}
              <div className="flex justify-center mt-auto pt-12 md:pt-0">
                <a
                  href="https://spnbr.monalvor.com/?mid=260177_1782483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button w-auto whitespace-nowrap bonus-button text-sm md:text-base py-2 px-4 md:py-3 md:px-6 inline-block text-center"
                >
                  <span className="font-extrabold text-white">Odbierz Bonus</span>
                </a>
              </div>
            </div>
          </div>

          {/* Center featured casino card - MODIFIED with darker overlay and zoom effect */}
          {/* Added order-1 for mobile and order-2 for md+ screens */}
          <div
            className="casino-card p-3 md:p-6 pt-6 md:pt-10 dotted-border md:angled-container transform md:rotate-[0deg] z-10 md:scale-105 relative hover-zoom-container-subtle mx-auto md:mx-0 max-w-[95%] md:max-w-none md:col-span-1 col-span-1 order-1 md:order-2"
            style={{ minHeight: "calc(550px)" }} // Made even longer on mobile
          >
            {/* Gold bars and coins background with darker overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/gold-bars-coins.jpeg"
                alt="Gold Bars and Coins"
                fill
                className="object-cover"
                style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
              />
              {/* Added darker overlay with #0C0C0C */}
              <div className="absolute inset-0 bg-[#0C0C0C]/80"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div>
                {/* Added padding on top of Legiano Casino on mobile */}
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4 pt-3 md:pt-0">Legiano Casino</h3>
                <div className="flex justify-center mb-2 md:mb-4">
                  <Image
                    src="/images/legiano-logo.png"
                    alt="Legiano Casino"
                    width={250}
                    height={94}
                    className="object-contain w-[60%] md:w-[70%]" /* Reduced from 100% to 70% on desktop */
                  />
                </div>
                <div className="bonus-badge text-center py-1 px-3 md:px-4 rounded-full text-xs md:text-sm w-fit mx-auto mb-3 md:mb-6">
                  <span className="font-extrabold text-white">BONUS POWITALNY</span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 mt-6 md:mt-0">100% BONUS</h4>
                <p className="text-center mb-4 md:mb-8">od depozytu</p>

                {/* Centered content - Added id for scrolling - Pushed down on mobile */}
                <div
                  id="najwieksze-plusy"
                  className="mb-2 md:mb-8 flex flex-col items-center scroll-target-plusy mt-12 md:mt-0"
                >
                  <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center">Największe plusy</h5>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base w-full">
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">100 darmowych obrotów</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Możliwość depozytu BLIK</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="mr-2 text-[#d4af37] flex-shrink-0" size={16} />
                      <span className="text-white text-center">Tygodniowy zwrot do 10%</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button container for centering - Pushed down on mobile */}
              <div className="flex justify-center mt-auto pt-12 md:pt-0">
                <a
                  href="https://lgno.monvaki.com/?mid=260177_1524185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button w-auto whitespace-nowrap bonus-button text-sm md:text-base py-2 px-4 md:py-3 md:px-6 inline-block text-center"
                >
                  <span className="font-extrabold text-white">Odbierz Bonus</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right casino card with slot machine background - HIDDEN ON MOBILE */}
          {/* Added order-3 for all screen sizes */}
          <div
            className="hidden md:flex casino-card p-6 flex-col items-center justify-center angled-container transform rotate-[1deg] opacity-70 relative mr-auto order-3"
            style={{ width: "90%" }}
          >
            {/* Slot machine background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image src="/images/slot-machine-spin.jpeg" alt="Slot Machine" fill className="object-cover opacity-30" />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-center">
                  <span className="gold-texture">W przygotowaniu</span>
                </h3>
                <p className="text-center text-gray-400">Nowe kasyno wkrótce dostępne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
