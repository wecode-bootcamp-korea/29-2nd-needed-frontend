export const SIDEBAR_INSIDE = [
  {
    id: 0,
    title: '직군전체',
    url: '/recruitments',
  },
  {
    id: 1,
    title: '개발',
    url: '/recruitments/programing',
    subNav: [
      {
        title: '프론트엔드',
        url: '/recruitments/programing/frontend',
      },
      {
        title: '백엔드',
        url: '/recruitments/programing/backend',
      },
    ],
  },
  {
    id: 2,
    title: '디자인',
    url: '/recruitments/design',
    subNav: [
      {
        title: 'UX/UI 디자인',
        url: '/recruitments/design/uxui',
      },
      {
        title: '브랜딩',
        url: '/recruitments/design/branding',
      },
    ],
  },
  {
    id: 3,
    title: '교육',
    url: '/recruitments/education',
    subNav: [
      {
        title: '외국어교육',
        url: '/recruitments/education/foreignlanguage',
      },
      {
        title: '교육 기획',
        url: '/recruitments/education/educationplanner',
      },
    ],
  },
  {
    id: 4,
    title: '금융',
    url: '/recruitments/finance',
    subNav: [
      {
        title: '재무회계담당자',
        url: '/recruitments/finance/nancialaccounting',
      },
      {
        title: '자산관리사',
        url: '/recruitments/finance/financialplanne',
      },
    ],
  },
  {
    id: 5,
    title: '마케팅',
    url: '/recruitments/marketing',
    subNav: [
      {
        title: '컨텐츠 마케터',
        url: '/recruitments/marketing/contensmarketer',
      },
      {
        title: '퍼포먼스 마케터',
        url: '/recruitments/marketing/performancemarketer',
      },
    ],
  },
];
