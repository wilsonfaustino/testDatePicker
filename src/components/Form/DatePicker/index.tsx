import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Box, Button, ChakraProvider, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure, useOutsideClick } from '@chakra-ui/react'
import {
    Calendar,
    CalendarControls,
    CalendarPrevButton,
    CalendarNextButton,
    CalendarMonths,
    CalendarMonth,
    CalendarMonthName,
    CalendarWeek,
    CalendarDays,
    CalendarDate,
    CalendarDefaultTheme,
  } from 'components/datepicker-main'
import { format, isValid, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DatePickerProps } from './types'


  export const DatePicker = (props: DatePickerProps) => {
    const [date, setDate] = useState<CalendarDate>()
    const [value, setValue] = useState('')
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const calendarRef = useRef(null)
  
    const handleSelectDate = (date: CalendarDate) => {
      setDate(date)
      setValue(() => (isValid(date) ? format(date, 'dd/MM/yyyy') : ''))
      props.onChange(isValid(date) ? format(date, 'dd/MM/yyyy') : '')
      onClose()
    }
  
    const match = (value: string) => value.match(/(\d{2})\/(\d{2})\/(\d{4})/)
  
    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setValue(target.value)
  
      if (match(target.value)) {
        onClose()
      }
    }
  
    useOutsideClick({
      ref: calendarRef,
      handler: onClose,
      enabled: isOpen,
    })
  
    useEffect(() => {
      if (match(value)) {
        const date = new Date(value)
  
        return setDate(date)
      }
    }, [value])
  
    return (
      <Box>
        <Popover
          placement="auto-start"
          isOpen={isOpen}
          onClose={onClose}
          initialFocusRef={initialRef}
          isLazy
        >
          <PopoverTrigger>
            <Box onClick={onOpen} ref={initialRef}>
              <Input
                placeholder="dd/MM/yyyy"
                value={value}
                onChange={handleInputChange}
              />
            </Box>
          </PopoverTrigger>
  
          <PopoverContent
            p={0}
            w="min-content"
            border="none"
            outline="none"
            _focus={{ boxShadow: 'none' }}
            ref={calendarRef}
          >
            <ChakraProvider theme={CalendarDefaultTheme}>
                <Calendar
                value={{ start: date }}
                onSelectDate={handleSelectDate}
                singleDateSelection
                locale={ptBR}
                weekdayFormat="EEEEEE"
                disablePastDates={subDays(new Date(), 1)}
                highlightToday
                >
                <PopoverBody p={0}>
                    <CalendarControls>
                    <CalendarPrevButton 
                        as={props => (
                        <Button size="xs" rounded="full" colorScheme="blue" {...props}>
                        &#8249;
                        </Button>
                    )} />
                    <CalendarNextButton 
                        as={props => (
                        <Button size="xs" rounded="full" colorScheme="blue" {...props}>
                        &#8250;
                        </Button>
                    )} />
                    </CalendarControls>
    
                    <CalendarMonths>
                    <CalendarMonth>
                        <CalendarMonthName />
                        <CalendarWeek />
                        <CalendarDays />
                    </CalendarMonth>
                    </CalendarMonths>
                </PopoverBody>
                </Calendar>
            </ChakraProvider>
          </PopoverContent>
        </Popover>
      </Box>
    )
  }