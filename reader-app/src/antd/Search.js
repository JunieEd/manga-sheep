import { Icon, Input, AutoComplete } from "antd";
import React from "react";

const Search = ({ dataSource, onChange }) => {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 350 }}>
      <AutoComplete
        className="certain-category-search"
        dataSource={dataSource}
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 350 }}
        optionLabelProp="value"
        onChange={onChange}
        placeholder="input here"
        size="large"
        style={{ width: "100%" }}
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
    </div>
  );
};

export default Search;
