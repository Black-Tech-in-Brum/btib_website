import { ReactComponent as Scribble } from "@assets/icons/scribble.svg";
import { ReactComponent as CircleArrowUp } from "@assets/icons/circle-arrow-up.svg";
import { ReactComponent as LinkedIn } from "@assets/icons/linkedin.svg";
import { ReactComponent as Discord } from "@assets/icons/discord.svg";
function Footer() {
  return (
    <footer className="flex flex-wrap justify-between w-full min-h-96 bg-noise-gradient bg-secondary-300 bg-blend-hard-light bg-full text-neutral-100 pt-12 px-6 sm:px-24 pb-2">
      <div className="w-1/2">
        <h2 className="font-satoshi sm:text-lg font-bold">Black Tech in Brum</h2>
        <Scribble className="h-[0.875rem] -ml-2"  aria-hidden="true" />
      </div>
      <a
        href="#header"
        aria-label="Back to top"
        className="font-satoshi text-xxs sm:text-xs text-center"
      >
        <CircleArrowUp className="mb-2" />
        <span>Back to top</span>
      </a>
      <p className="col-span-full sm:w-1/2 font-atype text-2xl sm:text-5/2xl mr-48">
        Black Tech in Brum fosters empowerment and support for all Black
        individuals in the tech industry, ranging from newcomers to
        techpreneurs, through a welcoming community and valuable opportunities.
      </p>
      <p className="font-satoshi text-xxs sm:text-xs w-1/2 mt-24">
        © Copyright {new Date().getFullYear()} Black Tech in Brum. All rights
        reserved.
      </p>
      <div className="mt-24 flex gap-4">
        <a href="#discord" aria-label="Join us on Discord"><Discord /></a>
        <a href="#linkedin" aria-label="Follow us on LinkedIn"><LinkedIn /></a>
      </div>
    </footer>
  )
}

export default Footer
