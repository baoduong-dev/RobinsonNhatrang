import { Box, Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box
            as='footer'
            bgColor='white'
            py='4'
            position='relative'
        >
            <Container
                maxW='container.xl'
            >
                <Flex
                    justifyContent='space-between'
                >
                    <Box>
                        <Text
                            fontSize='md'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            <Text
                                as='span'
                                fontWeight='semibold'
                            >
                                Robinson Nha Trang
                            </Text>
                            {' © 2022. '}
                            <Text
                                as='span'
                                fontWeight='semibold'
                            >
                                All Rights Reserved.
                            </Text>
                        </Text>
                    </Box>
                    <HStack
                        spacing={2}
                    >
                        <Box>
                            <IconButton
                                icon={<FaFacebookF />}
                                bgColor='blue.50'
                                color='blue.500'
                                rounded='full'
                                _hover={{
                                    bgColor: 'blue.500',
                                    color: 'white',
                                }}
                            />
                        </Box>
                        <Box>
                            <IconButton
                                icon={<FaTwitter />}
                                bgColor='blue.50'
                                color='blue.500'
                                rounded='full'
                                _hover={{
                                    bgColor: 'blue.500',
                                    color: 'white',
                                }}
                            />
                        </Box>
                        <Box>
                            <IconButton
                                icon={<FaYoutube />}
                                bgColor='blue.50'
                                color='blue.500'
                                rounded='full'
                                _hover={{
                                    bgColor: 'blue.500',
                                    color: 'white',
                                }}
                            />
                        </Box>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
