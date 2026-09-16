/* Paratus Nexus — landing page
   Vanilla JS. Content lives in I18N; the page is rendered from it and
   re-rendered on language change. Small interactions (dance frames, cursor,
   parallax, quiz, FAQ, reel hover) patch the DOM directly. */

const I18N = {
  ko: {
    navReel:'쇼릴', navAcct:'계정', navRev:'수익', navSoft:'소프트웨어', navDemo:'데모', navTeam:'팀', navCta:'문의하기', lang:'EN',
    heroTag:'애니메이션 스튜디오 × 소프트웨어', h1a:'우리는', h1b:'움직이는', h1c:'것을 만듭니다',
    heroSub:'광고를 위한 애니메이션을 만들고, 그 애니메이션으로 우리가 직접 개발한 소프트웨어를 인도와 미국에 팝니다. 만드는 사람과 파는 사람이 같으면 이야기가 달라집니다.',
    dance:['너무 편하구만~','슬슬 몸 풀어볼까','오, 리듬 좀 타는데','이 정도면 딱 좋아','야 좀 빨라지는데?','잠깐, 숨 좀…','다리가 안 보여!!','으아아 멈춰줘!!','이건 춤이 아니야!!!','...텔레포트 중'],
    heroCta1:'테스트 직접 해보기', heroCta2:'쇼릴 보기',
    stickerA:'인도 · 미국 서비스 중', stickerB:'회원제 소프트웨어', stickerC:'애니메이션으로 마케팅',
    marquee:['애니메이션 제작','광고 마케팅','Psyche Check','ResumeFix AI','뭄바이','뉴욕','회원제','모션 디자인'],
    stats:[{v:120,suffix:'+',label:'제작한 애니메이션 편수'},{v:2,suffix:'',label:'출시 국가 (인도 · 미국)'},{v:38,suffix:'K',label:'소프트웨어 회원'},{v:4.8,suffix:'',label:'평균 회원 만족도 / 5',dec:1}],
    reelH:'쇼릴. 호버하면 재생됩니다.', reelSub:'우리 소프트웨어를 광고하기 위해 직접 만든 애니메이션들. 모두 사내 팀이 기획·제작했습니다.',
    reel:[{tag:'광고',title:'Psyche Check 런칭 스팟',dur:'0:30'},{tag:'설명',title:'ResumeFix 60초 튜토리얼',dur:'1:00'},{tag:'브랜드',title:'Paratus Nexus 아이덴트',dur:'0:12'},{tag:'소셜',title:'인도 릴스 시리즈',dur:'0:15'},{tag:'광고',title:'미국 프리롤 캠페인',dur:'0:20'},{tag:'캐릭터',title:'마스코트 “넥시” 시트',dur:'0:45'}],
    playing:'▶ 재생 중', hover:'호버',
    acctTag:'우리 애니메이션 계정', acctH:'매일 올리고, 매일 봅니다', acctSub:'인스타그램에서 운영 중인 자체 AI 애니메이션 계정. 여기서 쌓은 조회수가 우리 소프트웨어의 첫 광고판입니다.',
    avgViews:'평균 조회수', maxViews:'최대 조회수', posts:'게시물', followers:'팔로워', following:'팔로우',
    accounts:[{handle:'superdupercatai',name:'Story.ai',bio:'Freshly squeezed AI comics every day!',posts:'15',followers:'2.1만',following:'2',avg:'100만',max:'550만'},{handle:'ethanxluna',name:'Ethan&Luna',bio:'예술가',posts:'8',followers:'43',following:'6',avg:'1만',max:'5만'}],
    revTag:'수익', revH:'숫자로 보는 지금', revSub:'2026년 5월부터 9월까지의 누적 수익. 소프트웨어는 출시 전이라 아직 0원입니다.',
    revenue:[{label:'애니메이션 수익',amount:'약 2,000만원',note:'2026.05 – 2026.09'},{label:'광고 수익',amount:'약 500만원',note:'2026.05 – 2026.09'},{label:'자체 소프트웨어 수익',amount:'0원',note:'출시 전 · 회원제 준비 중'}],
    procH:'만드는 순서', process:[{n:'01',title:'스토리 잡기',desc:'제품이 풀어주는 문제 하나를 15초 안에 말할 수 있게 다듬습니다.'},{n:'02',title:'스타일 프레임',desc:'컷 3장으로 색·캐릭터·톤을 확정합니다. 여기서 대부분의 수정이 끝납니다.'},{n:'03',title:'애니메이션',desc:'사내 모션 팀이 제작. 인도·미국 시장별로 자막과 문화 코드를 따로 조정합니다.'},{n:'04',title:'배포 & 측정',desc:'광고 집행 후 회원 전환율을 추적해 다음 편에 반영합니다.'}],
    softTag:'소프트웨어', softH:'우리가 직접 만들고, 직접 광고하는 제품', softSub:'전부 회원제로 제공됩니다. 애니메이션은 이 제품들을 알리는 가장 좋은 방법이라서 만듭니다.',
    products:[{name:'Psyche Check',badge:'라이브 데모 ↓',desc:'20문항으로 공감·충동성·냉정함 지표를 그려주는 간단한 성향 테스트. 재미로 시작해서 친구에게 공유하게 됩니다.',chips:['5분 소요','결과 공유 카드','영어 · 힌디어 · 한국어']},{name:'ResumeFix AI',badge:'회원 전용',desc:'이력서를 올리면 직무 설명에 맞춰 문장을 고치고, 인도·미국 채용 시장 기준으로 형식을 맞춰줍니다.',chips:['ATS 형식 검사','문장 단위 수정','미국 · 인도 포맷']}],
    pricingNote:'요금은 아직 공개 전입니다. 얼리 액세스 문의를 남겨주세요.', pricingLink:'문의하기',
    demoTag:'라이브 데모', demoH:'Psyche Check, 지금 5문항만 해보세요', demoName:'Psyche Check · 미니 버전',
    quiz:[{q:'친구가 울고 있을 때 가장 먼저 드는 생각은?',o:['안아준다','이유를 묻는다','기다린다','좀 불편하다']},{q:'규칙을 어기면 이득이 확실할 때, 나는',o:['안 어긴다','고민한다','살짝 어긴다','당연히 어긴다']},{q:'거짓말이 들켰을 때',o:['바로 사과','변명한다','웃어넘긴다','아무렇지 않다']},{q:'남의 성공 소식을 들으면',o:['진심으로 기쁨','축하는 한다','비교한다','별 감정 없다']},{q:'위험한 도전 앞에서 심장은',o:['빨리 뛴다','조금 뛴다','평소와 같다','오히려 차분']}],
    results:[{t:'따뜻한 사람',d:'공감 지표가 높게 나왔습니다. 냉정함은 낮은 편이에요. 전체 20문항 버전에서 더 세밀한 프로필을 볼 수 있습니다.'},{t:'균형형',d:'공감과 냉정함이 비슷한 수준. 상황에 따라 모드를 바꾸는 타입입니다.'},{t:'쿨한 전략가',d:'감정보다 계산이 앞섭니다. 걱정할 정도는 아니지만, 전체 버전으로 확인해 보세요.'},{t:'얼음 같은 침착함',d:'충동성·냉정함 지표가 매우 높습니다. 재미로 보되, 전체 버전에서 세부 항목을 확인해 보세요.'}],
    resultTag:'미니 결과', retry:'다시 하기', fullVersion:'20문항 전체 버전', disclaimer:'오락용 테스트입니다. 임상 진단이 아닙니다.',
    testiH:'회원들이 말하길', testimonials:[{quote:'광고 영상이 너무 웃겨서 들어왔다가 이력서를 다 고치고 나갔어요.',who:'Priya S. · 벵갈루루 · ResumeFix 회원'},{quote:'친구 여섯 명한테 결과 카드를 보냈습니다. 다 “쿨한 전략가”가 나오더라고요.',who:'Marcus T. · 오스틴 · Psyche Check 회원'},{quote:'애니메이션을 만드는 회사가 소프트웨어도 만든다는 게 처음엔 이상했는데, 써보면 이해됩니다.',who:'Anjali R. · 뭄바이'},{quote:'100만뷰가 나오면 1%만 구독해도 회원권이 5000원이면 5천만원의 새로운 자금 흐름이 생기더군요. Paratus Nexus는 신기하게도 광고 효과가 좋은거 같아요',who:'투자자'},{quote:'15초 애니메이션 한 편으로 앱 설치가 3주 만에 4배 늘었습니다. 광고비는 이전 캠페인의 절반이었어요.',who:'Rahul K. · 델리 · 핀테크 앱 마케팅 리드'},{quote:'유료 광고를 돌리기 전에 계정 릴스로 먼저 테스트해준 게 결정적이었어요. 반응 좋은 컷만 골라 집행하니 CPA가 60% 떨어졌습니다.',who:'Emily C. · 시카고 · D2C 뷰티 브랜드'},{quote:'설명 영상 하나가 랜딩페이지 전환율을 2.1%에서 6.8%로 올렸어요. 지금은 인도·미국 버전 둘 다 돌리고 있습니다.',who:'Vikram S. · 벵갈루루 · 교육 SaaS 창업자'}],
    regionTag:'지역', regionH:'두 나라, 한 팀', regions:[{name:'India',time:'IST',desc:'뭄바이 기반 마케팅·CS. 힌디어·영어 애니메이션 현지화.',chips:['뭄바이','힌디어 · 영어']},{name:'USA',time:'EST',desc:'뉴욕 기반 소프트웨어·광고 집행. 미국 채용 포맷 대응.',chips:['뉴욕','영어']}],
    teamH:'팀', team:[{name:'김민지',role:'CEO',edu:'애니메이션 제작 총괄 · 마케팅 리드'},{name:'정현빈',role:'CTO',edu:'컬럼비아 대학교 · 컴퓨터과학 · 수학 학사'},{name:'문준용',role:'PM',edu:'엠브리리들 대학교 · 항공운항학과'},{name:'신영현',role:'Audit · 법률 자문',edu:'감사 및 법률 자문 담당'}],
    faqH:'자주 묻는 질문', faq:[{q:'애니메이션만 외주로 맡길 수 있나요?',a:'가능합니다. 다만 우리 애니메이션은 자사 소프트웨어 마케팅에 최적화된 팀이라, 제품 광고·설명 영상에 특히 강합니다.'},{q:'회원제 요금은 얼마인가요?',a:'아직 공개 전입니다. 문의를 남겨주시면 얼리 액세스 가격을 먼저 안내드립니다.'},{q:'Psyche Check는 진짜 진단인가요?',a:'아닙니다. 오락과 자기 탐색용 성향 테스트이며 임상 도구가 아닙니다.'},{q:'한국에서도 쓸 수 있나요?',a:'소프트웨어는 전 세계에서 접속 가능합니다. 마케팅과 결제는 현재 인도·미국에 맞춰져 있습니다.'}],
    ctaH:'같이 움직여 볼까요?', ctaSub:'얼리 액세스, 애니메이션 제작 문의, 투자 관련 대화 모두 여기로. 이메일만 남겨주세요.', emailPh:'이메일 주소', ctaBtn:'문의 남기기', ctaSent:'받았습니다 ✓',
    footer:'뭄바이 · 뉴욕 · 서울'
  },
  en: {
    navReel:'Reel', navAcct:'Accounts', navRev:'Revenue', navSoft:'Software', navDemo:'Demo', navTeam:'Team', navCta:'Get in touch', lang:'한국어',
    heroTag:'Animation studio × software', h1a:'We make', h1b:'things', h1c:'that move',
    heroSub:'We produce animation for ads, then use that animation to sell software we build ourselves in India and the US. When the makers are the sellers, the story changes.',
    dance:['Too easy~','Warming up, I guess','Ooh, feeling the rhythm','This is the sweet spot','Whoa, speeding up?','Wait, let me breathe…','Can’t see my legs!!','AAAH make it stop!!','This is NOT dancing!!!','...teleporting'],
    heroCta1:'Try the test', heroCta2:'Watch the reel',
    stickerA:'Live in India · USA', stickerB:'Members-only software', stickerC:'Marketed with animation',
    marquee:['Animation','Ad marketing','Psyche Check','ResumeFix AI','Mumbai','New York','Membership','Motion design'],
    stats:[{v:120,suffix:'+',label:'Animations produced'},{v:2,suffix:'',label:'Launch markets (India · USA)'},{v:38,suffix:'K',label:'Software members'},{v:4.8,suffix:'',label:'Avg. member rating / 5',dec:1}],
    reelH:'The reel. Hover to play.', reelSub:'Animation we made to advertise our own software. Planned and produced by the in-house team.',
    reel:[{tag:'AD',title:'Psyche Check launch spot',dur:'0:30'},{tag:'EXPLAINER',title:'ResumeFix in 60 seconds',dur:'1:00'},{tag:'BRAND',title:'Paratus Nexus ident',dur:'0:12'},{tag:'SOCIAL',title:'India Reels series',dur:'0:15'},{tag:'AD',title:'US pre-roll campaign',dur:'0:20'},{tag:'CHARACTER',title:'Mascot “Nexi” sheet',dur:'0:45'}],
    playing:'▶ Playing', hover:'Hover',
    acctTag:'Our animation accounts', acctH:'Posted daily, watched daily', acctSub:'Our own AI animation accounts on Instagram. The views we earn here are the first billboard for our software.',
    avgViews:'Avg. views', maxViews:'Peak views', posts:'posts', followers:'followers', following:'following',
    accounts:[{handle:'superdupercatai',name:'Story.ai',bio:'Freshly squeezed AI comics every day!',posts:'15',followers:'21K',following:'2',avg:'1M',max:'5.5M'},{handle:'ethanxluna',name:'Ethan&Luna',bio:'Artist',posts:'8',followers:'43',following:'6',avg:'10K',max:'50K'}],
    revTag:'Revenue', revH:'Where the numbers stand', revSub:'Cumulative revenue from May through September 2026. Software is pre-launch, so still zero.',
    revenue:[{label:'Animation revenue',amount:'≈ $14,500',note:'May – Sep 2026'},{label:'Ad revenue',amount:'≈ $3,600',note:'May – Sep 2026'},{label:'Own software revenue',amount:'$0',note:'Pre-launch · membership in progress'}],
    procH:'How we make it', process:[{n:'01',title:'Find the story',desc:'One problem the product solves, told in under 15 seconds.'},{n:'02',title:'Style frames',desc:'Three frames lock color, character and tone. Most revisions end here.'},{n:'03',title:'Animate',desc:'In-house motion team. Subtitles and cultural cues tuned separately for India and the US.'},{n:'04',title:'Ship & measure',desc:'Run the ads, track member conversion, feed it into the next spot.'}],
    softTag:'Software', softH:'Products we build and advertise ourselves', softSub:'All members-only. We make animation because it is the best way to get these in front of people.',
    products:[{name:'Psyche Check',badge:'Live demo ↓',desc:'A 20-question personality test that maps empathy, impulsivity and detachment. Starts as fun, ends up shared with friends.',chips:['5 minutes','Shareable result card','English · Hindi · Korean']},{name:'ResumeFix AI',badge:'Members only',desc:'Upload a resume; it rewrites lines against the job description and reformats for Indian and US hiring standards.',chips:['ATS format check','Line-level edits','US · India formats']}],
    pricingNote:'Pricing is not public yet. Ask for early access.', pricingLink:'Get in touch',
    demoTag:'Live demo', demoH:'Psyche Check, five questions right now', demoName:'Psyche Check · mini',
    quiz:[{q:'A friend is crying. Your first instinct?',o:['Hug them','Ask why','Wait','Feel awkward']},{q:'Breaking a rule would clearly pay off. You',o:['Don’t','Hesitate','Bend it','Obviously break it']},{q:'When a lie gets caught, you',o:['Apologize','Explain','Laugh it off','Feel nothing']},{q:'Hearing someone else’s success, you',o:['Feel real joy','Congratulate','Compare','Feel nothing']},{q:'Facing a risky challenge, your heart',o:['Races','Speeds up a bit','Stays the same','Slows down']}],
    results:[{t:'Warm heart',d:'High empathy, low detachment. The full 20-question version gives a finer profile.'},{t:'Balanced',d:'Empathy and detachment about even. You switch modes with the situation.'},{t:'Cool strategist',d:'Calculation before feeling. Nothing to worry about, but try the full version.'},{t:'Ice calm',d:'Very high impulsivity and detachment scores. For fun only, but the full version breaks it down.'}],
    resultTag:'Mini result', retry:'Try again', fullVersion:'Full 20-question version', disclaimer:'For entertainment only. Not a clinical diagnosis.',
    testiH:'Members say', testimonials:[{quote:'The ad was so funny I clicked, and left with a completely rewritten resume.',who:'Priya S. · Bengaluru · ResumeFix member'},{quote:'Sent my result card to six friends. Every one of them got “Cool strategist”.',who:'Marcus T. · Austin · Psyche Check member'},{quote:'An animation studio that ships software sounded odd until I used it.',who:'Anjali R. · Mumbai'},{quote:'At 1M views, if just 1% subscribe at ₩5,000, that is ₩50M of new cash flow. Paratus Nexus ads oddly just work.',who:'Investor'},{quote:'One 15-second animation quadrupled app installs in three weeks, on half the ad budget of our previous campaign.',who:'Rahul K. · Delhi · Fintech app marketing lead'},{quote:'Testing cuts as Reels on their accounts before paid spend was the difference. Running only the winners dropped our CPA 60%.',who:'Emily C. · Chicago · D2C beauty brand'},{quote:'A single explainer took landing-page conversion from 2.1% to 6.8%. We now run both India and US versions.',who:'Vikram S. · Bengaluru · EdTech SaaS founder'}],
    regionTag:'Regions', regionH:'Two countries, one team', regions:[{name:'India',time:'IST',desc:'Mumbai-based marketing and support. Hindi and English localization.',chips:['Mumbai','Hindi · English']},{name:'USA',time:'EST',desc:'New York-based software and ad ops. US hiring formats.',chips:['New York','English']}],
    teamH:'Team', team:[{name:'Minji Kim',role:'CEO',edu:'Head of Animation Production · Marketing Lead'},{name:'Hyunbin Jung',role:'CTO',edu:'Columbia University · B.S. Computer Science & Mathematics'},{name:'Junyong Moon',role:'PM',edu:'Embry-Riddle Aeronautical University · Aeronautical Science'},{name:'Younghyun Shin',role:'Audit · Legal Counsel',edu:'Audit and legal advisory'}],
    faqH:'FAQ', faq:[{q:'Can we hire you just for animation?',a:'Yes. Our team is tuned for marketing our own software, so we are strongest on product ads and explainers.'},{q:'How much is membership?',a:'Not public yet. Leave a note and we will share early-access pricing first.'},{q:'Is Psyche Check a real diagnosis?',a:'No. It is an entertainment and self-reflection test, not a clinical tool.'},{q:'Does it work outside India and the US?',a:'The software is accessible worldwide. Marketing and billing are currently set up for India and the US.'}],
    ctaH:'Shall we move together?', ctaSub:'Early access, animation projects, investor conversations. Just leave an email.', emailPh:'Email address', ctaBtn:'Send', ctaSent:'Got it ✓',
    footer:'Mumbai · New York · Seoul'
  }
};

