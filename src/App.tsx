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
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  { 
    name: "莲花楼", 
    type: "舞台剧", 
    description: "十年前,惊才绝艳的四顾门门主李相夷为追查师兄单孤刀遗骨,与金鸳盟盟主笛飞声决战东海,而后两大高手就此消失在万顷碧波之上。十年后,江湖游医李莲花偶遇仗义行侠安天下的方多病,机缘巧合下\"被迫\"重新卷入江湖,一幕交织着侠骨柔情、快意恩仇的武侠长卷就此在舞台上缓缓展开……本剧改编自藤萍原著小说《吉祥纹莲花楼》,舞台剧版《莲花楼》不仅展现了李莲花对江湖的\"漫长告别\", 也讲述了李相夷是如何成为\"天下第一\"的故事。",
    mainImage: "/image6.png",
    stills: [
      "/image7.png",
      "/image8.png",
      "/image9.png",
      "/image10.png",
      "/image11.png",
    ]
  },
  { 
    name: "Time Share House", 
    type: "沉浸式音乐剧", 
    description: "一个奇妙的夜晚，一次千年不遇的月亮奇观，把四位身处不同年代的年轻男女带入了一个拥有神秘力量的超时空酒馆。当2021年的倒霉少女莫晓芸遇上来自2031年的未来人周仁章，加上一个明朝的皇世子莲叶，还有来自民国的诗人狄辰。面对不可知的命运、混乱的时空，这三男一女由彼此怀疑到靠近，相处的日常搞笑又温馨。最终，四人的宿命被揭开，彼此拯救是唯一破局的方法，他们携手穿梭时空，既拯救了自己，也收获了爱情与友情。",
    mainImage: "/image12.png",
    stills: [
      "/image13.png",
      "/image14.png",
      "/image15.png",
      "/image16.png",
    ]
  },
  { 
    name: "梦见狮子", 
    type: "音乐剧", 
    description: "缮灯艇京剧坤生余婉仪，搞砸演出，被师叔倪麟逐出师门。阴差阳错结识二次元舞台剧制作人白翡丽，为了重回缮灯艇，她答应加入《如梦南歌》剧组。谁知白翡丽还隐藏着更大的秘密，层出不穷的事件，缮灯艇尘封的秘密也浮出水面……",
    mainImage: "/image17.png",
    stills: [
      "/image18.png",
      "/image19.png",
      "/image20.png",
    ]
  },
];

