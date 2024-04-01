// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'GH1014', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '임베디드 자유공모',
          description:
            '임베디드 소프트웨어 경진대회에서 최우수상(장관상)을 수상한 프로젝트입니다.  전기차 충전소 이용에 주요 불편사항을 해결하기 위해 제작되었습니다.  (클릭 시 자세한 내용을 볼 수 있습니다.) ',
          imageUrl:
            'https://i.imgur.com/m70L2xM.png',
          link: 'https://drive.google.com/file/d/1ojFIXHWHfNID4Vu90l6iXOVZxM6sOPDw/view?usp=sharing',
        },
        {
          title: '밀알두레',
          description:
            '공주대학교 연구동아리 "밀알두레"에서 제작된 프로젝트 입니다.  임베디드 장치와 안드로이드를 활용해 도난 방지 시스템을 제작하였습니다.  (클릭 시 자세한 내용을 볼 수 있습니다.)',
          imageUrl:
            'https://i.imgur.com/Vu6hdhD.png',
          link: 'https://drive.google.com/file/d/1vPd2_ymFclL5OR_p2DG9NGO6rqNb8ih3/view?usp=sharing',
        },
      ],
    },

  },
  seo: {
    title: 'Portfolio of Ryu Gihyeon',
    description: '',
    imageURL: '',
  },
  social: {
    phone: '010-5430-5980',
    email: 'dbrlgus8@naver.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C++',
    'Kotlin',
    'Android studio',
    'Unity',
    'Mysql ',
    'Firebase ',
    'Php ',
    'HTML ',
  ],

  certifications: [
    {
      name: '임베디드 소프트웨어 경진대회',
      body: '자유공모 최우수상(장관상) 수상',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],

  educations: [
    {
      institution: '공주대학교 소프트웨어 공학 전공',
      degree: '학사 졸업',
      from: '2017',
      to: '2023',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
