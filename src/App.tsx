import { motion } from "motion/react";
import {
  Theater,
  Video,
  Ticket,
  Users,
  Lightbulb,
  Truck,
  Building2,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    name: "莲花楼",
    type: "舞台剧",
    description:
      "十年前，四顾门门主李相夷与金鸳盟盟主笛飞声决战东海后消失于碧波。十年后，江湖游医李莲花偶遇方多病，被迫重新卷入江湖——一幅交织着侠骨柔情、快意恩仇的武侠长卷缓缓展开。改编自藤萍原著《吉祥纹莲花楼》。",
    mainImage: "/image6.png",
    stills: ["/image7.png", "/image8.png", "/image9.png", "/image10.png", "/image11.png"],
  },
  {
    name: "Time Share House",
    type: "沉浸式音乐剧",
    description:
      "千年不遇的月亮奇观，把四位身处不同年代的年轻男女带入一个超时空神秘酒馆。明朝皇世子、民国诗人、2021年少女与2031年未来人——面对混乱的时空宿命，彼此拯救是唯一破局的方法。",
    mainImage: "/image12.png",
    stills: ["/image13.png", "/image14.png", "/image15.png", "/image16.png"],
  },
  {
    name: "梦见狮子",
    type: "音乐剧",
    description:
      "缮灯艇京剧坤生余婉仪被逐出师门，阴差阳错结识二次元舞台剧制作人白翡丽，为重返缮灯艇加入《如梦南歌》剧组。尘封的秘密层层浮出水面……",
    mainImage: "/image17.png",
    stills: ["/image18.png", "/image19.png", "/image20.png"],
  },
];

const TEAM = [
  {
    name: "曹一凡",
    role: "厂牌创始人 / 制作人",
    bio: "2015-2021年就职于开心麻花，2021年创立BRAVO整挺好，参与制作多部音乐剧及舞台剧。",
    image: "/image1.png",
  },
  {
    name: "张雨萱",
    role: "运营总监 / 制作人",
    bio: "运营《秘密花园》《莲花楼》《北上》《Time Share House》《梦见狮子》等多部大型剧目。",
    image: "/image2.png",
  },
  {
    name: "喻丽蕊",
    role: "编剧 / 戏剧制作人",
    bio: "爱奇艺国潮音乐剧《梦见狮子》、军旅话剧《铁心向党》、2026山东春晚小品《深艔向日葵》。",
    image: "/image3.png",
  },
  {
    name: "何慧谦",
    role: "影视导演 / 摄影师",
    bio: "电影《穷途漫步》《银河差等生》，短片《Meant to meet》《寻她》，广告《金领冠》《安慕希》。",
    image: "/image4.png",
  },
  {
    name: "吴泳宏",
    role: "戏剧导演",
    bio: "《寻找家人》中方导演，《Time Share House》导演，《忘川引》执行导演。",
    image: "/image5.png",
  },
  {
    name: "待补充",
    role: "待补充",
    bio: "个人简介待补充。",
    image: "/image1.png",
  },
  {
    name: "待补充",
    role: "待补充",
    bio: "个人简介待补充。",
    image: "/image1.png",
  },
  {
    name: "待补充",
    role: "待补充",
    bio: "个人简介待补充。",
    image: "/image1.png",
  },
];

