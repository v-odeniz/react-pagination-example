import React, { useState } from 'react';
import { Card, InputNumber, Form, Row } from 'antd';
import Pagination from './Pagination.react';
import styled from 'styled-components';

const DivCentered = styled.div`
  margin: 0 auto;
  width: 40%;
`;

const StyledCard = styled(Card)`
  margin: 1%;
`;

const generateNCards = N =>
  [...Array(N)].map((_, i) => (
    <StyledCard key={`Card_${i}`}>Card-{i}</StyledCard>
  ));

const PAGE_SIZE = 5;
const TOTAL_CARDS = 35;

function CardViewer() {
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [totalCards, setTotalCards] = useState(TOTAL_CARDS);

  return (
    <DivCentered>
      <Row>
        <Pagination pageSize={pageSize}>
          {generateNCards(totalCards)}
        </Pagination>
      </Row>
      <Row>
        <Form layout="inline">
          <Form.Item label="Page Size">
            <InputNumber
              min={1}
              max={15}
              value={pageSize}
              onChange={setPageSize}
            />
          </Form.Item>
          <Form.Item label="Total Cards">
            <InputNumber
              min={1}
              max={100}
              value={totalCards}
              onChange={setTotalCards}
            />
          </Form.Item>
        </Form>
      </Row>
    </DivCentered>
  );
}
export default CardViewer;
