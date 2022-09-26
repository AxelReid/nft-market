import { createStyles } from '@mantine/core'

const useTxtStyles = createStyles((theme) => ({
  navLink: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.colors.darkish[2],
    '&:hover': {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 5 : 9],
    },
  },
}))
export default useTxtStyles
