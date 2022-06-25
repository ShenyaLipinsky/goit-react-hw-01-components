import styled from 'styled-components';

export const TableTitle = styled.th`
  padding: ${p => `${p.theme.space[2]}px`};
  background-color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};

  :first-child {
    border-top-left-radius: ${p => p.theme.radii.normal};
  }
  :last-child {
    border-top-right-radius: ${p => p.theme.radii.normal};
  }
`;
export const TableDescription = styled.th`
  padding: ${p => `${p.theme.space[3]}px`};
  background-color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const TableRow = styled.tr`
  :last-child ${TableDescription}:first-child {
    border-bottom-left-radius: ${p => p.theme.radii.normal};
  }
  :last-child ${TableDescription}:last-child {
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
  :nth-child(n) ${TableDescription}:first-child::first-letter {
    text-transform: uppercase;
  }
`;
