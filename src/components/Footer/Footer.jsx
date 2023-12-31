import {
  ReactComponent as CircleArrowUp,
} from '@assets/icons/circle-arrow-up.svg'
import { ReactComponent as Discord } from '@assets/icons/discord-large.svg'
import { ReactComponent as LinkedIn } from '@assets/icons/linkedin-large.svg'
import { ReactComponent as Scribble } from '@assets/icons/scribble.svg'
import { HashLink as Link} from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="min-h-96 flex w-full flex-wrap justify-between bg-secondary-300 bg-noise-gradient-small bg-full px-5 pb-6 pt-12 text-neutral-100 bg-blend-hard-light md:bg-noise-gradient md:px-24 md:pb-2 md:items-start">
      <div className="order-first w-1/2">
        <h2 className="font-satoshi font-bold md:text-lg">
          Black Tech in Brum
        </h2>
        <Scribble className="-ml-2 h-[0.875rem]" aria-hidden="true" />
      </div>
      <Link
        to="#header"
        aria-label="Back to top"
        className="mx-auto mt-9 md:m-0 text-center font-satoshi text-xxs md:text-xs"
      smooth>
        <CircleArrowUp className="mb-2" />
        <span>Back to top</span>
      </Link>
      <p className="order-first mt-4 w-full font-atype text-2xl md:order-none md:w-1/2 md:text-5/2xl md:mr-48 md:mb-10">
        Black Tech in Brum fosters empowerment and support for all Black
        individuals in the tech industry, ranging from newcomers to
        techpreneurs, through a welcoming community and valuable opportunities.
      </p>
      <p className="order-last mt-6 w-full text-center font-satoshi text-xxs md:order-none md:w-1/2 md:text-left md:text-xs md:mt-2">
        © Copyright {new Date().getFullYear()} Black Tech in Brum. All rights
        reserved.
      </p>
      <div className="mt-12 flex w-full items-center justify-center gap-8 md:w-auto md:gap-4 md:m-0">
        <a href="https://discord.gg/6fwRfARU4U" aria-label="Join us on Discord">
          <Discord className="box-content p-2 md:p-0 text-neutral-100" />
        </a>
        <a href="#linkedin" aria-label="Follow us on LinkedIn">
          <LinkedIn className="box-content p-2 md:p-0 text-neutral-100" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
