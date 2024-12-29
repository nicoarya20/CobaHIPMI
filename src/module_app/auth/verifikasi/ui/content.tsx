'use client'
import { LayoutBg } from "@/module_app/_global";
import { Color } from "@/module_app/_global/fun/color";
import { Box, Button, PinInput, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { useState } from "react";

export default function Content() {
    const [otp, setOtp] = useState("");
    const isMobile = useMediaQuery("(max-width: 48em)");

    return (
        <>
            <LayoutBg>
                <Stack px={isMobile ? "15px" : "25px"} h="100%" justify="center">
                    <Box pb={isMobile ? 20 : 30}>
                        <Title 
                            fw={"bold"} 
                            order={3} 
                            c={Color.kuning}
                            size={isMobile ? "h4" : "h3"}
                        >
                            Masukkan Kode OTP
                        </Title>
                        <Text fz={isMobile ? "xs" : "sm"} c={Color.putih}>
                            Kode OTP telah dikirim ke nomor Whatsapp anda
                        </Text>
                    </Box>
                    <Box pb={isMobile ? 30 : 50} style={{ display: 'flex', justifyContent: 'center' }}>
                        <PinInput
                            length={4}
                            type="number"
                            value={otp}
                            onChange={setOtp}
                            size={isMobile ? "md" : "lg"}
                            styles={{
                                input: {
                                    backgroundColor: Color.putih,
                                    color: 'black',
                                    '&:focus': {
                                        borderColor: Color.kuning,
                                    },
                                },
                            }}
                        />
                    </Box>
                    <Box pb={isMobile ? 20 : 30}>
                        <Button 
                            bg={Color.kuning} 
                            style={{ 
                                fontWeight: "bold", 
                                fontSize: isMobile ? "12px" : "14px",
                                height: isMobile ? "32px" : "36px",
                            }} 
                            c="dark" 
                            fullWidth 
                            radius={"xl"}
                        >
                            VERIFIKASI
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            variant="outline"
                            radius={"xl"} 
                            style={{ 
                                borderColor: Color.putih, 
                                fontSize: isMobile ? "10px" : "12px",
                                height: isMobile ? "32px" : "36px",
                            }} 
                            bg={Color.birubg} 
                            c={Color.putih}
                        >
                            Kirim Ulang OTP
                        </Button>
                    </Box>
                </Stack>
            </LayoutBg>
        </>
    )
}