const TEAM = [
  {
    name: "曹一凡",
    role: "厂牌创始人 / 制作人",
    bio: "2015年-2021年就职于开心麻花，参与制作多部舞台剧及线上演出作品。2021成立厂牌BRAVO整挺好，参与制作多部音乐剧及舞台剧。",
    image: "/image1.png"
  },
  {
    name: "张雨萱",
    role: "运营总监 / 制作人",
    bio: "演出类项目：音乐剧《秘密花园》、舞台剧《莲花楼》、音乐剧《北上》、文旅项目《华山忆秦娥》、音乐剧《唐朝诡事录之曼陀罗》《Time Share House》《灵魂摆渡之永生》《梦见狮子》。",
    image: "/image2.png"
  },
  {
    name: "喻丽蕊",
    role: "编剧 / 戏剧制作人",
    bio: "代表作：爱奇艺国潮音乐剧《梦见狮子》、军旅话剧《铁心向党》、2026山东春晚小品《深舱向日葵》。",
    image: "/image3.png"
  },
  {
    name: "何慧谦",
    role: "影视导演 / 摄影师",
    bio: "电影《穷途漫步》《银河差等生》，短片《Meant to meet》《寻她》，广告《金领冠奶粉》《伊利安慕希》。",
    image: "/image4.png"
  },
  {
    name: "吴泳宏",
    role: "戏剧导演",
    bio: "《寻找家人》中方导演，《Time Share House》导演，《忘川引》执行导演，《隐婚男女》复排导演，《不能说的秘密》执行导演。",
    image: "/image5.png"
  },
  {
    name: "黄润景",
    role: "制作人/经纪人",
    bio: "主要作品：舞剧《天工开物》舞台剧《莲花楼》话剧《钦差大臣》《会走路的全家福》音乐剧《丝路之声》《七月与安生》《Time share house》《织梦》",
    image: "/润景.png"
  },
  {
    name: "杨沐琳",
    role: "制作人/舞台监督",
    bio: "主要作品：中非合作论坛峰会文艺演出，庆祝中华人民共和国成立75周年交响音乐会，全国政协2026年新年茶话会，2025年中共中央国务院春节团拜会，音乐话剧《受到召唤·敦煌》，舞台剧《莲花楼》，儿童音乐剧《小东东奇幻历险》，2025中国国际孔子文化节开幕式，话剧《钦差大臣》",
    image: "/image1.png"
  },
  {
    name: "王霏",
    role: "艺人统筹",
    bio: "负责艺人工作日常规划，曾参与线上中剧制作、曾任杂志社艺人统筹，参与舞台剧项目《莲花楼》。",
    image: "/image1.png"
  }
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter">BRAVO</span>
            <span className="text-xs font-medium bg-zinc-900 text-white px-2 py-0.5 rounded">整挺好</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-zinc-500 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <h1 className="text-[30vw] font-display font-black leading-none tracking-tighter">BRAVO</h1>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-12">
              <p className="text-3xl md:text-7xl font-display font-bold tracking-[0.15em] text-zinc-900 leading-tight">
                <span className="inline-block bg-zinc-900 text-white px-4 py-1 rounded-sm mr-4 shadow-xl">整</span>
                点不一样的，
                <span className="inline-block bg-zinc-900 text-white px-5 py-1 rounded-sm ml-2 shadow-xl">挺好</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="h-px w-24 bg-zinc-300" />
              <h2 className="text-[11px] md:text-3xl font-display font-bold tracking-[0.2em] text-zinc-500 uppercase">
                上海整挺好文化传媒有限公司
              </h2>
              <div className="h-px w-24 bg-zinc-300" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-12">
            <a href="#about" className="inline-flex items-center gap-2 group">
              <span className="text-sm font-bold tracking-widest uppercase">探索更多</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">About Us</h3>
              <h2 className="text-4xl font-display font-bold">关于我们</h2>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
              <p><span className="font-bold text-zinc-900">整挺好 BRAVO</span> 是由制作人曹一凡于2021年创立的戏剧厂牌。</p>
              <p>业务覆盖剧目出品制作、影视拍摄、演艺新空间开发、剧场票务运营管理、剧团运营、艺人经纪、戏剧IP孵化、运输服务、品牌营销等多个细分领域。</p>
              <p>我们联动众多一线创制团体及独立艺术家，致力于打造精品演出现场、拓展新形态演艺空间。不断取得良好的口碑和票房成绩。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Our Services</h3>
            <h2 className="text-4xl font-display font-bold">业务范围</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-zinc-900">{service.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Our Team</h3>
            <h2 className="text-4xl font-display font-bold">团队介绍</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-6 bg-zinc-100 shadow-sm group-hover:shadow-xl transition-all duration-500 max-w-[200px] mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-zinc-900 text-white overflow-hidden">
        {PROJECTS.map((project, idx) => (
          <div key={project.name} className="min-h-screen py-24 flex items-center border-b border-zinc-800 last:border-0 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="z-10">
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">{project.type}</h3>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">{project.name}</h2>
                  <div className="h-1 w-16 bg-white" />
                </div>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-12 font-light">{project.description}</p>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Stage Stills / 剧照精选</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {project.stills.map((still, sIdx) => (
                      <motion.div key={sIdx} whileHover={{ scale: 1.05 }} className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-800 border border-white/5">
                        <img src={still} alt={`${project.name} still ${sIdx + 1}`} className="w-full h-full object-cover transition-all duration-500" referrerPolicy="no-referrer" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative order-first md:order-last max-w-sm mx-auto md:ml-auto md:mr-0">
                <img src={project.mainImage} alt={project.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[40vw] font-display font-bold text-white/5 pointer-events-none select-none">{idx + 1}</div>
          </div>
        ))}
      </section>

      <section id="future" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#e5e5e5] overflow-hidden py-24">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[35vw] font-display font-black leading-none tracking-tighter text-[#cccccc]">BRAVO</h1>
        </div>
        <div className="relative z-10 text-center px-6 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-2 drop-shadow-sm">未来发展</h2>
            <p className="text-xl md:text-2xl font-light text-white tracking-[0.2em] font-display">Future development</p>
          </motion.div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 mt-12 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-4 text-zinc-800 font-bold tracking-tight text-lg md:text-xl leading-relaxed">
            <p>2026年BRAVO整挺好将推出数部全新的小剧场驻演剧目和中大剧场巡演剧目，小剧场院线业务也将拓展到全国更多城市</p>
            <p>并计划在现有艺人经纪业务的基础上建立全新的剧团管理模式和演员培训体系，完善演员梯队建设不断提升演出质量！</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section id="contact" className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-3xl md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-6 md:mb-12">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-display font-bold mb-2">联系我们</h2>
                <p className="text-zinc-400 text-sm md:text-lg">如果您有任何合作意向或疑问，欢迎通过以下方式联系我们。</p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">电话</p>
                      <p className="text-base md:text-2xl font-display font-bold break-all">18920709293</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">邮箱</p>
                      <p className="text-base md:text-2xl font-display font-bold break-all">bravo@zhengtinghao.cn</p>
                    </div>
                  </div>
                </div>
                <div className="relative group flex flex-col items-center">
                  <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl">
                    <div className="w-28 h-28 md:w-36 md:h-36 relative">
                      <img 
                        src="/qrcode.png" 
                        alt="QR Code" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=BRAVO-DRAMA";
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4" />
                    <p className="text-xs md:text-sm font-bold tracking-widest uppercase">扫码添加微信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tighter">BRAVO</span>
            <span className="text-[10px] font-medium bg-zinc-900 text-white px-1.5 py-0.5 rounded">整挺好</span>
          </div>
          <p className="text-sm text-zinc-400">© 2026 上海整挺好文化传媒有限公司. All rights reserved.</p>
          <div className="flex gap-6">
            {navLinks.slice(0, 3).map(link => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">{link.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
