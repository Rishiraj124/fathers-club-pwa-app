export default function Home() {
  return (
    <>
      <section className='tw-bg-primary-50 tw-bg-dotted-pattern tw-bg-contain tw-py-5 md:tw-py-10 '>
        <div className='tw-wrapper tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-2'>
          <div className='tw-flex tw-flex-col tw-justify-center tw-gap-8'>
            <h1 className='tw-h1-bold'>
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className='tw-p-regular-20 md:tw-p-regular-24'>
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
          </div>
          {/* <Image
            src='/assets/images/hero.png'
            alt='hero'
            width={1000}
            height={1000}
            className='max-h-[70vh] tw-object-contain tw-object-center 2xl:max-h-[50vh]'
          /> */}
        </div>
      </section>
      <section
        id='events'
        className='tw-wrapper tw-my-8 tw-flex tw-flex-col tw-gap-8 md:tw-gap-12'
      >
        <h2 className='tw-h2-bold'>
          Trust by <br /> Thousands of Events
        </h2>
        <div className='tw-flex tw-w-full tw-flex-col tw-gap-5 md:tw-flex-row'>
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