const SERVICES = [
  { icon: Theater, name: "戏剧制作" },
  { icon: Video, name: "影视拍摄" },
  { icon: Ticket, name: "票务运营" },
  { icon: Building2, name: "场地运营" },
  { icon: Truck, name: "道具运输" },
  { icon: Users, name: "艺人经纪" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "关于我们", href: "#about" },
    { name: "业务范围", href: "#services" },
    { name: "团队介绍", href: "#team" },
    { name: "项目展示", href: "#projects" },
    { name: "未来发展", href: "#future" },
    { name: "联系我们", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* ── Navbar ─────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className="font-display font-bold text-xl tracking-tighter text-zinc-900"
            >
              BRAVO
            </span>
            <span className="text-[10px] font-medium bg-zinc-900 text-white px-1.5 py-0.5 rounded leading-none flex items-center">
              整挺好
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-5 flex flex-col gap-3 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 py-1"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6">
        {/* Subtle brand accent */}
        <div className="absolute top-32 right-8 md:right-16 text-[120px] md:text-[200px] font-display font-black text-zinc-100 select-none leading-none pointer-events-none">
          B
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-8">
            Shanghai · Est. 2021
          </p>

          {/* Main headline */}
          <div className="mb-6">
            <p className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-zinc-900 leading-tight">
              <span className="inline-block bg-zinc-900 text-white px-3 py-0.5 mr-2">整</span>
              点不一样的，
              <span className="inline-block bg-zinc-900 text-white px-3 py-0.5 ml-2">挺好</span>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-zinc-300" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400">
              上海整挺好文化传媒
            </p>
            <div className="h-px w-12 bg-zinc-300" />
          </div>

          {/* Sub */}
          <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-xl mx-auto">
            戏剧厂牌 / 剧目制作 / 影视拍摄 / 演艺新空间开发
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-zinc-400">
            向下探索
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronRight size={16} className="text-zinc-300 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── About ───────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-zinc-900" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-10">
              关于我们
            </h2>

            <div className="space-y-6 text-base md:text-lg text-zinc-600 leading-relaxed font-light">
              <p>
                <span className="font-semibold text-zinc-900">整挺好 BRAVO</span>
                是由制作人曹一凡于2021年创立的戏剧厂牌。
              </p>
              <p>
                业务覆盖剧目出品制作、影视拍摄、演艺新空间开发、剧场票务运营管理、剧团运营、艺人经纪、戏剧IP孵化、运输服务、品牌营销等多个细分领域。
              </p>
              <p>
                联动众多一线创制团体及独立艺术家，致力于打造精品演出现场、拓展新形态演艺空间，不断取得良好的口碑和票房成绩。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-zinc-900" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-14">
            业务范围
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  {service.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────── */}
      <section id="team" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-zinc-900" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-14">
            团队介绍
          </h2>

          {/* Known members — 3 per row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
                className="text-center group"
              >
                {/* Avatar */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 bg-zinc-100 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Info */}
                <h4 className="text-sm md:text-base font-bold text-zinc-900 mb-0.5">
                  {member.name}
                </h4>
                <p className="text-[9px] md:text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 leading-tight">
                  {member.role}
                </p>
                <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed line-clamp-3 font-light">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────── */}
      <section id="projects" className="bg-zinc-900 text-white">
        <div className="flex items-center gap-3 mb-4 px-6 pt-20 md:pt-24 max-w-5xl mx-auto">
          <div className="w-8 h-px bg-white/40" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">
            Selected Works
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight px-6 mb-14 max-w-5xl mx-auto">
          项目展示
        </h2>

        <div className="space-y-20 md:space-y-28 pb-20 md:pb-28">
          {PROJECTS.map((project, idx) => (
            <div key={project.name} className="max-w-5xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Left: Text */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-3">
                    {project.type}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">
                    {project.name}
                  </h3>
                  <div className="w-10 h-0.5 bg-white/30 mb-6" />
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Stills */}
                  <div className="mt-8">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-3">
                      剧照精选
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {project.stills.map((still, sIdx) => (
                        <div
                          key={sIdx}
                          className="aspect-[4/3] rounded-md overflow-hidden bg-zinc-800"
                        >
                          <img
                            src={still}
                            alt={`剧照 ${sIdx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right: Hero image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="order-first md:order-last"
                >
                  <div className="aspect-[3/4] max-w-xs mx-auto md:mx-0 md:ml-auto rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.mainImage}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Separator */}
              {idx < PROJECTS.length - 1 && (
                <div className="mt-20 md:mt-28 border-t border-white/8" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Future ──────────────────────────────────── */}
      <section
        id="future"
        className="relative py-24 md:py-36 bg-zinc-100 overflow-hidden"
      >
        {/* Subtle background word */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-[22vw] font-display font-black leading-none text-zinc-200/70"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            B
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
                Future
              </span>
              <div className="w-8 h-px bg-zinc-400" />
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              未来发展
            </h2>
            <p className="text-sm md:text-base text-zinc-500 tracking-wide mb-14 font-light">
              Future Development
            </p>

            <div className="space-y-6 text-sm md:text-base text-zinc-700 leading-relaxed font-light text-left bg-white/60 backdrop-blur rounded-2xl p-6 md:p-10 shadow-sm">
              <p>
                2026年，BRAVO整挺好将推出数部全新小剧场驻演剧目和中大剧场巡演剧目，小剧场院线业务也将拓展到全国更多城市。
              </p>
              <p>
                并计划在现有艺人经纪业务的基础上建立全新的剧团管理模式和演员培训体系，完善演员梯队建设，不断提升演出质量。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-14">
            联系我们
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact details */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-0.5">
                    电话
                  </p>
                  <p className="text-lg font-display font-bold">189-2070-9293</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-0.5">
                    邮箱
                  </p>
                  <p className="text-base font-display font-bold break-all">
                    bravo@zhengtinghao.cn
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  如果您有任何合作意向或疑问，欢迎通过以上方式联系我们。
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center md:items-end">
              <div className="bg-white p-4 rounded-2xl shadow-2xl inline-block">
                <div className="w-36 h-36 md:w-44 md:h-44">
                  <img
                    src="/qrcode.png"
                    alt="扫码联系"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=bravo@zhengtinghao.cn";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-zinc-500 font-medium tracking-wide">
                扫码添加微信
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="py-8 border-t border-zinc-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg tracking-tighter text-zinc-900">
              BRAVO
            </span>
            <span className="text-[10px] font-medium bg-zinc-900 text-white px-1.5 py-0.5 rounded leading-none">
              整挺好
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} 上海整挺好文化传媒有限公司
          </p>
          <div className="flex gap-5">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