const PAL = ['#FF5A36','#C6FF3D','#7B5CFF','#37E5FF','#F3F1EA'];
const RAD = ['36% 64% 60% 40%/50% 40% 60% 50%','60% 40% 40% 60%/50% 60% 40% 50%','50%','30%','45% 55% 50% 50%/60% 40% 60% 40%'];
const REEL_DURATION_MS = 2400;      // how long a reel card "plays" on hover
const NEXI_FRAMES = 6;
// [leftX, leftY, rightX, rightY] pupil anchors (% of the art box) per frame
const NEXI_EYES = [[47.4,45.8,60.3,48.6],[40.3,48.5,51.0,43.3],[44.4,40.6,57.3,43.3],[56,42.7,68.8,46.1],[49.1,41.5,61.8,45.3],[48.5,50.8,61.1,49]];

const state = {
  lang: 'en', speed: 4,
  qi: 0, score: 0, done: false,
  faqOpen: 0, counted: false, sent: false,
  frame: 0, pupil: {x:0, y:0}
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t = () => I18N[state.lang];

/* ---------- derived bits ---------- */
function bubbleStyle(s, lang) {
  const p = (s - 1) / 9;
  const font = lang === 'ko' ? "'Gaegu','Bangers',cursive" : "'Bangers','Gaegu',cursive";
  const size = (lang === 'ko' ? 18 : 20) + p * (lang === 'ko' ? 10 : 12) + 'px';
  const bg = s <= 3 ? '#F3F1EA' : s <= 6 ? '#FFE8A3' : s <= 8 ? '#FF9A1F' : '#FF5A36';
  const radius = s <= 6 ? '22px' : s <= 8 ? '22px 6px 22px 6px' : '4px 18px 4px 18px';
  const border = s >= 7 ? '3px solid #0B1026' : '0 solid transparent';
  const anim = s >= 9 ? 'shake .18s linear infinite' : s >= 7 ? 'shake .4s linear infinite' : 'none';
  return {bg, font, size, radius, border, anim, ls: s >= 9 ? '.02em' : '0'};
}
const initials = name => /[가-힣]/.test(name) ? name.slice(1) : name.split(' ').map(w => w[0]).join('').slice(0, 2);
const resultFor = () => t().results[Math.min(3, Math.floor(state.score / (t().quiz.length * 3 + 1) * 4))];

/* ---------- templates ---------- */
function bubbleHTML() {
  const b = bubbleStyle(state.speed, state.lang);
  return `<div class="bubble-wrap" id="bubble">
    <div class="bubble" style="background:${b.bg};font-family:${b.font};font-size:${b.size};border-radius:${b.radius};border:${b.border};animation:${b.anim};letter-spacing:${b.ls}">
      ${esc(t().dance[state.speed - 1])}
      <span class="tail1" style="background:${b.bg}"></span><span class="tail2" style="background:${b.bg}"></span>
    </div></div>`;
}

function quizHTML() {
  const L = t(), quiz = L.quiz;
  const step = `${Math.min(state.qi + 1, quiz.length)} / ${quiz.length}`;
  const progress = `${(state.done ? quiz.length : state.qi) / quiz.length * 100}%`;
  let body;
  if (!state.done) {
    const cur = quiz[state.qi];
    body = `<div class="quiz-q" key="${state.qi}">
      <div class="quiz-text">${esc(cur.q)}</div>
      <div class="quiz-opts">${cur.o.map((o, i) => `<button class="quiz-opt" data-pick="${i}">${esc(o)}</button>`).join('')}</div>
    </div>`;
  } else {
    const r = resultFor();
    body = `<div class="quiz-result">
      <div class="result-tag">${esc(L.resultTag)}</div>
      <div class="result-title">${esc(r.t)}</div>
      <div class="result-desc">${esc(r.d)}</div>
      <div class="result-ctas">
        <button class="btn-retry" data-reset>${esc(L.retry)}</button>
        <a href="#contact" class="pill btn-full">${esc(L.fullVersion)} →</a>
      </div>
    </div>`;
  }
  return `<div class="quiz-meta"><span>${esc(L.demoName)}</span><span>${step}</span></div>
    <div class="quiz-track"><div class="quiz-bar" style="width:${progress}"></div></div>
    ${body}
    <div class="quiz-disc">${esc(L.disclaimer)}</div>`;
}

function pageHTML() {
  const L = t();
  const marquee = [...L.marquee, ...L.marquee];
  return `
<nav class="nav">
  <a class="brand" href="#top"><span class="brand-mark"></span>Paratus Nexus</a>
  <div class="nav-links">
    <a href="#reel">${esc(L.navReel)}</a><a href="#accounts">${esc(L.navAcct)}</a><a href="#revenue">${esc(L.navRev)}</a><a href="#software">${esc(L.navSoft)}</a><a href="#demo">${esc(L.navDemo)}</a><a href="#team">${esc(L.navTeam)}</a>
  </div>
  <div class="nav-actions">
    <button class="btn-lang" id="langBtn" aria-label="Switch language">${esc(L.lang)}</button>
    <a href="#contact" class="pill btn-nav-cta">${esc(L.navCta)}</a>
  </div>
</nav>

<section class="hero" id="top">
  <div>
    <div class="hero-tag"><i></i>${esc(L.heroTag)}</div>
    <h1 class="h1">${esc(L.h1a)} <span class="tilt">${esc(L.h1b)}</span><br>${esc(L.h1c)}<span class="caret"></span></h1>
    <p class="hero-sub">${esc(L.heroSub)}</p>
    <div class="hero-ctas">
      <a href="#demo" class="pill btn-primary">${esc(L.heroCta1)} →</a>
      <a href="#reel" class="pill btn-ghost">${esc(L.heroCta2)}</a>
    </div>
    <label class="speed">
      <span class="speed-label">Dance speeeeed!</span>
      <input type="range" min="1" max="10" step="1" value="${state.speed}" id="speed" aria-label="Dance speed">
      <span class="speed-val" id="speedVal">${state.speed}x</span>
    </label>
  </div>
  <div class="hero-art" id="heroArt">
    <div class="hero-halo"></div>
    <div class="nexi-wrap"><div class="nexi" id="nexi">
      ${Array.from({length: NEXI_FRAMES}, (_, i) => `<img src="assets/nexi-${i + 1}.png" alt="${i === 0 ? 'Nexi, the Paratus Nexus mascot' : ''}" class="${i === state.frame ? 'on' : ''}" draggable="false">`).join('')}
      <span class="pupil" id="pupilL"></span><span class="pupil" id="pupilR"></span>
    </div></div>
    <div class="sticker sticker-a" data-parallax="0.03" data-rot="9">${esc(L.stickerA)}</div>
    <div class="sticker sticker-b" data-parallax="-0.04" data-rot="-7">${esc(L.stickerB)}</div>
    <div class="sticker sticker-c" data-parallax="0.02" data-rot="4">${esc(L.stickerC)}</div>
    <div class="dashed-ring"></div>
    ${bubbleHTML()}
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track" id="marquee">${marquee.map(m => `<span>${esc(m)} <b>✦</b></span>`).join('')}</div>
</div>

<section class="stats" id="stats">
  ${L.stats.map((s, i) => `<div class="stat">
    <div class="stat-v"><span data-count="${i}">${state.counted ? (s.dec ? s.v.toFixed(1) : s.v) : 0}</span><small>${esc(s.suffix)}</small></div>
    <div class="stat-l">${esc(s.label)}</div>
  </div>`).join('')}
</section>

<section id="reel" class="reel-sec">
  <div class="sec-head"><h2 class="h2">${esc(L.reelH)}</h2><p>${esc(L.reelSub)}</p></div>
  <div class="reel-grid">
    ${L.reel.map((r, i) => `<div class="reel" data-reel="${i}" style="--rot:${i * 12}deg;--rot-on:${180 + i * 20}deg;--rad:${RAD[i % RAD.length]};--rad-on:${RAD[(i + 2) % RAD.length]}">
      <div class="reel-bg"></div>
      <div class="reel-blob" style="background:${PAL[i % PAL.length]}"></div>
      <div class="reel-tags"><span class="reel-tag">${esc(r.tag)}</span><span class="reel-play" data-play>${esc(L.hover)}</span></div>
      <div class="reel-foot"><div class="reel-title">${esc(r.title)}</div><div class="reel-dur">${esc(r.dur)}</div></div>
      <div class="reel-bar"></div>
    </div>`).join('')}
  </div>
</section>

<section id="accounts" class="section">
  <div class="sec-head">
    <div><div class="eyebrow">${esc(L.acctTag)}</div><h2 class="h2">${esc(L.acctH)}</h2></div>
    <p>${esc(L.acctSub)}</p>
  </div>
  <div class="acct-grid">
    ${L.accounts.map((a, i) => `<a class="acct" href="https://www.instagram.com/${esc(a.handle)}/" target="_blank" rel="noopener" style="background:${i ? '#F3F1EA' : '#FFD9B0'};--rot:${i ? 1.2 : -1.2}deg">
      <div class="acct-top">
        <div class="acct-avatar" role="img" aria-label="${esc(a.handle)}" style="background-image:url(assets/${esc(a.handle)}.png);border-color:${i ? '#F4B8C0' : '#FF5A36'}"></div>
        <div style="min-width:0">
          <div class="acct-handle">@${esc(a.handle)}</div>
          <div class="acct-name">${esc(a.name)}</div>
          <div class="acct-bio">${esc(a.bio)}</div>
        </div>
      </div>
      <div class="acct-metrics">
        <div class="metric"><div class="metric-l">${esc(L.avgViews)}</div><div class="metric-v">${esc(a.avg)}</div></div>
        <div class="metric"><div class="metric-l">${esc(L.maxViews)}</div><div class="metric-v">${esc(a.max)}</div></div>
      </div>
      <div class="acct-foot">
        <span><b>${esc(a.posts)}</b> ${esc(L.posts)}</span><span><b>${esc(a.followers)}</b> ${esc(L.followers)}</span><span><b>${esc(a.following)}</b> ${esc(L.following)}</span>
        <span class="ig">Instagram ↗</span>
      </div>
    </a>`).join('')}
  </div>
</section>

<section id="revenue" class="section">
  <div class="sec-head">
    <div><div class="eyebrow">${esc(L.revTag)}</div><h2 class="h2">${esc(L.revH)}</h2></div>
    <p>${esc(L.revSub)}</p>
  </div>
  <div class="rev-grid">
    ${L.revenue.map((r, i) => `<div class="rev" style="background:${['#FF5A36','#F3F1EA','rgba(26,33,80,.35)'][i]};color:${i === 2 ? '#F3F1EA' : '#0B1026'};border-color:${i === 2 ? '#2A3157' : 'transparent'};--rot:${[-1.2, 1, -0.8][i]}deg">
      <div class="rev-l">${esc(r.label)}</div>
      <div><div class="rev-v">${esc(r.amount)}</div><div class="rev-n">${esc(r.note)}</div></div>
    </div>`).join('')}
  </div>
</section>

<section class="section">
  <h2 class="h2" style="margin-bottom:48px">${esc(L.procH)}</h2>
  <div class="proc-grid">
    ${L.process.map((p, i) => `<div class="proc" style="background:${['#F3F1EA','#FF5A36','#7B5CFF','#C6FF3D'][i]};color:${i === 2 ? '#F3F1EA' : '#0B1026'};--rot:${[-2, 1.5, -1, 2][i]}deg">
      <div class="proc-n">${esc(p.n)}</div>
      <div><div class="proc-t">${esc(p.title)}</div><div class="proc-d">${esc(p.desc)}</div></div>
    </div>`).join('')}
  </div>
</section>

<section id="software" class="section">
  <div class="soft">
    <div class="soft-sticky">
      <div class="eyebrow">${esc(L.softTag)}</div>
      <h2 class="h2">${esc(L.softH)}</h2>
      <p>${esc(L.softSub)}</p>
    </div>
    <div class="soft-list">
      ${L.products.map((p, i) => `<div class="product">
        <div class="product-glow" style="background:${i ? '#7B5CFF' : '#FF5A36'}"></div>
        <div class="product-head"><div class="product-name">${esc(p.name)}</div><span class="badge" style="background:${i ? '#C6FF3D' : '#FF5A36'}">${esc(p.badge)}</span></div>
        <p>${esc(p.desc)}</p>
        <div class="chips">${p.chips.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div>
      </div>`).join('')}
      <div class="pricing-note">${esc(L.pricingNote)} <a href="#contact">${esc(L.pricingLink)} →</a></div>
    </div>
  </div>
</section>

<section id="demo" class="section">
  <div class="demo-head"><div class="eyebrow">${esc(L.demoTag)}</div><h2 class="h2">${esc(L.demoH)}</h2></div>
  <div class="quiz" id="quiz">${quizHTML()}</div>
</section>

<section class="section">
  <h2 class="h2" style="margin-bottom:40px">${esc(L.testiH)}</h2>
  <div class="testi-grid">
    ${L.testimonials.map((q, i) => `<figure class="testi" style="background:${['#1A2150','#F3F1EA','#7B5CFF','#FF5A36','#C6FF3D','#1A2150','#F3F1EA'][i]};color:${[0, 2, 5].includes(i) ? '#F3F1EA' : '#0B1026'};--rot:${[-1.5, 1, -1, 1.5, -1, 1.2, -1.5][i]}deg">
      <blockquote>“${esc(q.quote)}”</blockquote><figcaption>${esc(q.who)}</figcaption>
    </figure>`).join('')}
  </div>
</section>

<section class="section">
  <div class="region-grid">
    <div class="region-intro"><div class="eyebrow">${esc(L.regionTag)}</div><h2 class="region-h">${esc(L.regionH)}</h2></div>
    ${L.regions.map(r => `<div class="region">
      <div class="region-top"><div class="region-name">${esc(r.name)}</div><div class="region-tz">${esc(r.time)}</div></div>
      <div><div class="region-d">${esc(r.desc)}</div><div class="chips">${r.chips.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div></div>
    </div>`).join('')}
  </div>
</section>

<section id="team" class="section">
  <h2 class="h2" style="margin-bottom:40px">${esc(L.teamH)}</h2>
  <div class="team-grid">
    ${L.team.map((m, i) => `<div class="member">
      <div class="member-av" style="background:${PAL[i]};border-radius:${RAD[i]}">${esc(initials(m.name))}</div>
      <div class="member-n">${esc(m.name)}</div><div class="member-r">${esc(m.role)}</div><div class="member-e">${esc(m.edu)}</div>
    </div>`).join('')}
  </div>
</section>

<section class="section faq">
  <h2 class="h2">${esc(L.faqH)}</h2>
  <div class="faq-list">
    ${L.faq.map((f, i) => `<div class="faq-item${state.faqOpen === i ? ' open' : ''}" data-faq="${i}">
      <button class="faq-q" aria-expanded="${state.faqOpen === i}"><span>${esc(f.q)}</span><i>+</i></button>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </div>`).join('')}
  </div>
</section>

<section id="contact" class="contact-sec">
  <div class="cta">
    <div class="cta-blob"></div><div class="cta-ring"></div>
    <h2 class="cta-h">${esc(L.ctaH)}</h2>
    <p>${esc(L.ctaSub)}</p>
    <form id="contactForm" novalidate>
      <input type="email" name="email" placeholder="${esc(L.emailPh)}" required aria-label="${esc(L.emailPh)}">
      <button type="submit" id="ctaBtn">${esc(state.sent ? L.ctaSent : L.ctaBtn)}</button>
    </form>
  </div>
  <footer class="footer"><span>© 2026 Paratus Nexus</span><span>${esc(L.footer)}</span></footer>
</section>`;
}

/* ---------- render + bindings ---------- */
const app = $('#app');

function render() {
  document.documentElement.lang = state.lang;
  document.documentElement.dataset.lang = state.lang;
  app.innerHTML = pageHTML();
  applySpeed();
  updatePupils();
  bind();
}

function bind() {
  $('#langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'ko' ? 'en' : 'ko';
    const y = scrollY; render(); scrollTo(0, y);
  });

  const speed = $('#speed');
  const onSpeed = () => { state.speed = +speed.value; applySpeed(); };
  speed.addEventListener('input', onSpeed);
  speed.addEventListener('change', onSpeed);

  // reel: hover "plays" for REEL_DURATION_MS then resets
  let reelTimer;
  $$('.reel').forEach(el => {
    const play = $('[data-play]', el);
    const on = () => {
      $$('.reel.on').forEach(o => o !== el && off(o));
      el.classList.add('on'); play.textContent = t().playing;
      clearTimeout(reelTimer); reelTimer = setTimeout(() => off(el), REEL_DURATION_MS);
    };
    const off = o => { o.classList.remove('on'); $('[data-play]', o).textContent = t().hover; };
    el.addEventListener('mouseenter', on);
    el.addEventListener('mouseleave', () => off(el));
    el.addEventListener('click', on);          // touch fallback
  });

  bindQuiz();

  $$('.faq-item').forEach(item => {
    $('.faq-q', item).addEventListener('click', () => {
      const i = +item.dataset.faq;
      state.faqOpen = state.faqOpen === i ? -1 : i;
      $$('.faq-item').forEach(o => {
        const open = +o.dataset.faq === state.faqOpen;
        o.classList.toggle('open', open);
        $('.faq-q', o).setAttribute('aria-expanded', open);
      });
    });
  });

  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('input', e.currentTarget);
    if (!input.value || !input.checkValidity()) { input.focus(); return; }
    state.sent = true;
    $('#ctaBtn').textContent = t().ctaSent;
  });
  $('#contactForm input').addEventListener('input', () => {
    if (state.sent) { state.sent = false; $('#ctaBtn').textContent = t().ctaBtn; }
  });
}

