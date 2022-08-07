import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import {GoMarkGithub, GoGlobe} from 'react-icons/go'


function ProjectCard({project}) {
  <Box as={'article'} boxShadow={'lg'} borderRadius={'none'} my={'5'} p={5}> 
  <Text fontSize={'x-small'} textTransform={'uppercase'} fontWeight={'bold'} color={'blackAlpha.400'} mb={'4'}>{project.tags.join(' | ')}</Text>
  <Flex alignItems={'baseline'} mb={'3'}>
    <Link href={project.url} isExternal>
    <Text as={'h1'}
    fontWeight={'bold'}
    textAlign={'left'}
    fontSize={['lg' , 'xl']}
    >{project.title} | {project.subtitle}
    </Text>
    </Link>
  </Flex>

<Text
textAlign={'left'}
fontSize={['sm','md']}
fontWeight={'normal'}
maxWidth={'90%'}
>
{project.description}
</Text>
<Link href={project.source_code} isExternal
outlineColor={'transparent'}
_hover={{
color: 'blue.600',
transition: 'color .25s'
}}
>
<Flex mt={'4'} w='full' alignItems="center">
<Icon fontSize={'md'} as={GoMarkGithub} mr='3' />
<Text fontSize={'smaller'}>Github Repository</Text>
</Flex>
</Link>
</Box>
}

export default ProjectCard