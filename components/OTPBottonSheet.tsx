import React, { useState } from "react";

import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { LinearGradient } from "@/components/ui/linear-gradient";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";

import { Mail, KeyRound } from "lucide-react-native";

const OTPBottonSheet = () => {
    const [colorMode, setColorMode] = useState<"dark" | "light">("light");

	return (
		<Center className="rounded-xl bg-background-0 p-8 m-6 web:max-w-[400px]">
			<Heading size="xl">Stay up to date</Heading>
			<Text className="text-center leading-[22px] my-2">
				To enter this platform you need an OTP. Enter your email and your password below. Remember to login from the same mobile.
			</Text>

			<Input
				variant="outline"
				size="md"
				isDisabled={false}
				isInvalid={false}
				isReadOnly={false}
				className="w-full rounded-full my-3"
			>
				<InputField placeholder="abc@example.com" />
				<InputSlot className="pr-3">
					<InputIcon
						as={Mail}
						color={colorMode === "light" ? "#525252" : "#DBDBDC"}
					/>
				</InputSlot>
			</Input>
            
			<Input
				variant="outline"
				size="md"
				isDisabled={false}
				isInvalid={false}
				isReadOnly={false}
				className="w-full rounded-full my-3"
			>
				<InputField placeholder="********" type="password" />
				<InputSlot className="pr-3">
					<InputIcon
						as={KeyRound}
						color={colorMode === "light" ? "#525252" : "#DBDBDC"}
					/>
				</InputSlot>
			</Input>

			<LinearGradient
				className="w-full rounded-full items-center py-2"
				colors={["#8637CF", "#0F55A1"]}
				start={[0, 1]}
				end={[1, 0]}
			>
				<Text className="text-white font-semibold">Send me a link</Text>
			</LinearGradient>
		</Center>
	);
};

export default OTPBottonSheet;