function bindQuiz() {
  const quiz = $('#quiz');
  quiz.innerHTML = quizHTML();
  $$('[data-pick]', quiz).forEach(b => b.addEventListener('click', () => {
    state.score += +b.dataset.pick;
    if (state.qi + 1 >= t().quiz.length) state.done = true; else state.qi++;
    bindQuiz();
  }));
  const reset = $('[data-reset]', quiz);
  if (reset) reset.addEventListener('click', () => { state.qi = 0; state.score = 0; state.done = false; bindQuiz(); });
}

/* ---------- dance speed → nexi frame rate, marquee, bubble ---------- */
let frameTimer, frameMs;
function applySpeed() {
  $('#speedVal').textContent = state.speed + 'x';
  $('#marquee').style.animationDuration = (40 / state.speed).toFixed(1) + 's';
  const old = $('#bubble');
  if (old) old.outerHTML = bubbleHTML();   // re-create so the pop animation replays

  const ms = Math.round(1000 / (state.speed * 1.4 + 0.6));
  if (frameMs !== ms) {
    clearInterval(frameTimer); frameMs = ms;
    frameTimer = setInterval(() => {
      if (document.hidden) return;
      state.frame = (state.frame + 1) % NEXI_FRAMES;
      const imgs = $$('#nexi img');
      imgs.forEach((im, i) => im.classList.toggle('on', i === state.frame));
      updatePupils();
    }, ms);
  }
}

