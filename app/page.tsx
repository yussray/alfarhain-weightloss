import Image from "next/image";

const clinic = {
  phone: "09-788 8606",
  phoneHref: "tel:+6097888606",
  whatsapp: "010-901 7606",
  whatsappHref: "https://wa.me/60109017606",
  appointmentHref: "https://alfarhainmedicalcentre.com/temu-janji/",
  locationHref: "https://alfarhainmedicalcentre.com/locations/pusat-rawatan-al-farhain/",
  hours: "24 jam setiap hari termasuk cuti umum",
  address:
    "Pt 5075 Tingkat Bawah, Pt 5076 & Pt 5077 Tingkat Bawah & Tingkat Atas, Kompleks Perniagaan Saidina Ali, Kok Lanas, 16450 Kota Bharu, Kelantan",
};

const patientSignals = [
  ["01", "Berat badan sukar dikawal", "Anda sudah mencuba sendiri, tetapi masih memerlukan panduan yang lebih tersusun dan sesuai dengan keadaan semasa."],
  ["02", "Risau tentang kesihatan", "Anda mahu memahami kaitan berat badan dengan risiko seperti kencing manis, penyakit jantung dan tekanan darah tinggi."],
  ["03", "Tidak pasti cara bermula", "Anda mencari ruang yang selesa untuk berbincang dan membina langkah seterusnya bersama doktor."],
];

const journey = [
  ["01", "Mulakan perbualan", "Hubungi pasukan klinik melalui WhatsApp, telefon atau halaman temu janji."],
  ["02", "Penilaian menyeluruh", "Doktor menilai kesihatan, gaya hidup dan perkara yang mempengaruhi pengurusan berat badan anda."],
  ["03", "Pelan diperibadikan", "Langkah pengurusan disusun berdasarkan penilaian dan keperluan individu anda."],
  ["04", "Sokongan berterusan", "Pendidikan, motivasi dan susulan membantu anda meneruskan perubahan dengan lebih terarah."],
];

const support = [
  ["Penilaian", "Kesihatan & gaya hidup", "Perbincangan menyeluruh menjadi asas sebelum sebarang pelan dicadangkan."],
  ["Panduan", "Pemakanan yang praktikal", "Nasihat pemakanan disesuaikan supaya langkah yang dipilih lebih jelas dan realistik."],
  ["Pergerakan", "Aktiviti & senaman", "Panduan aktiviti dipertimbangkan sebagai sebahagian daripada pengurusan gaya hidup."],
  ["Jika sesuai", "Pertimbangan ubat", "Pilihan ubat hanya dipertimbangkan oleh doktor apabila sesuai dengan penilaian klinikal."],
];

const faqs = [
  ["Siapakah yang boleh mendapatkan konsultasi Klinik Obesiti?", "Klinik ini sesuai untuk individu yang ingin mendapatkan penilaian dan panduan doktor tentang pengurusan berat badan. Kesesuaian pelan ditentukan selepas penilaian kesihatan dan gaya hidup."],
  ["Apakah yang berlaku semasa konsultasi pertama?", "Doktor akan berbincang tentang keadaan kesihatan, gaya hidup dan perkara yang mempengaruhi berat badan anda sebelum mencadangkan langkah seterusnya."],
  ["Adakah semua pesakit akan diberikan ubat?", "Tidak semestinya. Ubat hanya dipertimbangkan oleh doktor jika perlu dan sesuai berdasarkan penilaian klinikal individu."],
  ["Bagaimanakah saya boleh membuat temu janji?", `Anda boleh menghubungi pasukan klinik melalui WhatsApp di ${clinic.whatsapp}, telefon di ${clinic.phone} atau menggunakan halaman temu janji Al-Farhain.`],
  ["Di manakah Klinik Obesiti ini dijalankan?", "Perkhidmatan ini ditawarkan di Pusat Rawatan Al-Farhain Kok Lanas, Kompleks Perniagaan Saidina Ali, Kok Lanas, Kota Bharu, Kelantan."],
];

