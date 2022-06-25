import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => `${p.theme.space[3]}px`};
  margin: ${p => `${p.theme.space[3]}px`};
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.muted};
  box-shadow: ${p => p.theme.shadows.darkBox};
`;

export const StatusOnline = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${p => p.theme.colors.red};
  border-radius: ${p => p.theme.radii.round};
`;
export const StatusOffline = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${p => p.theme.colors.green};
  border-radius: ${p => p.theme.radii.round};
`;
export const Avatar = styled.img`
  width: ${p => `${p.theme.sizes[0]}px`};
  border-radius: ${p => p.theme.radii.normal};
  margin-left: ${p => `${p.theme.space[3]}px`};
`;
export const Name = styled.p`
  margin-left: ${p => `${p.theme.space[3]}px`};
  line-height: ${p => p.theme.lineHeights.heading};
  font-size: ${p => p.theme.fontSizes.l};
`;
