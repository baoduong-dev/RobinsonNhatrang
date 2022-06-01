import React from 'react';
import { IoCall } from 'react-icons/io5';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Container, Flex, IconButton, Image, Link, Stack, StackDivider, useDisclosure, VStack } from '@chakra-ui/react';
// React.useLayoutEffect = React.useEffect;

export default function Header() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box
            as="header"
            bgColor='white'
            w='100%'
            py='4'
            boxShadow={'0px 4px 6px rgba(172, 172, 172, 0.15)'}
            position='relative'
            zIndex={1}
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
                            display={{ base: 'none', md: 'inline-flex' }}
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
                            colorScheme={'blue'}
                            variant='outline'
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            aria-label={'Toggle Navigation'}
                            onClick={onToggle}
                            display={{ base: 'inline-flex', md: 'none' }}
                        />
                    </Box>
                </Flex>

            </Container>
            <Collapse
                in={isOpen}
                animateOpacity
            >
                <Box
                    mt='4'
                    borderTop='1px solid #e6e6e6'
                    position='relative'
                >
                    <Container>
                        <MobileNav />
                    </Container>
                </Box>
            </Collapse>
        </Box>
    );
}

const MobileNav = () => {
    return (
        <VStack
            bg='white'
            p='4'
            display={{ md: 'none' }}
        >
            <Box
                py='2'
            >
                <Box
                    as='a'
                    href='/'
                    color='blue.900'
                    fontSize='lg'
                    fontWeight='normal'
                    _hover={{
                        color: 'blue.500',
                    }}
                >
                    Tour
                </Box>
            </Box>
            <Box
                py='2'
            >
                <Box
                    as='a'
                    href='/'
                    color='blue.900'
                    fontSize='lg'
                    fontWeight='normal'
                    _hover={{
                        color: 'blue.500',
                    }}
                >
                    Dịch vụ
                </Box>
            </Box>
            <Box
                py='2'
            >
                <Box
                    as='a'
                    href='/'
                    color='blue.900'
                    fontSize='lg'
                    fontWeight='normal'
                    _hover={{
                        color: 'blue.500',
                    }}
                >
                    Lưu trú
                </Box>
            </Box>
            <Box
                py='2'
            >
                <Box
                    as='a'
                    href='/'
                    color='blue.900'
                    fontSize='lg'
                    fontWeight='normal'
                    _hover={{
                        color: 'blue.500',
                    }}
                >
                    Nhà hàng
                </Box>
            </Box>
            <Box
                py='2'
            >
                <Box
                    as='a'
                    href='/'
                    color='blue.900'
                    fontSize='lg'
                    fontWeight='normal'
                    _hover={{
                        color: 'blue.500',
                    }}
                >
                    Liên hệ
                </Box>
            </Box>
        </VStack>
    )
}