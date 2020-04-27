import React, { useState } from "react";
import html_entity_decode from "locutus/php/strings/html_entity_decode";

import styled from "styled-components";

const ReadMoreLess = styled.span`
  color: red;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: var(--global-font-color);
  }
`;

const INITIAL_TEXT_LIMIT = 200;

const ReadMore = ({ text }) => {
  const [textLimit, SetTextLimit] = useState(INITIAL_TEXT_LIMIT);
  const [isReadMore, SetIsReadMore] = useState(true);

  const textLength = text.length;

  const readMoreClick = () => {
    SetIsReadMore(!isReadMore);
    SetTextLimit(isReadMore ? textLength : INITIAL_TEXT_LIMIT);
  };

  return (
    <>
      <p>
        {html_entity_decode(text).slice(0, textLimit)}
        {textLength > INITIAL_TEXT_LIMIT && (
          <>
            {isReadMore && "..."}
            {"  "}
            <ReadMoreLess onClick={readMoreClick}>Read {isReadMore ? "more" : "less"}</ReadMoreLess>
          </>
        )}
      </p>
    </>
  );
};

export default ReadMore;
