export function Footer() {
  return (
    <footer className="border-neutral-900 border-t bg-[#0a0a0a]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-neutral-400 text-sm md:flex-row">
        <p>&copy; {new Date().getFullYear()} Skitbit. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-lime-300" href="#privacy">
            Privacy
          </a>
          <a className="hover:text-lime-300" href="#terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
