export function RegistrationFormSection() {
  return (
    <section className="mt-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-center font-extrabold text-2xl text-white tracking-tight sm:text-3xl">
          Đăng ký tham gia
        </h2>
        <p className="mb-6 text-center text-neutral-300">
          Điền biểu mẫu bên dưới để đăng ký tham gia Viet My Vibe Code 2025.
        </p>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-sm">
          <iframe
            className="h-[900px] w-full"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://docs.google.com/forms/d/e/1FAIpQLSf7BetkO6iZKZG4GB15aqKkGUk81IfCOBTiN8Hyga5_tJxKbA/viewform?embedded=true"
            title="Đăng ký tham gia Viet My Vibe Code 2025"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default RegistrationFormSection;
