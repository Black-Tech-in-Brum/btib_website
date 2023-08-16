function Footer() {
  return (
    <footer className="grid grid-cols-2 grid-rows-3 w-full min-h-96 bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-100% text-neutral-100 pt-12 px-24 pb-2">
      <h2 className="font-satoshi sm:text-lg font-bold">Black Tech in Brum</h2>
      <a
        href="#header"
        aria-label="Back to top"
        className="font-satoshi text-xxs sm:text-xs"
      >
        Back to top
      </a>
      <p className="col-span-full sm:w-1/2 font-atype text-2xl sm:text-5/2xl">
        Black Tech in Brum fosters empowerment and support for all Black
        individuals in the tech industry, ranging from newcomers to
        techpreneurs, through a welcoming community and valuable opportunities.
      </p>
      <p className="font-satoshi text-xxs sm:text-xs">
        © Copyright {new Date().getFullYear()} Black Tech in Brum. All rights
        reserved.
      </p>
      <div>
        <a href="#instagram">Instagram</a>
        <a href="#discord">Discord</a>
      </div>
    </footer>
  )
}

export default Footer
