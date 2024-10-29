import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex; /* Use flexbox to lay out children */
  flex-wrap: wrap; /* Allow wrapping of cards */
  justify-content: center; /* Space between cards */
  gap: 20px; /* Space between cards */

  @media (max-width: 400px) {
    flex-direction: column; /* Stack cards vertically on mobile */
    align-items: center; /* Center align cards */
  }
`;
