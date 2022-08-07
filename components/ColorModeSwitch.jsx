import { useColorMode, Icon, Box } from "@chakra-ui/react"
import {SunIcon, MoonIcon} from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="absolute" top="1rem" right="1rem">
        <IconButton onClick={toggleColorMode} icon={colorMode == 'light' ? <MoonIcon />  : <SunIcon /> }/>
    </Box>
        
  )
}

export default ColorModeSwitch