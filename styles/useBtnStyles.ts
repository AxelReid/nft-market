import { createStyles } from '@mantine/core'

const useBtnStyles = createStyles((theme) => ({
  border: {
    borderWidth: 2,
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[7]
        : theme.colors.darkish[2],
  },
}))
export default useBtnStyles
