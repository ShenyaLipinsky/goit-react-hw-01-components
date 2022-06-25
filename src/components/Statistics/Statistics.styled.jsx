import styled from 'styled-components';

export const Title = styled.h2`
  padding: ${p => `${p.theme.space[4]}px`} 0;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondaryText};
`;
export const StatList = styled.ul`
  display: flex;
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => `${p.theme.space[3]}px`};
  background-color: ${p => p.backgroundColor};
  :first-child {
    border-bottom-left-radius: ${p => p.theme.radii.normal};
  }
  :last-child {
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
`;
export const StatLabel = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  text-shadow: ${p => p.theme.shadows.darkText};
`;
export const StatPercentage = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => `${p.theme.space[2]}px`};
  line-height: ${p => p.theme.lineHeights.body};
  text-shadow: ${p => p.theme.shadows.darkText};
`;