function updatePupils() {
  const [lx, ly, rx, ry] = NEXI_EYES[state.frame];
  const {x, y} = state.pupil;
  const l = $('#pupilL'), r = $('#pupilR');
  if (!l || !r) return;
  l.style.left = lx + '%'; l.style.top = ly + '%';
  r.style.left = rx + '%'; r.style.top = ry + '%';
  const tf = `translate(-50%,-50%) translate(${x}%,${y}%)`;
  l.style.transform = tf; r.style.transform = tf;
}

/* ---------- cursor, eye tracking, sticker parallax ---------- */
const dot = $('#cursorDot'), ring = $('#cursorRing');
let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx - 7}px,${my - 7}px)`;
  ring.classList.toggle('big', !!(e.target.closest && e.target.closest('a,button,input')));

  const art = $('#heroArt');
  if (art) {
    const rc = art.getBoundingClientRect();
    const cx = rc.left + rc.width * .43, cy = rc.top + rc.height * .35;
    const a = Math.atan2(my - cy, mx - cx);
    const np = {x: Math.cos(a) * 40, y: Math.sin(a) * 70};
    if (Math.abs(np.x - state.pupil.x) > 2 || Math.abs(np.y - state.pupil.y) > 2) { state.pupil = np; updatePupils(); }
  }
  if (matchMedia('(max-width:700px)').matches) return;
  $$('[data-parallax]').forEach(el => {
    const k = +el.dataset.parallax;
    el.style.transform = `translate(${(mx - innerWidth / 2) * k}px,${(my - innerHeight / 2) * k}px) rotate(${el.dataset.rot}deg)`;
  });
});

(function ringLoop() {
  rx += (mx - rx) * .18; ry += (my - ry) * .18;
  const s = ring.classList.contains('big') ? 35 : 22;
  ring.style.transform = `translate(${rx - s}px,${ry - s}px)`;
  requestAnimationFrame(ringLoop);
})();

/* ---------- scroll: hero parallax + stats count-up ---------- */
function startCount() {
  state.counted = true;
  const stats = t().stats, t0 = performance.now(), D = 1600;
  const step = now => {
    const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3);
    $$('[data-count]').forEach(el => {
      const s = stats[+el.dataset.count], v = s.v * e;
      el.textContent = s.dec ? v.toFixed(1) : Math.round(v);
    });
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function onScroll() {
  const y = scrollY;
  const art = $('#heroArt');
  // parallax only on wide screens — on phones it drags the character over the next section
  if (art) art.style.transform = matchMedia('(max-width:700px)').matches ? '' : `translateY(${y * .25}px) rotate(${y * .02}deg)`;
  const st = $('#stats');
  if (st && !state.counted && st.getBoundingClientRect().top < innerHeight * .8) startCount();
}
addEventListener('scroll', onScroll, {passive: true});

/* ---------- boot ---------- */
render();
onScroll();
