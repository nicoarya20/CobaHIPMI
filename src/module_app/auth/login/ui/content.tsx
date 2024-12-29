'use client'
import { LayoutBg } from "@/module_app/_global";
import { Color } from "@/module_app/_global/fun/color";
import { Box, Button, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function Content() {
    const [phone, setPhone] = useState("");
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const router = useRouter();

    return (
        <>
            <LayoutBg>
                <Stack 
                    px={isMobile ? "15px" : "25px"} 
                    h="100%" 
                    justify="center"
                >
                    <Box pb={isMobile ? 20 : 30}>
                        <Title 
                            fw={"bold"} 
                            order={3} 
                            c={Color.kuning}
                            size={isMobile ? "h4" : "h3"}
                        >
                            Selamat Datang di HIPMI
                        </Title>
                        <Text fz={isMobile ? "xs" : "sm"} c={Color.putih}>
                            Masuk atau daftar
                        </Text>
                    </Box>
                    <Box pb={isMobile ? 30 : 50}>
                        <PhoneInput
                            country={"id"}
                            value={phone}
                            onChange={phone => setPhone(phone)}
                            inputStyle={{
                                width: "100%",
                                height: isMobile ? "32px" : "36px",
                                fontSize: isMobile ? "12px" : "14px",
                                color: "black",
                                backgroundColor: Color.putih
                            }}
                            buttonStyle={{
                                backgroundColor: Color.putih,
                                color: "black",
                                height: isMobile ? "32px" : "36px",
                            }}
                            containerStyle={{
                                width: "100%",
                            }}
                            placeholder="Nomor Telepon"
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
                            onClick={() => router.push("/auth/verifikasi")}
                        >
                            MASUK
                        </Button>
                    </Box>
                    <Box>
                        <Button 
                            radius={"xl"} 
                            style={{ 
                                borderColor: Color.putih, 
                                fontSize: isMobile ? "10px" : "12px",
                                height: isMobile ? "32px" : "36px",
                            }} 
                            bg={Color.birubg} 
                            c={Color.putih}
                        >
                            Ada Kendala atau Lupa Nomor?
                        </Button>
                    </Box>
                </Stack>
            </LayoutBg>
        </>
    )
}