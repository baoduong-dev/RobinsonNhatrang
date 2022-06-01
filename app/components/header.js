import React from 'react';
import { IoCall } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { Box, Button, Container, Flex, IconButton, Image, Link } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
        as="header"
        bgColor='white'
        w='100%'
        py='4'
        boxShadow='0px 4px 6px rgba(172, 172, 172, 0.15)'
        position='relative'
    >
        <Container
            maxW='container.xl'
        >
            <Flex
                justifyContent='space-between'
                alignItems='center'
            >
                <Box>
                    <Link
                        href='/'
                    >
                        <Image src='/images/logo-robinson.png' alt='Robinson' />
                    </Link>
                </Box>
                <Box
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        as='nav'
                        display={['none', 'none', 'flex']}
                    >
                        <Flex
                            alignItems='center'
                        >
                            <Box>
                                <Link
                                    href='/'
                                    color='blue.900'
                                    py='2'
                                    px='4'
                                    fontSize='lg'
                                    fontWeight='normal'
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    Tour
                                </Link>
                                <Link
                                    href='/'
                                    color='blue.900'
                                    py='2'
                                    px='4'
                                    fontSize='lg'
                                    fontWeight='normal'
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    Dịch vụ
                                </Link>
                                <Link
                                    href='/'
                                    color='blue.900'
                                    py='2'
                                    px='4'
                                    fontSize='lg'
                                    fontWeight='normal'
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    Lưu trú
                                </Link>
                                <Link
                                    href='/'
                                    color='blue.900'
                                    py='2'
                                    px='4'
                                    fontSize='lg'
                                    fontWeight='normal'
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    Nhà hàng
                                </Link>
                                <Link
                                    href='/'
                                    color='blue.900'
                                    py='2'
                                    px='4'
                                    fontSize='lg'
                                    fontWeight='normal'
                                    _hover={{
                                        color: 'blue.500',
                                    }}
                                >
                                    Liên hệ
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box>
                    <Button
                        colorScheme='blue'
                        leftIcon={<IoCall />}
                        variant='outline'
                        _hover={{
                            bgColor: 'blue.600',
                            color: 'white',
                        }}
                    >
                        Gọi ngay
                    </Button>
                    <IconButton
                        icon={<FaBars />}
                        colorScheme='blue'
                        variant='outline'
                        display={['inline-flex', 'none']}
                    />
                </Box>
            </Flex>
        </Container>
    </Box>
  );
}
