import { Avatar, Box, Container, Flex, Heading, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  {BsLinkedin, BsGithub} from 'react-icons/bs'
import  {HiOutlineExternalLink} from 'react-icons/hi'
import ProjectsList from '../components/ProjectsList'
import {client} from '../lib/client'
import ProjectCard from '../components/ProjectCard'
import { GoMarkGithub } from 'react-icons/go'
import ContactForm from '../components/ContactForm'
import ColorModeSwitch from '../components/ColorModeSwitch'

export default function Home({projects}) {

  // console.log(projects);

  const fadedText = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const fadedLine = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <Box>
      <ColorModeSwitch />
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <Container maxW="1200px" px={['2rem',null]} pt={['2rem',null]} display="flex"  gap={[null,"1rem","6rem"]} flexDir={['column',"column",'row']} maxHeight={[null,'auto','100vh']} overflowY={[null,"hidden"]} height={['auto','auto',"100vh"]}>
        <Box className="left" flex="0.5" my={[null, null, "4rem"]} position={'relative'} > 
          <Heading size={'4xl'}>Hello, I&apos;m Karabo Sambo</Heading>
          {/* About Me */}
          <Text mt={6} fontSize={'md'} lineHeight={'1.6rem'}>
          I am a self taught web developer from South Africa Looking to make great things on the web and become a part of something meaningful.
          I mostly work on front-end development and build web sites and web projects with React and Next.js I am currently looking for work as a junior front-end developer.
          </Text>
          <Text as='quote' display={'block'} fontStyle={'italic'} fontSize={'smaller'} mt={'2'} color={fadedText}>
           &quot;I just want to chill, play music and make a living doing the things I love. I just happen to love creating things and being a part of something bigger than me&quot;
          </Text>
          {/* Vertical Nav */}
          <Stack as='nav' mt={'30px'}>
            <Link href='#projects'>
            <Flex alignItems={'center'} mb={3}>
              <Text>01</Text>
              <Box mx={2} w="30px" height="1px" rounded={'full'} bg={fadedLine}></Box>
              <Text>Projects</Text>
            </Flex>
            </Link>

            <Link href='#contact'>
            <Flex alignItems={'center'} mb={3}>
              <Text>02</Text>
              <Box mx={2} w="30px" height="1px" rounded={'full'} bg={fadedLine}></Box>
              <Text>Get in Touch</Text>
            </Flex>
            </Link>

          </Stack>
          {/* {Horizontal Socials} */}
          <Stack direction="row" mt={10} spacing={8} alignItems="center">
            <Avatar name="Karabo Sambo" src='/images/avatar.jpg' size={'sm'} mr="8"/> 
            
              <Link href="https://www.linkedin.com/in/karabo-sambo-b768621b7/">
                <Flex alignItems="center">
                <BsLinkedin/>
                <Text mx={2}>LinkedIn</Text>
                <Icon as={HiOutlineExternalLink} boxSize={'.8rem'} alignSelf="self-start"/>
                </Flex>
              </Link>

              <Link href="https://github.com/blaqbox-prime">
                <Flex alignItems="center">
                <BsGithub/>
                <Text mx={2}>Github</Text>
                <Icon as={HiOutlineExternalLink} boxSize={'.8rem'} alignSelf="self-start"/>
                </Flex>
              </Link>

          </Stack>
        </Box>
        <Box className="right" flex="0.5" mt={[null, null, "4rem"]}
          overflowY={'auto'}
          scrollBehavior="smooth"
            height={'100%'}
            css={{
              '&::-webkit-scrollbar': {
                width: '1px',
              },
              '&::-webkit-scrollbar-track': {
                width: '1px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'transparent',
                borderRadius: '.5px',
              },
            }}
        >
          {/* Projects */}

          <Box as={'section'} id="projects">
          {
              projects && projects.map((project) => (
              <Box key={project._id} as={'article'} boxShadow={'lg'} borderRadius={'none'} my={'5'} p={5}> 
                <Text fontSize={'x-small'} textTransform={'uppercase'} fontWeight={'bold'} color={fadedText} mb={'4'}>{project.tags.join(' | ')}</Text>
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
            ))
          }
          </Box>

          {/* Contact Form */}
          <ContactForm />
        </Box>
      </Container>
    </Box>
  )
}


export const getServerSideProps = async () => {

  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  return {
    props: {
      projects: projects
    }
  }
}