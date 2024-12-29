'use client'
import { BackgroundImage, Box, Container, rem } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';

export default function LayoutBg({children} : {children: React.ReactNode}) {
    const isMobile = useMediaQuery("(max-width: 48em)");
    
    return (
        <Box w={"100%"} h={"100%"} pos={"fixed"} style={{ overflowY: "auto"}} bg={"dark"}>
            <Container size={isMobile ? "100%" : rem(550)} mih={"100vh"} p={0}>
                <BackgroundImage 
                    src="/assets/image/bg.png" 
                    w={isMobile ? "100%" : rem(550)} 
                    h={"100vh"}
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {children}
                </BackgroundImage>
            </Container>
        </Box>
    );
}