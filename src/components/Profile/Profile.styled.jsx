import styled from 'styled-components';

export const Description = styled.div`
  padding-top: ${p => `${p.theme.space[4]}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 128px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
`;
export const Name = styled.p`
  margin-top: ${p => `${p.theme.space[4]}px`};
  line-height: ${p => p.theme.lineHeights.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold}; ;
`;
export const AdditionalInfo = styled.p`
  margin-top: ${p => `${p.theme.space[4]}px`};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
  :nth-last-child(2n) {
    margin-bottom: ${p => `${p.theme.space[4]}px`};
  }
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: 1px solid gray;
  border-radius: ${p => p.theme.radii.large};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: ${p => p.theme.colors.accent};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => `${p.theme.space[3]}px`};
  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
export const StatsLabel = styled.span`
  color: ${p => p.theme.colors.white};
`;
export const StatsQuantity = styled.span`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => `${p.theme.space[2]}px`};
  line-height: ${p => p.theme.lineHeights.body};
`;
