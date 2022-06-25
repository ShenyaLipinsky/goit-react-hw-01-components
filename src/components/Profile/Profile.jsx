import propTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  AdditionalInfo,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      // px={3}
      // py={4}
      mt={3}
      mx="auto"
      maxWidth={2}
      bg="secondary"
      borderRadius="large"
    >
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <AdditionalInfo>@{tag}</AdditionalInfo>
        <AdditionalInfo>{location}</AdditionalInfo>
        <Stats>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{stats.followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{stats.views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{stats.likes}</StatsQuantity>
          </StatsItem>
        </Stats>
      </Description>
    </Box>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired),
};
