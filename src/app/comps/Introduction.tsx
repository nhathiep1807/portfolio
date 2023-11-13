export default function Introduction() {
  return (
    <section>
      <div className="relative z-10">
        <div className="w-full md:w-8/12">
          <div className="mb-8">
            <p className="text-[48px] lg:text-[80px] text-basic-dark-gray font-extrabold">
              Hi 👋
            </p>
            <p className="text-[48px] text-white font-extrabold mb-4 lg:text-[80px]">
              <span className="text-basic-dark-gray">{"I'm"}</span> Nhat Hiep
            </p>
            <p className="text-[15px] font-semibold text-basic-dark-gray lg:text-[24px]">
              I am a front-end engineer helping startups to turn their visions
              into a digital reality. I specialize in designing and building
              modern mobile and web-based apps.
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
            <a
              href="./pdfs/NhatHiepTran_CV.pdf"
              download
              className="cursor-pointer rounded-lg flex justify-center items-center min-h-[60px] px-8 py-4 bg-basic-onyx hover:translate-y-[-1px] text-basic-light-gray hover:text-white font-medium transition duration-300 w-full md:w-fit"
            >
              Download my CV
            </a>
            <a
              href="/contact"
              className="cursor-pointer rounded-lg flex justify-center items-center bg-faint-white bg-basic-onyx text-basic-light-gray min-h-[60px] px-8 py-4 hover:text-white transition duration-300 font-medium w-full md:w-fit"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
