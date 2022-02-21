// 쿼리와 렌더링 될 문자열, 그리고 백엔드에 요청보낼 문자열을 변환시켜주는 객체들입니다.

export const CATEGORY = {
  programming: 1,
  design: 2,
  education: 3,
  finance: 4,
  marketing: 5,
};

export const SUBCATEGORY = {
  frontend: 1,
  backend: 2,
  uiuxdesign: 3,
  branding: 4,
  foreignlang: 5,
  eduplan: 6,
  accounting: 7,
  financeplan: 8,
  contentsmarketer: 9,
  performancemarketer: 10,
};

export const COUNTRY_KR_TO_EN = {
  전세계: 'all',
  한국: 'kr',
  대만: 'tw',
};

export const COUNTRY_EN_TO_KR = {
  all: '전세계',
  kr: '한국',
  tw: '대만',
};

export const LOCATION_KR_TO_EN = {
  전세계: 'all',
  '한국 전체': 'all',
  '대만 전체': 'all',
  서울: 'seoul',
  광주: 'gwangju',
  타이페이시: 'taipei',
  타이둥현: 'taitung',
};

export const LOCATION_EN_TO_KR = {
  all: null,
  seoul: '서울',
  gwangju: '광주',
  taipei: '타이페이시',
  taitung: '타이둥현',
};

export const SORT_KR_TO_EN = {
  최신순: 'created_at',
  보상금순: 'compensation',
};

export const SORT_EN_TO_KR = {
  created_at: '최신순',
  compensation: '보상금순',
};
