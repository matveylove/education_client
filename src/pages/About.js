import React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import DnsIcon from '@mui/icons-material/Dns';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { motion } from 'framer-motion';

const Item = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));

const About = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Обо мне
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <BadgeIcon />
              <Typography variant="p">Имя:</Typography>
              <Typography variant="h6">{user.firstName}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <DnsIcon />
              <Typography variant="p">Фамилия:</Typography>
              <Typography variant="h6">{user.lastName}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <AppsOutageIcon />
              <Typography variant="p">Возраст:</Typography>
              <Typography variant="h6">{user.age}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <AlternateEmailIcon />
              <Typography variant="p">Email:</Typography>
              <Typography variant="h6">{user.email}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <StarBorderIcon />
              <Typography variant="p">Роль:</Typography>
              <Typography variant="h6">{user.role === 'TEACHER' ? 'Учитель' : 'Ученик'}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <CelebrationIcon />
              <Typography variant="p">Количество бонусных очков:</Typography>
              <Typography variant="h6">{user.bonusPoints}</Typography>
            </Stack>
          </Item>
          <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <ChecklistIcon />
              <Typography variant="p">Количество пройденных курсов:</Typography>
              <Typography variant="h6">{user.coursesCompleted}</Typography>
            </Stack>
        </Item>
        <Item
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
        <Stack direction="column" spacing={1} alignItems="flex-start">
        <Stack direction="row" spacing={2} alignItems="center">
        <ChecklistIcon />
            <Typography variant="p">Пройденные курсы:</Typography>
        </Stack>
        {user.coursesNames === '' ? (
        <Typography variant="h6">У вас нет пройденных курсов</Typography>
        ) : (
        <motion.ul
        style={{ padding: '0px', listStyle: 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        >
{user.coursesNames.trimEnd().split(',').map((item, index) =>
index + 1 !== user.coursesNames.trimEnd().split(',').length ? (
<motion.li key={index} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
<Typography variant="h6">{index + 1}. {item}</Typography>
</motion.li>
) : (
''
)
)}
</motion.ul>
)}
</Stack>
</Item>
</Stack>
</Box>
</div>
);
};
export default About;