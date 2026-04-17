/**
 * Clash 配置文檔覆寫（最終版）
 */
function main(config) {
  // 鏈式代理
  // // ====== 0) 確保 proxies 是陣列 ======
  // if (!Array.isArray(config.proxies)) config.proxies = [];

  // // ====== 1) 外加一個新的 socks5 proxy ======
  // const socks5Name = "鏈式落地"; // 顯示在面板中的名字
  // const dialerGroupName = "全球前置";
  // const socks5Proxy = {
  //   name: socks5Name,
  //   type: "socks5",
  //   server: "95.134.78.64",     // socks5 server
  //   port: 7778,              // socks5 port
  //   username: "4toab0jlubla2d9", // username
  //   password: "topazp",        // password
  //   udp: true,                // udp
  //   "dialer-proxy": dialerGroupName
  // };

  // // 防止重複添加
  // const exists = config.proxies.some(p => p && p.name === socks5Name);
  // if (!exists) config.proxies.push(socks5Proxy);

  const HK = "香港特別行政區";
  const MO = "澳門特別行政區";
  const TW = "中華民國臺灣地區";
  const SG = "新加坡共和國";
  const JP = "日本國";
  const US = "美利堅合衆國";
  const KR = "大韓民國";
  const SELECT = "手動切換";
  const AUTO = "自動切換";
  const LINK = "鏈式代理";
  const PROXY_LIST = [
    HK,
    MO,
    TW,
    SG,
    JP,
    US,
    KR,
    SELECT,
    AUTO,
    "DIRECT",
    // LINK
  ];
  const CHATGPT = "OpenAI ChatGPT";
  const CLAUDE = "Anthropic Claude";
  const GEMINI = "Google Gemini";
  const GOOGLE = "Google";
  const MICROSOFT = "Microsoft";
  const APPLE = "Apple";
  const CHINAMEDIA = "Domestic Media";
  const GLOBALMEDIA = "Global Media";
  const BILIBILI = "Bilibili";
  const NETFLIX = "Netflix";
  const ONEDRIVE = "OneDrive";
  const GAME = "Game";
  const APPLE_MAIL = "Mail";
  const AD_BLOCK = "Ad Block";
  const PURE = "Pure";
  const FINAL = "Final";

  // 1. 宣告策略組 (Proxy Groups)
  const proxyGroups = [
    // 國家和地區
    {
      name: HK,
      icon: "https://picnornal.kynix.tw/Hong_Kong.png",
      "include-all": true,
      filter: "(?i)(?=.*主要)(?=.*(香港|港|HK|HKG|Hong[ -]?Kong)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: MO,
      icon: "https://picnornal.kynix.tw/Macao.png",
      "include-all": true,
      filter: "(?i)(?=.*主要)(?=.*(澳門|澳门|MO|MAO|Macao|Macau)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: TW,
      icon: "https://picnornal.kynix.tw/Taiwan.png",
      "include-all": true,
      filter:
        "(?i)(?=.*主要)(?=.*(台湾|臺灣|台灣|TW|TWN|Taiwan|台北|臺北|Taipei|新北|New Taipei|桃园|桃園|Taoyuan|台中|臺中|Taichung|台南|臺南|Tainan|高雄|Kaohsiung|基隆|Keelung|新竹|Hsinchu|嘉义|嘉義|Chiayi|宜兰|宜蘭|Yilan|新竹县|新竹縣|苗栗|Miaoli|彰化|Changhua|南投|Nantou|云林|雲林|Yunlin|嘉义县|嘉義縣|屏东|屏東|Pingtung|台东|臺東|Taitung|花莲|花蓮|Hualien|澎湖|Penghu|金门|金門|Kinmen|连江|連江|Lienchiang)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: JP,
      icon: "https://picnornal.kynix.tw/Japan.png",
      "include-all": true,
      filter: "(?i)(?=.*主要)(?=.*(日本|Japan|JP|JPN)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: US,
      icon: "https://picnornal.kynix.tw/United_States.png",
      "include-all": true,
      filter:
        "(?i)(?=.*主要)(?=.*(美国|美國|USA|United States|United States of America|(?<![A-Z])US(?![A-Z]))).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: SG,
      icon: "https://picnornal.kynix.tw/Singapore.png",
      "include-all": true,
      filter: "(?i)(?=.*主要)(?=.*(新加坡|Singapore|SG|SGP|狮城|獅城)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: KR,
      icon: "https://picnornal.kynix.tw/Korea.png",
      "include-all": true,
      filter:
        "(?i)(?=.*主要)(?=.*(韩国|韓國|South Korea|Republic of Korea|ROK|\bKR\b|KOR)).*",
      type: "url-test",
      interval: 300,
      tolerance: 50,
    },
    {
      name: SELECT,
      icon: "https://picnornal.kynix.tw/Available.png",
      "include-all": true,
      type: "select",
    },
    {
      name: AUTO,
      icon: "https://picnornal.kynix.tw/Auto.png",
      type: "url-test",
      "include-all": true,
      interval: 300,
      tolerance: 50,
    },
    // {
    //   "name": dialerGroupName,
    //   "icon": "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png",
    //   "type": "url-test",
    //   "include-all": true,
    //   // 只挑常见机场节点关键字，避免把 My-SOCKS5 吸进来
    //   "filter": "(?i)(港|HK|Hong Kong|HongKong|日本|JP|Japan|美|US|United States|台|TW|Taiwan|新加坡|SG|Singapore|韩|KR|Korea)",
    //   "interval": 300,
    //   "tolerance": 50
    // },
    // {
    //   "name": LINK,
    //   "icon": "https://testingcf.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/LinkCube.png",
    //   "type": "select",
    //   "proxies": [
    //     socks5Name,
    //     "DIRECT"
    //   ]
    // },

    // AI 服务
    {
      name: CHATGPT,
      icon: "https://picnornal.kynix.tw/ChatGPT.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: CLAUDE,
      icon: "https://picnornal.kynix.tw/Claude.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: GEMINI,
      icon: "https://picnornal.kynix.tw/Gemini.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    // 御三家
    {
      name: GOOGLE,
      icon: "https://picnornal.kynix.tw/Google_Search.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: MICROSOFT,
      icon: "https://picnornal.kynix.tw/Microsoft.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: APPLE,
      icon: "https://picnornal.kynix.tw/Apple.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    // 內外媒體
    {
      name: CHINAMEDIA,
      icon: "https://picnornal.kynix.tw/DomesticMedia.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: GLOBALMEDIA,
      icon: "https://picnornal.kynix.tw/ForeignMedia.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    // 常用服務
    {
      name: BILIBILI,
      icon: "https://picnornal.kynix.tw/Bilibili.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: NETFLIX,
      icon: "https://picnornal.kynix.tw/Netflix.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: APPLE_MAIL,
      icon: "https://picnornal.kynix.tw/Mail.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: ONEDRIVE,
      icon: "https://picnornal.kynix.tw/OneDrive.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: GAME,
      icon: "https://picnornal.kynix.tw/Game.png",
      type: "select",
      proxies: PROXY_LIST,
    },
    {
      name: AD_BLOCK,
      icon: "https://picnornal.kynix.tw/AdBlack.png",
      type: "select",
      proxies: ["REJECT", "DIRECT"],
    },
    {
      name: PURE,
      icon: "https://picnornal.kynix.tw/Hijacking.png",
      type: "select",
      proxies: ["REJECT", "DIRECT"],
    },
    {
      name: FINAL,
      icon: "https://picnornal.kynix.tw/Final.png",
      type: "select",
      proxies: PROXY_LIST,
    },
  ];

  // 2. 定义规则集源 (Rule Providers)
  const ruleProviders = {
    LocalAreaNetwork: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/LocalAreaNetwork.list",
      path: "./ruleset/LocalAreaNetwork.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    UnBan: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/UnBan.list",
      path: "./ruleset/UnBan.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    BanAD: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/BanAD.list",
      path: "./ruleset/BanAD.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    BanProgramAD: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/BanProgramAD.list",
      path: "./ruleset/BanProgramAD.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    GoogleFCM: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/GoogleFCM.list",
      path: "./ruleset/GoogleFCM.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    GoogleCN: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/GoogleCN.list",
      path: "./ruleset/GoogleCN.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Google: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Google.list",
      path: "./ruleset/Google.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    SteamCN: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/SteamCN.list",
      path: "./ruleset/SteamCN.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    OneDrive: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/OneDrive.list",
      path: "./ruleset/OneDrive.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Microsoft: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Microsoft.list",
      path: "./ruleset/Microsoft.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Apple: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Apple.list",
      path: "./ruleset/Apple.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Telegram: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Telegram.list",
      path: "./ruleset/Telegram.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    OpenAI: {
      url: "https://raw.githubusercontent.com/KynixInHK/rule-list/refs/heads/main/OpenAI.list",
      path: "./ruleset/OpenAI.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Anthropic: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Anthropic.list",
      path: "./ruleset/Anthropic.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Gemini: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Gemini.list",
      path: "./ruleset/Gemini.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    NetEaseMusic: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/NetEaseMusic.list",
      path: "./ruleset/NetEaseMusic.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Epic: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Epic.list",
      path: "./ruleset/Epic.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Origin: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Origin.list",
      path: "./ruleset/Origin.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Sony: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Sony.list",
      path: "./ruleset/Sony.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Steam: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Steam.list",
      path: "./ruleset/Steam.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Nintendo: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Nintendo.list",
      path: "./ruleset/Nintendo.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    YouTube: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/YouTube.list",
      path: "./ruleset/YouTube.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Mail: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Mail.list",
      path: "./ruleset/Mail.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Netflix: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Netflix.list",
      path: "./ruleset/Netflix.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Bahamut: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Bahamut.list",
      path: "./ruleset/Bahamut.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    BilibiliHMT: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/BilibiliHMT.list",
      path: "./ruleset/BilibiliHMT.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Bilibili: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Bilibili.list",
      path: "./ruleset/Bilibili.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    ChinaMedia: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/ChinaMedia.list",
      path: "./ruleset/ChinaMedia.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    ProxyMedia: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/ProxyMedia.list",
      path: "./ruleset/ProxyMedia.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    ProxyGFWlist: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/ProxyGFWlist.list",
      path: "./ruleset/ProxyGFWlist.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    ChinaDomain: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/ChinaDomain.list",
      path: "./ruleset/ChinaDomain.list",
      behavior: "domain",
      interval: 86400,
      format: "text",
      type: "http",
    },
    ChinaCompanyIp: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/ChinaCompanyIp.list",
      path: "./ruleset/ChinaCompanyIp.list",
      behavior: "ipcidr",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Download: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/Download.list",
      path: "./ruleset/Download.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Private: {
      url: "https://raw.githubusercontent.com/KynixInHK/subscription/refs/heads/main/private.list",
      path: "./ruleset/Private.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
  };

  // 3. 定义分流规则 (Rules)
  const rules = [
    "RULE-SET,LocalAreaNetwork,DIRECT",
    "RULE-SET,UnBan,DIRECT",
    `RULE-SET,BanAD,${AD_BLOCK}`,
    `RULE-SET,BanProgramAD,${PURE}`,
    `RULE-SET,GoogleFCM,${GOOGLE}`,
    `RULE-SET,Google,${GOOGLE}`,
    "RULE-SET,GoogleCN,DIRECT",
    "RULE-SET,SteamCN,DIRECT",
    `RULE-SET,OneDrive,${ONEDRIVE}`,
    `RULE-SET,Microsoft,${MICROSOFT}`,
    `RULE-SET,Apple,${APPLE}`,
    `RULE-SET,Mail,${APPLE_MAIL}`,
    `RULE-SET,Telegram,${FINAL}`,
    `RULE-SET,OpenAI,${CHATGPT}`,
    `RULE-SET,Anthropic,${CLAUDE}`,
    `RULE-SET,Gemini,${GEMINI}`,
    `RULE-SET,Epic,${GAME}`,
    `RULE-SET,Origin,${GAME}`,
    `RULE-SET,Sony,${GAME}`,
    `RULE-SET,Steam,${GAME}`,
    `RULE-SET,Nintendo,${GAME}`,
    `RULE-SET,YouTube,${GOOGLE}`,
    `RULE-SET,Netflix,${NETFLIX}`,
    `RULE-SET,Bahamut,${GAME}`,
    `RULE-SET,BilibiliHMT,${BILIBILI}`,
    `RULE-SET,Bilibili,${BILIBILI}`,
    `RULE-SET,ChinaMedia,${CHINAMEDIA}`,
    `RULE-SET,ProxyMedia,${GLOBALMEDIA}`,
    `RULE-SET,ProxyGFWlist,${FINAL}`,
    "RULE-SET,ChinaDomain,DIRECT",
    "RULE-SET,ChinaCompanyIp,DIRECT",
    "RULE-SET,Download,DIRECT",
    "RULE-SET,NetEaseMusic,DIRECT",
    "RULE-SET,Private,DIRECT",
    "GEOIP,CN,DIRECT",
    `MATCH,${FINAL}`,
  ];

  // 4. 执行覆写操作
  // 直接替换掉原本的 proxy-groups, rule-providers 和 rules
  // 注意：原配置中的 proxies 节点列表会被保留并被 filter 引用
  config["proxy-groups"] = proxyGroups;
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  return config;
}
