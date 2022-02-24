import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GraphComponent from './components/GraphComponent';

function Salary() {
  const SALARY_DATA = [
    { name: '신입', 연봉: 0 },
    { name: '1년', 연봉: 0 },
    { name: '2년', 연봉: 0 },
    { name: '3년', 연봉: 0 },
    { name: '4년', 연봉: 0 },
    { name: '5년', 연봉: 0 },
    { name: '6년', 연봉: 0 },
    { name: '7년', 연봉: 0 },
    { name: '8년', 연봉: 0 },
    { name: '9년', 연봉: 0 },
    { name: '10년', 연봉: 0 },
  ];
  const [fetchedSalary, setFetchedSalary] = useState({});

  const [selectOptions, setSelectOptions] = useState({
    개발: '',
  });

  const [selectedValue, setSelectedValue] = useState({
    mainSelected: '개발',
    subSelected: '프론트엔드',
    yearSelected: '신입',
    inputNumber: 0,
  });

  const handleChange = ({ target }) => {
    if (target.name === 'mainSelected') {
      setSelectedValue(prev => ({
        ...prev,
        [target.name]: target.value,
        subSelected: selectOptions[target.value][0],
      }));
    } else {
      setSelectedValue(prev => ({ ...prev, [target.name]: target.value }));
    }
  };

  const yearOptions = ['신입'];
  for (let i = 1; i < 11; i++) {
    yearOptions.push(`${i}년`);
  }

  const selectedMain = selectOptions[selectedValue.mainSelected];
  const yearIndex = yearOptions.indexOf(selectedValue.yearSelected);

  const percentage = (value, input) => {
    if (value > input) {
      return ` 대비 ${Math.round(((value - input) * 100) / value)}% 낮은 값`;
    } else {
      return ` 대비 ${Math.round(((input - value) * 100) / value)}% 높은 값`;
    }
  };

  useEffect(() => {
    if (selectOptions) {
      fetch('/data/salarySelect.json')
        .then(res => res.json())
        .then(options => setSelectOptions(options[0]));
    }
  }, [selectOptions]);

  const salaryCategoryURLFetcher = subCateg => {
    const expr = subCateg;
    switch (expr) {
      case '프론트엔드':
        return 1;
        break;
      case '백엔드':
        return 2;
        break;
      case 'UI/UX 디자인':
        return 3;
        break;
      case 'CI/BI 디자인':
        return 4;
        break;
      case '외국어 교육':
        return 5;
        break;
      case '교육 기획':
        return 6;
        break;
      case '재무회계담당자':
        return 7;
        break;
      case '자산관리사':
        return 8;
        break;
      case '컨텐츠 마케터':
        return 9;
        break;
      case '퍼포먼스 마케터':
        return 10;
        break;
      default:
        return 0;
    }
  };

  useEffect(() => {
    fetch(
      `http://10.58.7.168:8000/users/salary/${salaryCategoryURLFetcher(
        selectedValue.subSelected
      )}`
    )
      .then(res => res.json())
      .then(salaryData => {
        setFetchedSalary(salaryData.result);
      });
  }, [selectedValue.subSelected]);

  const changeSalaryData = () => {
    if (Object.keys(fetchedSalary).length > 0) {
      for (let i = 0; i < Object.keys(fetchedSalary).length; i++) {
        SALARY_DATA[i]['연봉'] = fetchedSalary[`salary_avg_career_${i}`];
      }
    }
  };
  changeSalaryData();

  //console.log(fetchedSalary);

  return (
    <div>
      {SALARY_DATA && selectOptions ? (
        <StyledSalary>
          <GraphSection>
            <GraphWrap>
              <GraphComponent
                data={SALARY_DATA}
                selectedYear={selectedValue.yearSelected}
              />
              <GraphAside>
                <StyledH3>{selectedValue.mainSelected}</StyledH3>
                <StyledH3>{selectedValue.subSelected}</StyledH3>
                <StyledH4>{`${selectedValue.yearSelected} ${selectedValue.subSelected} 예상 연봉`}</StyledH4>
                <StyledH4>
                  <span>
                    {SALARY_DATA[yearIndex]['연봉'] &&
                      SALARY_DATA[yearIndex]['연봉'].toLocaleString()}
                  </span>{' '}
                  만원
                </StyledH4>
                <StyledCompare isItZero={selectedValue.inputNumber}>
                  {selectedValue.yearSelected}차
                  {percentage(
                    SALARY_DATA[yearIndex]['연봉'],
                    selectedValue.inputNumber
                  )}
                </StyledCompare>
              </GraphAside>
            </GraphWrap>
          </GraphSection>
          <SelectContainer>
            <SelectWrap>
              <StyledSelect
                name="mainSelected"
                value={selectedValue.mainSelected}
                onChange={handleChange}
              >
                {selectOptions?.mainCategories?.map((category, idx) => {
                  return (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  );
                })}
              </StyledSelect>
              <StyledSelect
                name="subSelected"
                value={selectedValue.subSelected}
                onChange={handleChange}
              >
                {selectedMain &&
                  selectedMain.map((category, idx) => {
                    return (
                      <option key={idx} value={category}>
                        {category}
                      </option>
                    );
                  })}
              </StyledSelect>
              <StyledSelect
                name="yearSelected"
                value={selectedValue.yearSelected}
                onChange={handleChange}
              >
                {yearOptions?.map((year, idx) => {
                  return (
                    <option key={idx} value={year}>
                      {year}
                    </option>
                  );
                })}
              </StyledSelect>
              <StyledInput
                type="number"
                name="inputNumber"
                onChange={handleChange}
              />
            </SelectWrap>
          </SelectContainer>
          <section>
            <StyledDown />
          </section>
        </StyledSalary>
      ) : (
        <div>1</div>
      )}
    </div>
  );
}

const StyledSalary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const GraphSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.themePurple};
  display: flex;
  justify-content: center;
  padding: 90px 0 40px;
`;

const GraphWrap = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GraphAside = styled.aside`
  width: calc(26% - 20px);
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledH3 = styled.h3`
  font-weight: 500;
  padding: 9px 10px 8px;
  border-radius: 3px;
  margin: 0 10px 10px 0;
  background-color: #fff;
  color: ${({ theme }) => theme.themePurple};
`;

const StyledH4 = styled.h4`
  font-size: 16px;
  color: #fff;
  line-height: 1.8;
  span {
    font-size: 40px;
    font-weight: 600;
  }
`;

const StyledCompare = styled.div`
  display: ${({ isItZero }) => (isItZero ? 'block' : 'none')};
  font-size: 14px;
  color: #fff;
`;

const SelectContainer = styled.div`
  width: 100%;
  position: relative;
  top: -24px;
  display: flex;
  justify-content: center;
  height: 40px;
`;

const SelectWrap = styled.div`
  max-width: 1080px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(1, 1, 1, 0.2);
`;

const StyledSelect = styled.select`
  padding-left: 15px;
  width: 25%;
  height: 100%;
  border: none;
  border-right: 1px solid ${({ theme }) => theme.borderGray};
`;
const StyledInput = styled.input`
  width: 25%;
  height: 100%;
  border: none;
`;

const StyledDown = styled.div`
  height: 70px;
`;

export default Salary;
