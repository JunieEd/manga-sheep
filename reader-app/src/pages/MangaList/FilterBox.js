import React, { useState } from "react";
import styled from "styled-components";
import { XIcon } from "#src/components/Icon";

const FilterWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-radius: calc(5px + 0.2vw);
  margin-bottom: 10px;
  overflow: hidden;
`;

const FilterSubWrapper = styled.div`
  padding: calc(10px + 0.2vw) calc(10px + 0.5vw);
`;

const FilterWrapperRow = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  padding: calc(10px + 0.5vw) calc(1px + 0.5vw);
`;

const FilterTitle = styled.div`
  width: 100%;
  font-weight: 600;
`;

const Filter = styled.div`
  width: calc(130px + 0.5vw);
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.div`
  font-size: 0.9rem;
`;

const FilterRadioButton = styled.input.attrs((props) => ({ type: "radio" }))`
  margin-left: 10px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
`;

const FilterCheckBox = styled.input.attrs((props) => ({ type: "checkbox" }))`
  margin-left: 10px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
`;

const FilterButtonWrapperRow = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  padding: calc(10px + 0.5vw) calc(1px + 0.5vw);
  justify-content: center;
`;

const FilterButton = styled.div`
  background-color: red;
  color: white;
  line-height: 1.5rem;
  font-size: 0.9rem;
  border-radius: calc(4px + 0.1vw);
  padding: calc(4px + 0.1vw) calc(6px + 0.1vw);
  cursor: pointer;
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  border: none;

  :hover {
    background-color: #b32525;
  }
`;

const XButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const XButtonWrapper = styled.div`
  float: right;
`;

const statuses = ["All", "Completed", "Ongoing", "Suspended"];

const FilterBox = ({
  filters,
  setFilters,
  categories,
  showFilterBox,
  setShowFilterBox,
  categoriesInit,
  setCategoriesInit,
}) => {
  if (!categories) return null;

  const [selectedStatus, setSelectedStatus] = useState(filters.status);
  const [selectedCategories, setSelectedCategories] = useState({
    checkboxes: categories.reduce((cats, cat) => ({ ...cats, [cat]: filters.categories.includes(cat) }), {}),
  });

  const applyClickHandler = () => {
    let filterCopy = { ...filters };
    filterCopy.status = selectedStatus;
    filterCopy.categories = Object.keys(selectedCategories.checkboxes).filter(
      (category) => selectedCategories.checkboxes[category]
    );
    setFilters(filterCopy);
    setShowFilterBox(false);

    if (categoriesInit.length == 0) setCategoriesInit(categories);
    console.log(categoriesInit);
  };

  const resetClickHandler = () => {
    setSelectedStatus(statuses[0]);
    setSelectedCategories((selectedCategories) => ({
      checkboxes: categories.reduce((cats, cat) => ({ ...cats, [cat]: false }), {}),
    }));

    let filterCopy = { ...filters };
    filterCopy.status = statuses[0];
    filterCopy.categories = [];
    setFilters(filterCopy);
  };

  const categoriesChangeHandler = (e) => {
    const { name } = e.target;

    setSelectedCategories((selectedCategories) => ({
      checkboxes: {
        ...selectedCategories.checkboxes,
        [name]: !selectedCategories.checkboxes[name],
      },
    }));
  };

  const xButtonClickHandler = () => {
    setShowFilterBox(false);
  };

  return (
    <FilterWrapper>
      <FilterSubWrapper>
        <XButtonWrapper>
          <XButton className="noSelect" onClick={xButtonClickHandler}>
            <XIcon height="15" />
          </XButton>
        </XButtonWrapper>
        <FilterTitle>Status</FilterTitle>
        <FilterWrapperRow>
          {statuses &&
            statuses.map((status, index) => (
              <Filter key={index}>
                <FilterRadioButton
                  key={status}
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                />
                <FilterLabel>{status}</FilterLabel>
              </Filter>
            ))}
        </FilterWrapperRow>
        <FilterTitle>Rank</FilterTitle>
        <FilterWrapperRow>
          {categories &&
            categories.map((category, index) => (
              <Filter key={index}>
                <FilterCheckBox
                  key={category}
                  name={category}
                  checked={selectedCategories.checkboxes[category]}
                  onChange={(e) => categoriesChangeHandler(e)}
                />
                <FilterLabel>
                  <label htmlFor={category}>{category}</label>
                </FilterLabel>
              </Filter>
            ))}
        </FilterWrapperRow>
        <FilterButtonWrapperRow>
          <FilterButton onClick={() => applyClickHandler()}>Apply</FilterButton>
          <FilterButton onClick={() => resetClickHandler()}>Reset</FilterButton>
        </FilterButtonWrapperRow>
      </FilterSubWrapper>
    </FilterWrapper>
  );
};

export default FilterBox;
