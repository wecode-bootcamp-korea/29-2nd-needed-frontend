export const SIDEBAR_INSIDE = [
  {
    id: 0,
    title: '직군전체',
    url: '/recruitments?country=all&job_sort=created_at',
  },
  {
    id: 1,
    title: '개발',
    url: '/recruitments/programming?country=all&job_sort=created_at',
    subNav: [
      {
        title: '프론트엔드',
        url: '/recruitments/programming/frontend?country=all&job_sort=created_at',
      },
      {
        title: '백엔드',
        url: '/recruitments/programming/backend?country=all&job_sort=created_at',
      },
    ],
  },
  {
    id: 2,
    title: '디자인',
    url: '/recruitments/design?country=all&job_sort=created_at',
    subNav: [
      {
        title: 'UX/UI 디자인',
        url: '/recruitments/design/uxui?country=all&job_sort=created_at',
      },
      {
        title: '브랜딩',
        url: '/recruitments/design/branding?country=all&job_sort=created_at',
      },
    ],
  },
  {
    id: 3,
    title: '교육',
    url: '/recruitments/education?country=all&job_sort=created_at',
    subNav: [
      {
        title: '외국어교육',
        url: '/recruitments/education/foreignlang?country=all&job_sort=created_at',
      },
      {
        title: '교육 기획',
        url: '/recruitments/education/educationplanner?country=all&job_sort=created_at',
      },
    ],
  },
  {
    id: 4,
    title: '금융',
    url: '/recruitments/finance?country=all&job_sort=created_at',
    subNav: [
      {
        title: '재무회계담당자',
        url: '/recruitments/finance/nancialaccounting?country=all&job_sort=created_at',
      },
      {
        title: '자산관리사',
        url: '/recruitments/finance/financialplanne?country=all&job_sort=created_at',
      },
    ],
  },
  {
    id: 5,
    title: '마케팅',
    url: '/recruitments/marketing?country=all&job_sort=created_at',
    subNav: [
      {
        title: '컨텐츠 마케터',
        url: '/recruitments/marketing/contensmarketer?country=all&job_sort=created_at',
      },
      {
        title: '퍼포먼스 마케터',
        url: '/recruitments/marketing/performancemarketer?country=all&job_sort=created_at',
      },
    ],
  },
];
