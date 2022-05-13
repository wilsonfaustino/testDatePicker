import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const CalendarDay: ComponentSingleStyleConfig = {
  baseStyle: {
    rounded: 'none',
    bgColor: 'transparent',

    _hover: {
      bgColor: 'gray.100',
    },

    _disabled: {
      color: 'gray.200',
      _hover: {
        cursor: 'initial',
        bgColor: 'transparent',
      },
    },
  },

  sizes: {
    sm: {
      h: 8,
    },
  },

  variants: {
    selected: {
      bgColor: 'blue.400',
      color: 'white',

      _hover: {
        bgColor: 'blue.300',
      },
    },

    range: {
      bgColor: 'blue.200',
      color: 'white',

      _hover: {
        bgColor: 'blue.100',
      },

      _disabled: {
        _hover: {
          bgColor: 'blue.300',
        },
      },
    },

    outside: {
      color: 'gray.300',
    },
    today: {
      bgColor: 'blue.100',
      _hover: {
        bgColor: 'blue.200',
      },
    },
  },

  defaultProps: {
    size: 'sm',
  },
}