function Button({ href, children, outline = false, light = false }: { href: string; children: React.ReactNode; outline?: boolean; light?: boolean }) {
  const style = outline
    ? light
      ? "border border-white/25 text-white hover:bg-white/10"
      : "border border-[#123b34]/25 text-[#123b34] hover:bg-white/40"
    : light
      ? "bg-[#bde75b] text-[#113a32] hover:bg-[#d0f282]"
      : "bg-[#034e4b] text-white hover:bg-[#023836]";

  return <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${style}`}>{children}</a>;
}

function Heading({ eyebrow, title, description, inverse = false }: { eyebrow: string; title: string; description?: string; inverse?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${inverse ? "text-[#79d3c6]" : "text-[#034e4b]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl ${inverse ? "text-white" : "text-[#1d2424]"}`}>{title}</h2>
      {description ? <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${inverse ? "text-white/70" : "text-[#5f6d6c]"}`}>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f7f5ee] pb-20 sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#034e4b]/10 bg-[#e8f3ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Image src="/brand/alfarhain-logo.png" alt="Pusat Rawatan Al-Farhain" width={184} height={50} priority unoptimized className="h-11 w-auto" />
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#315a52] lg:flex" aria-label="Navigasi utama">
            <a href="#perjalanan" className="hover:text-[#034e4b]">Proses konsultasi</a>
            <a href="#doktor" className="hover:text-[#034e4b]">Doktor</a>
            <a href="#lokasi" className="hover:text-[#034e4b]">Lokasi</a>
          </nav>
          <div className="hidden gap-3 sm:flex">
            <Button href={clinic.phoneHref} outline>Telefon klinik</Button>
            <Button href={clinic.whatsappHref}>WhatsApp kami</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate bg-[#073f3d] text-white">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -left-8 top-32 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-36 -top-52 h-[34rem] w-[34rem] rounded-full bg-[#31b19e]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto grid min-h-[46rem] max-w-[80rem] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div className="relative z-10 max-w-2xl reveal">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a9e2da]">
                <span className="h-2 w-2 rounded-full bg-[#6ed0c2]" /> Klinik Obesiti Al-Farhain
              </div>
              <h1 className="mt-7 text-[2.75rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.75rem]">Urus berat badan dengan pelan yang memahami anda.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">Sokongan doktor untuk menilai kesihatan dan gaya hidup anda, kemudian menyusun langkah pengurusan berat badan yang lebih peribadi dan terarah.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={clinic.whatsappHref} light>WhatsApp pasukan klinik</Button>
                <Button href={clinic.appointmentHref} outline light>Buat temu janji</Button>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/55">Penilaian doktor diperlukan untuk menentukan langkah yang sesuai bagi setiap individu.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[38rem] reveal-delay lg:justify-self-end">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#dce9e5] shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:aspect-[5/6]">
                <Image src="/services/weight-management-hero.webp" alt="Sesi perbincangan kesihatan di Pusat Rawatan Al-Farhain" fill priority unoptimized sizes="(max-width: 1024px) 92vw, 48vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062f2d]/70 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/20 bg-[#073f3d]/90 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8edbd0]">Dikendalikan oleh</p>
                  <p className="mt-2 text-xl font-semibold sm:text-2xl">Dr. Syaza & Dr. Athirah</p>
                  <p className="mt-1 text-sm text-white/65">Pusat Rawatan Al-Farhain Kok Lanas</p>
                </div>
              </div>
              <div className="absolute -right-3 top-8 rounded-2xl bg-[#bde75b] px-4 py-3 text-[#123b34] shadow-lg sm:-right-6 sm:top-12 sm:px-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em]">Klinik dibuka</p><p className="mt-0.5 text-lg font-bold">24 jam</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Maklumat klinik" className="border-b border-[#123f3a]/10 bg-[#dff0ea]">
          <div className="mx-auto grid max-w-[80rem] divide-y divide-[#123f3a]/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {[["Akses mudah", clinic.hours], ["Hubungi terus", `${clinic.whatsapp} · ${clinic.phone}`], ["Lokasi", "Kompleks Perniagaan Saidina Ali, Kok Lanas"]].map(([label, value]) => (
              <div key={label} className="py-5 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:pr-0"><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#034e4b]/70">{label}</p><p className="mt-1.5 text-sm font-semibold leading-6 text-[#183d38]">{value}</p></div>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Heading eyebrow="Ruang untuk bermula" title="Anda tidak perlu mencari jawapan seorang diri." description="Pengurusan berat badan boleh menjadi perjalanan yang mencabar. Perbualan bersama doktor membantu anda memahami keadaan semasa sebelum menentukan langkah seterusnya." />
            <div className="divide-y divide-[#034e4b]/15 border-y border-[#034e4b]/15">
              {patientSignals.map(([number, title, description]) => <div key={number} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8"><span className="font-mono text-sm text-[#034e4b]/45">{number}</span><div><h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3><p className="mt-2 max-w-xl leading-7 text-[#5f6d6c]">{description}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="perjalanan" className="bg-[#f0eadc] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-[80rem]">
            <Heading eyebrow="Perjalanan konsultasi" title="Daripada perbualan pertama kepada pelan yang lebih jelas." description="Setiap langkah bermula dengan penilaian. Cadangan seterusnya bergantung pada keadaan dan keperluan individu." />
            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {journey.map(([step, title, description]) => <li key={step} className="flex min-h-[17rem] flex-col rounded-[1.75rem] border border-[#034e4b]/10 bg-[#f9f7f0] p-6 transition-transform hover:-translate-y-1 sm:p-7"><span className="text-xs font-bold tracking-[0.2em] text-[#034e4b]/50">LANGKAH {step}</span><div className="mt-auto pt-12"><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-[#5f6d6c]">{description}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="bg-[#073f3d] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-[80rem]">
            <Heading eyebrow="Sokongan menyeluruh" title="Bukan satu formula untuk semua." description="Pelan pengurusan berat badan dibentuk daripada beberapa komponen yang dipertimbangkan bersama doktor." inverse />
            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2">
              {support.map(([label, title, description]) => <div key={title} className="bg-[#0b4946] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#79d3c6]">{label}</p><h3 className="mt-8 text-2xl font-medium tracking-tight">{title}</h3><p className="mt-3 max-w-md leading-7 text-white/65">{description}</p></div>)}
            </div>
          </div>
        </section>

        <section id="doktor" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start"><Heading eyebrow="Kenali doktor anda" title="Dipimpin dengan empati, disusun dengan teliti." description="Dr. Syaza dan Dr. Athirah mengendalikan Klinik Obesiti Al-Farhain dengan pendekatan berpusatkan pesakit." /><div className="mt-8"><Button href={clinic.whatsappHref}>Tanya pasukan klinik</Button></div></div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[["Dr. Syaza", "/doctors/dr-syaza.jpg", "Potret Dr. Syaza"], ["Dr. Nur Athirah Binti Hashim", "/doctors/dr-athirah.jpg", "Potret Dr. Nur Athirah Binti Hashim"]].map(([name, image, alt]) => <figure key={name} className="overflow-hidden rounded-[2rem] bg-[#dce5df]"><div className="relative aspect-[4/5]"><Image src={image} alt={alt} fill unoptimized sizes="(max-width: 640px) 92vw, 30vw" className="object-cover object-top" /></div><figcaption className="border-t border-[#034e4b]/10 bg-[#e7eee9] p-6"><p className="text-xl font-semibold tracking-tight">{name}</p><p className="mt-1 text-sm text-[#5f6d6c]">Doktor Klinik Obesiti</p></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Heading eyebrow="Soalan lazim" title="Sebelum anda menghubungi kami." description="Jawapan ringkas untuk membantu anda memulakan perbualan dengan lebih yakin." />
            <div className="divide-y divide-[#034e4b]/15 border-t border-[#034e4b]/15">
              {faqs.map(([question, answer]) => <details key={question} className="group"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold sm:text-xl"><span>{question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#034e4b]/20 text-xl font-normal text-[#034e4b] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-7 pr-12 leading-7 text-[#5f6d6c]">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section id="lokasi" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-[80rem] overflow-hidden rounded-[2rem] bg-[#dff0ea] lg:grid-cols-2">
            <div className="relative min-h-[22rem]"><Image src="/clinic/alfarhain-kok-lanas.webp" alt="Pusat Rawatan Al-Farhain di Kok Lanas" fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
            <div className="p-7 sm:p-10 lg:p-14"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#034e4b]">Kunjungi kami</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Pusat Rawatan Al-Farhain Kok Lanas</h2><p className="mt-8 leading-7 text-[#5f6d6c]">{clinic.address}</p><p className="mt-5 font-semibold text-[#315a52]">{clinic.hours}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={clinic.locationHref}>Lihat lokasi klinik</Button><Button href={clinic.phoneHref} outline>Telefon {clinic.phone}</Button></div></div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="relative mx-auto max-w-[80rem] overflow-hidden rounded-[2rem] bg-[#bde75b] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"><div className="relative max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#22544b]">Langkah pertama</p><h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[#123b34] sm:text-5xl lg:text-6xl">Mulakan dengan satu perbualan yang jujur tentang kesihatan anda.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#315a52]">Hubungi pasukan Pusat Rawatan Al-Farhain untuk bertanya tentang Klinik Obesiti atau mengatur temu janji.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={clinic.whatsappHref}>WhatsApp {clinic.whatsapp}</Button><Button href={clinic.appointmentHref} outline>Buat temu janji</Button></div></div></div>
        </section>

        <p className="mx-auto max-w-[80rem] px-4 pb-10 text-center text-xs leading-5 text-[#5f6d6c]">Maklumat ini bertujuan sebagai penerangan umum dan bukan pengganti konsultasi perubatan. Kesesuaian setiap pilihan bergantung pada penilaian doktor.</p>
      </main>

      <footer className="border-t border-[#034e4b]/10 bg-[#e8f3ef] px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-[80rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><Image src="/brand/alfarhain-logo.png" alt="Pusat Rawatan Al-Farhain" width={180} height={48} unoptimized className="h-11 w-auto" /><p className="max-w-xl text-sm leading-6 text-[#5f6d6c]">Peneraju penjagaan kesihatan primer di Pantai Timur. Penjagaan kesihatan yang menyeluruh, berkualiti dan mudah diakses untuk komuniti.</p></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#034e4b]/15 bg-[#f7f7f4] px-4 py-3 shadow-[0_-10px_30px_rgba(3,78,75,0.12)] sm:hidden"><div className="grid grid-cols-2 gap-3"><Button href={clinic.phoneHref} outline>Telefon klinik</Button><Button href={clinic.whatsappHref}>WhatsApp kami</Button></div></div>
    </div>
  );
}
