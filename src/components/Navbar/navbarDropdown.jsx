export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-black-200">
          <a className="w-fit" href="#problems">
            <p className="navlink active-navlink">Problem</p>
          </a>
          <a className="w-fit" href="#solutions">
            <p className="navlink">Solutions</p>
          </a>
          <a className="w-fit" href="#team">
            <p className="navlink">Team</p>
          </a>
          <a className="w-fit" href="#technology">
            <p className="navlink">Technology</p>
          </a>
          <a className="w-fit" href="#contact">
            <p className="navlink">Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
}
