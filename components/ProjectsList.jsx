import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsList({projects}) {
  return (
    <Box>
        {
            projects.length > 0 && projects.map(project => <ProjectCard project={project} key={project._id} />)
        }
        {
            !projects && (
                <Text>Projects will be added soon.</Text>
            )
        }
    </Box>
  )
}

export default ProjectsList